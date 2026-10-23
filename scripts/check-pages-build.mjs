import assert from 'node:assert/strict';
import {readFile, stat} from 'node:fs/promises';
import {resolve, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = resolve(root, 'dist');
const html = await readFile(resolve(dist, 'index.html'), 'utf8');
const assets = [...html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)].map(match => match[1]);
assert(assets.length > 0, 'O HTML deve referenciar os arquivos compilados.');
for (const url of assets) {
  assert(url.startsWith('/Deriva/'), `Recurso fora de /Deriva/: ${url}`);
  const path = resolve(dist, url.slice('/Deriva/'.length));
  assert(!relative(dist, path).startsWith('..'), 'Recurso fora do diretório publicado.');
  assert((await stat(path)).isFile(), `Arquivo ausente: ${url}`);
}
const solutions = JSON.parse(await readFile(resolve(root, 'src/content/solucoes.json'), 'utf8'));
const images = new Set(solutions.flatMap(solution => (solution.assets ?? []).map(asset => asset.path)));
for (const image of images) {
  const path = resolve(dist, 'content', image);
  assert(!relative(dist, path).startsWith('..'), 'Imagem fora do diretório publicado.');
  assert((await stat(path)).size > 0, `Gráfico ausente: ${image}`);
}
console.log(`Pages: ${assets.length} recursos do HTML e ${images.size} gráficos conferidos em /Deriva/.`);

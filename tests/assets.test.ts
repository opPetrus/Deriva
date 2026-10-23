import {afterEach, describe, expect, it, vi} from 'vitest';
import {publicAsset} from '../src/domain/assets';

afterEach(() => vi.unstubAllEnvs());

describe('endereços dos recursos estáticos', () => {
  it('preserva a execução na raiz local', () => {
    vi.stubEnv('BASE_URL', '/');
    expect(publicAsset('content/graficos/DER-L3-081.png')).toBe('/content/graficos/DER-L3-081.png');
  });
  it('resolve os gráficos dentro da subpasta Deriva no GitHub Pages', () => {
    vi.stubEnv('BASE_URL', '/Deriva/');
    expect(publicAsset('content/graficos/DER-L3-081.png')).toBe('/Deriva/content/graficos/DER-L3-081.png');
  });
  it('evita que uma barra inicial descarte a subpasta publicada', () => {
    vi.stubEnv('BASE_URL', '/Deriva/');
    expect(publicAsset('/content/graficos/DER-L3-081.png')).toBe('/Deriva/content/graficos/DER-L3-081.png');
  });
});

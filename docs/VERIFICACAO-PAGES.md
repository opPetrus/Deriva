# Verificação da preparação para GitHub Pages

## Resultado local

- `npm ci`: instalação pelo lockfile concluída; auditoria da instalação informou zero vulnerabilidades.
- `npm test`: **61 testes aprovados, em 6 arquivos**. São os 58 testes anteriores e 3 verificações de endereços dos recursos na raiz e na subpasta.
- `npm run build:pages`: TypeScript e compilação de produção aprovados, com prefixo `/Deriva/`.
- `npm run check:pages`: os 5 recursos de entrada do HTML e os 9 gráficos existem no diretório publicado.
- Prévia executada com `npm run preview:pages` em `http://127.0.0.1:4173/Deriva/`.
- HTTP: HTML, JavaScript principal, runtime React, biblioteca matemática, chunk de soluções e gráfico 81 retornaram 200 com os tipos de arquivo corretos.
- Navegador real: exercício 81 com fórmulas e referências; revelação da solução com confirmação; imagem `/Deriva/content/graficos/DER-L3-081.png` renderizada com largura natural de 1100 pixels.

Use `preview:pages` com `build:pages`, e `preview` com `build`: o modo da prévia precisa corresponder à compilação.

## Preservação do curso

Comparação SHA-256 com a aplicação entregue anteriormente: **17 arquivos JSON de conteúdo idênticos e 9 gráficos idênticos**. Isso inclui aulas, exercícios, soluções, rubricas, revisões, avaliações, cobertura e verificações matemáticas.

`fontes.json` preserva autores, títulos, nomes, IDs de referência, páginas e hashes; apenas os caminhos pessoais dos anexos foram substituídos pelos nomes dos PDFs.

11 módulos, 33 aulas, 65 exemplos, 138 exercícios/soluções e 260 dicas preservados. Os 105 exercícios numerados dos PDFs permanecem mapeados. Fluxos de resposta, persistência, erros, revisões e simulados permanecem na aplicação e nos testes anteriores. Nenhuma funcionalidade foi retirada.

Esta etapa verifica integração e publicação estática. A revisão matemática continua sendo a registrada na etapa pedagógica; este build não é uma nova auditoria matemática externa.

## Repositório e publicação

O repositório público `opPetrus/Deriva` foi consultado e clonado vazio. Sem credencial Git disponível e sem sessão de GitHub no navegador, a escrita não pôde ser confirmada. Nenhum arquivo foi enviado.

O workflow foi preparado para testes, build e publicação em cada push na `main`, com ações oficiais cujos commits foram conferidos na API do GitHub. **Ainda não foi executado pelo GitHub Actions**: depende do primeiro envio autenticado e da seleção de GitHub Actions em Settings → Pages. A URL pública ainda não é apresentada como ativa.

O pacote não inclui `node_modules`, `dist`, cache, credenciais, dados de estudo ou PDFs anexados. Inclui código-fonte, lockfile, testes, gráficos e conteúdo completo necessário ao site. O Actions gera `dist` automaticamente.

A aplicação local original não foi alterada; a cópia para GitHub está em pasta separada.

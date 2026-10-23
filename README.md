# Deriva — aplicação de estudo de derivadas

Aplicação funcional em português, com React, TypeScript, Vite, KaTeX e IndexedDB, preparada para execução local e GitHub Pages. Conteúdo integrado: 11 módulos, 33 aulas, 65 exemplos, 138 exercícios (105 dos PDFs e 33 autorais), 260 dicas, diagnóstico e dois simulados. Nenhuma aula é gerada sob demanda e não há conteúdo de preenchimento.

## Publicar no GitHub Pages

O repositório de destino é [opPetrus/Deriva](https://github.com/opPetrus/Deriva). A URL esperada, após a primeira publicação aprovada pelo GitHub, é **https://oppetrus.github.io/Deriva/**.

1. Envie os arquivos deste projeto para a raiz da branch `main`.
2. No repositório, abra **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Na aba **Actions**, acompanhe **Testar e publicar Deriva**. Se o primeiro envio ocorreu antes da configuração de Pages, execute novamente o workflow pelo botão **Run workflow**.
4. Cada novo push em `main` executa instalação, testes, build, verificação dos recursos e publicação. Pull requests executam os testes e o build, sem publicar.

O workflow usa as ações oficiais fixadas por commit e permissões de publicação restritas ao job de deploy. Não é necessário cadastrar token pessoal, banco de dados ou variável secreta no projeto. O `GITHUB_TOKEN` e a identidade de publicação são fornecidos pelo GitHub Actions.

Leia [o guia de envio e publicação](docs/GITHUB-PAGES.md) e [os resultados de verificação](docs/VERIFICACAO-PAGES.md). Esta preparação local não significa que o site já esteja publicado.

## Abrir e estudar

1. Instale Node.js 22.12 ou superior. Na primeira execução desta cópia de código-fonte, execute `npm ci` e `npm run build`. No Windows, abra **Iniciar-Deriva.cmd** depois da compilação.
2. Abra `http://127.0.0.1:5173/` se o navegador não abrir automaticamente. Mantenha a janela do Deriva aberta enquanto estuda; Ctrl+C encerra o servidor local.
3. Comece pelo diagnóstico em **Simulados**, ou abra qualquer aula em **Curso**. Todas estão acessíveis desde o início.
4. Use **Estudar** no topo para iniciar o cronômetro de estudo. Ele pausa quando a página fica oculta; ao retornar, retome manualmente. O relógio de simulado é separado e continua correndo fora da página.
5. Em um exercício, o rascunho é salvo ao digitar; **Registrar tentativa** preserva uma cópia no histórico. O gabarito e as dicas ficam ocultos inicialmente.
6. Confira a resolução com a solução e registre a rubrica. Erros alimentam o caderno e as revisões. Uma nova tentativa autônoma com≥90% marca o erro daquela questão como retomado; uma variante permite verificar transferência.

Os dados pertencem à origem do navegador. Use sempre o mesmo endereço (`127.0.0.1:5173`) e o mesmo perfil. `localhost`, outra porta ou outro navegador têm um espaço de dados diferente. Para transferir, use **Dados e preferências → Exportar/Importar progresso**. Não limpe os dados do navegador sem guardar um backup.

## Funcionalidades entregues

- Painel com leitura concluída, tentativas, tempo cronometrado, erros, revisões e recomendação explicada.
- Curso completo com sumário, pré-requisitos, condições, exemplos, erros comuns, navegação anterior/próxima e marcação de aula estudada.
- Fórmulas em KaTeX; gráfico interativo de tangente para x² e cosseno;9 gráficos das soluções.
- Banco com filtros de assunto, dificuldade, origem, ainda não tentados e conferência pendente; busca por enunciado/ID.
- Rascunhos, tentativas imutáveis, dicas progressivas, confirmação antes de revelar sem tentar, histórico e rubricas.
- Botão **Corrigir com GPT** que copia enunciado, resposta, assunto, dificuldade e instruções; sem API nem envio automático.
- Registro da origem da conferência (usuário ou professor/GPT externo), categorias de erro e observações.
- Revisões com prazos de1,3 e7 dias, alternativa de revisão antecipada e seis sessões cumulativas.
- Diagnóstico e simulados com relógio absoluto, respostas restauradas, entrega automática ao expirar, consulta bloqueada durante avaliação, correção posterior e plano de revisão.
- IndexedDB, indicação de gravação, recuperação de erro de escrita e proteção contra sobrescrita de outra aba.
- Exportação/importação JSON com validação, resumo e confirmação; dados incompatíveis são rejeitados sem substituir progresso.
- Tema claro/escuro, menu móvel, navegação por teclado e link para pular ao conteúdo.

## Limites reais

- Expressões livres e demonstrações exigem conferência por rubrica. Não há corretor algébrico automático; nenhuma resposta é considerada correta por comparação de texto. Essa escolha preserva a confiabilidade prevista no conteúdo.
- Sem login, nuvem de dados, backend de respostas ou sincronização automática entre dispositivos, conforme escopo aprovado. O servidor local e o GitHub Pages entregam arquivos; as respostas permanecem no navegador.
- Não é um aplicativo PWA instalado. A abertura exige o servidor local ou acesso ao site publicado. Os recursos não dependem de CDN, fontes remotas ou API de IA.
- Revisões aparecem ao abrir o aplicativo, sem notificações em segundo plano. O tempo de estudo manual não inclui automaticamente todo o tempo de simulado ou uma página apenas aberta.
- O gráfico interativo se limita a duas funções didáticas; os demais gráficos das soluções são estáticos.
- O indicador de preparação mostra evidências; não prevê nota oficial nem garante10. Casos especiais do item30 preservam as duas leituras da notação do PDF.
- A validação visual foi feita no navegador Chromium da prévia em1280×900 e390×844, além da largura padrão do painel. Safari, Firefox e dispositivos físicos não foram testados.

## Desenvolver, testar e compilar

Com Node.js22.12+ e npm:

```text
npm ci
npm run dev
npm test
npm run build
```

Para reproduzir a publicação em `/Deriva/`, execute `npm run build:pages`, `npm run check:pages` e `npm run preview:pages`; abra `http://127.0.0.1:4173/Deriva/`. O modo padrão de `npm run build` continua usando a raiz `/`, compatível com o iniciador local. Use `npm run preview` apenas com o build local; a prévia de Pages precisa do modo `github-pages`.

O arquivo `package-lock.json` fixa a instalação. `npm run dev` usa a porta5173; `npm run preview` usa4173 e, portanto, outro espaço de progresso. Para estudar no endereço habitual com a compilação entregue, use `node iniciar.mjs`.

## Organização

`src/components`: componentes reutilizáveis de texto matemático, solução, rubrica, cabeçalho e gráfico. `src/content`: conteúdo validado, com soluções em arquivo separado carregado sob demanda. `src/domain`: tentativas, evidências, revisões e avaliações. `src/storage`: IndexedDB, validação e backup. `src/features`: curso, prática, painel, erros, revisões, simulados e preferências. `tests`: regras, persistência, cobertura e fluxos de interface. `docs`: decisões, verificação e pendências. `scripts`: verificação da compilação publicada. `.github/workflows/pages.yml`: testes e publicação automática. `dist` e `node_modules` são gerados e não são enviados ao Git; o Actions recompila a partir do lockfile.

Os documentos pedagógicos de leitura estão em `docs/conteudo`. As referências aos PDFs preservam nomes, páginas, seções e hashes; os PDFs originais não são dependências do site e não estão neste repositório. Os caminhos pessoais de anexos foram substituídos pelos nomes dos arquivos em `fontes.json`.

O contrato do progresso é versão1; o conteúdo é1.0.0. Backups de versões desconhecidas são recusados para evitar uma migração destrutiva. Para uma futura mudança de contrato, implemente migração antes de alterar esses números.

Veja [o relatório de verificação](docs/VERIFICACAO.md) para a relação entre recursos, testes e limites.

# Verificação da aplicação Deriva — 22/10/2026

## Resultado

**58 testes automatizados passaram em5 arquivos.** O TypeScript e o build Vite de produção passaram, sem aviso de bloco JavaScript acima do limite. A aplicação foi executada em desenvolvimento e, ao final, servida a partir de `dist` pelo servidor estático local. O navegador carregou o arquivo compilado `/assets/index-DxfAKWs6.js` e apresentou o curso com os dados restaurados.

## Fluxos conferidos

| Fluxo | Evidência |
|---|---|
| Abrir aula, estudar e marcar conclusão | Teste de interface com persistência após remontar; navegação real no navegador |
| Exibir conteúdo completo e fórmulas |33 aulas,65 exemplos;138 soluções existentes; todas as fórmulas LaTeX das soluções renderizadas pelo KaTeX nos testes |
| Responder e salvar rascunho | Teste de gravação e restauração em IndexedDB; resposta preservada após recarga real no navegador |
| Registrar tentativa sem inventar correção | Testes confirmam estado “aguardando conferência”; histórico imutável e nota ausente antes da rubrica |
| Dicas e solução inicialmente ocultas | Testes de confirmação antes de revelar; ajuda é registrada e não vira evidência autônoma |
| Registrar conferência e erros | Testes do formulário, campos obrigatórios, rubrica e caderno; fluxo real de uma correção de teste com40% |
| Recomendar revisão e variante | Testes de prioridade por erro, prazo de revisão e exclusão de tentativas assistidas do indicador autônomo |
| Diagnóstico e simulados | Testes de prazo absoluto, respostas, entrega idempotente, bloqueio de consulta, ausência de nota antes de conferir todas as questões |
| Retomar simulado após recarga | Teste de interface e navegador real: resposta permaneceu e o relógio continuou do prazo original |
| Entrega automática ao expirar | Teste de interface restaura avaliação vencida e cria as tentativas finais sem renovar prazo |
| Backup | Testes de ida e volta, recusa de JSON/versão/IDs/relacionamentos inválidos; interface exige confirmação; exportação e importação reais pelo navegador |
| Falha de gravação | Teste simula quota excedida; não exibe “salvo”, preserva estado e permite repetir |
| Duas abas | Teste detecta revisão concorrente e não sobrescreve a gravação anterior |
| Copiar prompt | Teste confirma ID, enunciado, resposta e assunto no texto copiado; sem chamada de IA |
| Cronômetro manual | Verificação real: iniciou, acumulou6 segundos, pausou e gravou; código pausa ao ocultar a página |
| Responsividade | Capturas e inspeção em1280×900 e390×844; largura do documento igual à área visível nas telas verificadas |
| Versão compilada | GET `/` retornou200 HTML; gráfico retornou200 image/png; caminho inexistente retornou404; curso abriu após recarregar com os bundles compilados |

O estado de teste foi exportado e depois substituído pelo backup inicial vazio, pela própria interface com confirmação. A aplicação foi deixada com0 aulas,0 tentativas e0 avaliações, pronta para uso. Nenhum dado de estudo pré-existente do usuário foi utilizado nos testes.

## Conteúdo e arquitetura

-105/105 exercícios numerados da Lista3 estão integrados, preservando referências também à seção3.14 do livro;33 autorais completam o banco.
- O banco geral oferece122 itens de prática;8 questões diagnósticas e8 questões de simulado ficam no espaço de avaliações para evitar consulta acidental.
- Aulas, enunciados e soluções permanecem em arquivos separados. Soluções são um bundle sob demanda de aproximadamente157KB (24KB comprimido).
- Runtime React aproximadamente229KB, matemática259KB e código/dados iniciais341KB, antes de compressão. Fontes e gráficos são locais, sem CDN.
- Persistência em IndexedDB, gravações serializadas, proteção por revisão, validação de backup e rubricas de origem identificada.
- Testes usam o mesmo conteúdo da aplicação, React Testing Library, Vitest e IndexedDB simulada; a persistência também foi exercitada no navegador real.

## O que não foi verificado ou não faz parte desta versão

Não foram testados Safari, Firefox, dispositivos físicos nem uma base com milhares de registros reais. Não há fiscalização de outras abas durante prova, garantia de atenção pelo cronômetro, correção simbólica automática, login, nuvem, API de IA, notificações em segundo plano ou instalação PWA. Há dois gráficos didáticos interativos (x² e cosseno); os9 gráficos de soluções são estáticos. Não houve publicação online.

As condições editoriais do material permanecem preservadas, incluindo as duas interpretações do exercício30. A revisão matemática do conteúdo foi a da fase anterior; os testes da aplicação verificam integração e comportamento, não constituem nova auditoria externa de todas as demonstrações.

## Reproduzir

`npm ci`, `npm test` e `npm run build`. O relatório bruto da execução está em `test-results.json`. A versão pronta para estudo está em `dist`; `node iniciar.mjs` a serve em `127.0.0.1:5173`. Iniciar-Deriva.cmd faz isso e abre o navegador no Windows.

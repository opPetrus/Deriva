# Decisões da versão1.0.0

- Escopo exclusivamente de derivadas do currículo aprovado; L’Hôpital apenas como aplicação exigida. Nenhum módulo de integrais ou curso geral de limites.
- Conteúdo validado foi integrado, sem substituir os enunciados por exemplos genéricos. A UI preserva IDs e referências às páginas.
- Leitura, tentativa, ajuda e conferência são registros diferentes. Uma resposta enviada nunca é reescrita ao editar o rascunho.
- Todos os138 exercícios são discursivos no contrato original. Correção por rubrica é o comportamento honesto: não foi adicionado um corretor por comparação de strings.
- Uma ajuda consultada antes de registrar marca a tentativa como assistida. Consultar a solução depois não reescreve retroativamente as condições da tentativa já enviada, mas marca ajuda para a próxima tentativa.
- Revisões derivam de conferências e seguem prazos em dias; o usuário pode antecipá-las se a prova estiver próxima. Resolver a mesma questão novamente e transferir a técnica para outra questão são ações distintas, ambas sugeridas.
- Avaliações ativas tomam a tela inteira da aplicação, bloqueando a consulta às aulas/dicas/soluções mesmo se o hash mudar. O prazo absoluto não é renovado na recarga. Não há fiscalização de outras abas ou materiais externos.
- IndexedDB é a fonte persistente. As gravações são serializadas; revisão otimista detecta conflito entre abas. Se houver falha, a UI informa e bloqueia novas alterações até repetir a gravação ou recarregar.
- O backup só substitui o estado após validação e confirmação explícita com contagens. A revisão interna de gravação é ajustada à base atual para não regredir ao número do arquivo importado.
- O conteúdo de soluções é separado e carregado sob demanda; isso é ocultação pedagógica, não controle de acesso criptográfico.
- CSS próprio com tokens de tema, sem bibliotecas pesadas de dashboard. Gráfico interativo em SVG nativo. Pacotes matemáticos e runtime React separados no build.
- Aplicação entregue localmente e não publicada. O processo `iniciar.mjs` serve arquivos compilados e não recebe dados de estudo.

# Deriva — planejamento restrito à prova de derivadas

Versão de análise: 22/10/2026. Estado: planejamento anterior ao desenvolvimento. Não há aplicação, aulas implementadas nem gabaritos concluídos nesta entrega.

## 1. Objetivo e fontes

Objetivo: aumentar, em aproximadamente 20 horas líquidas, a capacidade de resolver autonomamente a Lista 3 e problemas inéditos que recombinem suas técnicas, inclusive com maior dificuldade, sem introduzir novos assuntos.

Fontes examinadas:

- **Lista 3 — Derivada**, datada de 16/04/2026: 9 páginas, exercícios 1–105.
- **Plácido Zoega Táboas, Cálculo em uma Variável Real**: capítulo 3, “A Derivada”, páginas impressas 87–159, correspondentes às páginas 89–161 do PDF. A expressão “Seção 3” do pedido é interpretada como esse capítulo, e não somente a subseção 3.1.
- Texto original do projeto: requisitos de produto, subordinados ao ajuste de escopo mais recente.

A lista reproduz a seção 3.14 do livro, na mesma numeração. Há **105 exercícios numerados únicos**, com subitens; não são 210 exercícios diferentes. As diferenças de diagramação e de notação não justificam duplicar o banco. As referências aos dois materiais serão preservadas.

As páginas do livro citadas abaixo são as **impressas**; a página correspondente no PDF é a impressa + 2. A numeração da lista coincide com a página do seu PDF.

Não foram fornecidas provas anteriores, pesos por assunto ou uma delimitação adicional do professor. Portanto, “prioridade” significa presença na lista e dependência para outros exercícios, não uma frequência histórica de cobrança que não foi observada.

## 2. Limite de escopo e aprovação de L’Hôpital

Incluídos: conceitos e técnicas necessários à lista e ao capítulo 3, especialmente regras, cadeia, inversas trigonométricas, tangência, diferenciabilidade, derivadas superiores, implícitas, movimento, taxas relacionadas, Rolle/TVM, monotonicidade, convexidade, extremos, otimização, diferenciais e Taylor com erro.

Excluídos: integrais; curso autônomo de limites; séries infinitas e testes de convergência; cálculo multivariável; equações diferenciais; derivação logarítmica e funções hiperbólicas sem exigência nesses materiais. Exponenciais e logaritmos não ganharão aulas por tradição curricular. Taylor será ensinado como **polinômio finito com resto**, não como curso de séries.

Pré-requisitos serão caixas de consulta na aula que os utiliza: fatoração, frações, potências e radicais, equações/inequações e quadros de sinais, domínio, composição e inversa, trigonometria em radianos, retas, Pitágoras, semelhança, fórmulas elementares de áreas e volumes, fatorial e indução. O diagnóstico orientará quais caixas revisar. Não haverá um curso preparatório paralelo.

**Decisão aprovada pelo usuário:** incluir L’Hôpital para cobrir os exercícios 100–105. M11 será uma aula curta de aplicação de derivadas, com apenas os conceitos de limites necessários a esses exercícios, sem módulo geral de limites. Essa aprovação específica não equivale à aprovação geral para iniciar o desenvolvimento.

Há dependências menores da mesma restrição: 58–59 e 65 tratam do comportamento no infinito; os esboços do capítulo 3 usam assíntotas; Taylor utiliza a ideia de erro que tende a zero. Para cobertura integral, são necessárias explicações pontuais desses usos, sem módulo de limites. Elas também devem constar da aprovação do escopo. Se a restrição for literal, registrar os itens afetados como cobertura parcial, em vez de prometer 105/105.

## 3. Matriz de cobertura

“Principal” é o local da aula e do treino; conhecimentos anteriores continuam valendo. Todo exercício numerado tem uma linha própria no arquivo `Deriva-matriz-105.md`, com referências, dependências, método, dificuldade estimada e estado de validação.

| Módulo | Assunto e habilidade de saída | Base teórica no livro | Lista 3 / seção 3.14 | Dependências |
|---|---|---|---|---|
| D0 | Diagnóstico e reparo pontual de álgebra, domínio, trigonometria e leitura de funções | Apenas pré-requisitos dos itens seguintes | Questões diagnósticas autorais vinculadas às habilidades | Nenhuma |
| M1 | Definição de derivada; secante/tangente; continuidade necessária; derivadas laterais; módulo, funções por partes e tangente vertical | 3.1–3.2, pp. 87–97 | Base para toda a lista; apoio direto a 39, 57 e aos argumentos conceituais | D0 |
| M2 | Soma, produto, quociente, potências, seis trigonométricas, cadeia, inversa e seis inversas trigonométricas; manter o domínio | 3.3, pp. 97–100; 3.5–3.6, pp. 102–108 | 1–10, 26–31 | M1 |
| M3 | Tangentes e normal; paralelismo e ângulos; ponto de tangência desconhecido; cadeia abstrata; periodicidade, paridade e contraexemplos; parâmetros e radianos | 3.1, 3.3, 3.5–3.6, pp. 87–92, 97–100, 102–108 | 11–22, 24, 32–34, 37, 39, 42, 60 | M1–M2 |
| M4 | Derivadas superiores, padrões e indução; classes Cⁿ; composição duas vezes derivada; recorrência para arcsen em zero | 3.7, pp. 109–111; cadeia de 3.5 | 35–36, 38, 40–41 | M2–M3 |
| M5 | Velocidade, sentido do movimento e aceleração; derivação implícita e taxas relacionadas com unidades | 3.4, pp. 100–102; 3.7–3.8, pp. 109–112 | 23, 25, 43–48 | M2; M4 para aceleração |
| M6 | Fermat, Rolle e TVM: hipóteses, aplicações, provas curtas e contraexemplos; enunciado operacional de Cauchy como suporte | 3.9, pp. 113–120 | 58–59, 61–62; suporte a 65, 71 e 79–80 | M1–M3 |
| M7 | Sinais de f′/f″; extremos locais/globais e bordas; convexidade estrita; inflexão; raízes com parâmetro; esboços com domínio e comportamento nas fronteiras | 3.9, 3.11–3.12.1, pp. 113–120, 123–142 | 49–57, 63–65, 71–72, 79–86 | M4 e M6 |
| M8 | Otimização: escolher variável, escrever objetivo e restrição, domínio físico, candidatos, bordas e prova de máximo/mínimo global | 3.12, pp. 133–139; modelos de 3.14 | 66–70, 73–78 | M2 e M7; geometria sob demanda |
| M9 | Diferencial e aproximação linear; distinguir variação exata, estimativa e erro; raio/diâmetro e unidades | 3.13.1, pp. 143–147 | 87–92 | M2–M3 |
| M10 | Polinômio de Taylor em centro não nulo, fatorial, derivadas até ordem 4, resto de Lagrange e cota de erro; exatidão para polinômios | 3.13.2, pp. 147–152 | 93–99 | M4 e M9 |
| M11 | L’Hôpital como aplicação de derivadas: hipóteses, 0/0, infinito/infinito, transformação algébrica e reaplicações justificadas | 3.10, pp. 121–123 | 100–105 | M2 e M6; inclusão aprovada |
| R/S | Revisão cumulativa e simulados com combinações inéditas desses assuntos | Todos os módulos autorizados | Questões autorais; sem assuntos novos | Todos |

### Tratamento dos trechos de aprofundamento do capítulo

Reta normal, inversas menos usadas e critérios por derivadas superiores terão referências curtas, pois aparecem no capítulo e têm baixo custo de inclusão. Cauchy será enunciado com suas hipóteses e sua função no raciocínio; sua demonstração extensa não é necessária para executar a lista. Darboux, classificações refinadas de descontinuidades, geometria geral de conjuntos convexos e notações O/o/∼ não virarão módulos nem pré-requisitos de treino: não são necessários à lista numerada. Quando úteis para ler o capítulo, terão uma nota de referência com o significado, sem aprofundamento.

As pequenas tarefas propostas no corpo do capítulo (por exemplo, diferenciar cosseno pela definição, estudar x² sen(1/x), ou verificar continuidade/derivabilidade de funções por partes) serão vinculadas a M1/M2/M4. A auditoria dos 105 itens não deve ser confundida com uma transcrição de cada comentário “verifique” do livro. Se forem importadas como exercícios adicionais, também precisarão de ID e solução revisada antes da publicação.

## 4. Currículo de aulas e verificação de domínio

Toda aula terá: objetivos observáveis, intuição curta, definição/fórmulas com condições, exemplo resolvido, erro frequente, treino progressivo e critério de domínio. Exemplos resolvidos são material de estudo; gabaritos dos exercícios permanecem ocultos inicialmente.

| Módulo | Aulas previstas | Evidência de domínio, sem dicas |
|---|---|---|
| M1 | 1. Quociente incremental e tangente. 2. Derivadas laterais e continuidade. 3. Módulo, oscilação e tangente vertical | Calcular um exemplo pela definição e distinguir continuidade, derivabilidade e existência de tangente em três casos |
| M2 | 1. Potências e regras. 2. Trigonométricas e domínio. 3. Cadeia com várias camadas. 4. Função inversa e trigonométricas inversas | Resolver quatro derivadas mistas e explicar a ordem das regras; não perder fator interno, sinal ou restrição de domínio |
| M3 | 1. Tangente, normal, paralelismo e ângulos. 2. Tangência por ponto externo e parâmetros. 3. Cadeia abstrata, paridade e periodicidade. 4. Radianos, contraexemplos e condições globais | Montar uma condição de tangência inédita; escrever uma prova curta e um contraexemplo sem usar a recíproca falsa da cadeia |
| M4 | 1. Segunda e enésima derivadas. 2. Padrões, indução e classes Cⁿ. 3. Composição de segunda ordem e recorrência do arcsen | Generalizar uma sequência de derivadas com justificativa e resolver uma composição de segunda ordem |
| M5 | 1. Movimento e quadro de sinais da velocidade. 2. Derivação implícita. 3. Taxas relacionadas | Derivar antes de substituir os dados da escada; calcular y′ isolando seus termos e indicar onde a divisão é válida |
| M6 | 1. Hipóteses de Fermat/Rolle/TVM. 2. Crescimento e comparação. 3. Provas e contraexemplos da lista | Justificar qual teorema se aplica e verificar suas hipóteses; resolver um argumento de crescimento e outro sobre raízes |
| M7 | 1. Extremos e fronteiras. 2. Convexidade, concavidade e inflexão. 3. Esboço sistemático. 4. Raízes e unicidade por convexidade | Fazer um esboço completo com quadros de sinais e justificar por que candidatos excluídos não são extremos/inflexões |
| M8 | 1. Modelar objetivo/restrição. 2. Áreas, volumes e custos. 3. Distância, tempo e iluminação | Resolver um problema novo de modelagem e provar que a solução admissível é global; comparar bordas |
| M9 | 1. Diferencial e linearização. 2. Erros, medidas e unidades | Separar Δy de dy e usar a variável correta em um problema de medidas |
| M10 | 1. Taylor em torno de a. 2. Polinômios e aproximações trigonométricas/radicais. 3. Resto e erro absoluto | Construir um Taylor centrado fora de zero e apresentar uma cota justificada do erro, convertendo graus para radianos |
| M11 | 1. L’Hôpital nos seis exercícios exigidos e em variações equivalentes | Reconhecer a indeterminação, transformar quando necessário e verificar condições em cada aplicação |

### Dificuldade e erros que exigem atenção

- Básicos: regras diretas (1, 3, 6, 26–27), primeiras implícitas (43), diferencial simples (87–89) e esboço polinomial (81).
- Intermediários: cadeia/trigonométricas inversas, tangência, implícitas com produto, sinais e Taylor com centro não nulo.
- Avançados: generalizações/provas (32, 35–36, 38–41, 58–65, 79–80, 93), condições globais do 42, modelagem de tempo/custo (74–78), erro no 99 e transformações/repetições em L’Hôpital.
- Pegadinhas prioritárias: domínio antes de simplificar; derivar potência de função e não só a função interna; distinguir arco inverso de recíproco; preservar |x| na derivada de arcsec; usar radianos; derivar y(x) com y′; não confundir ponto crítico com extremo; não usar f″=0 como prova de inflexão; não ignorar ponta/borda; diferenciar em relação à variável certa; provar existência e unicidade separadamente.

As classificações são estimativas pedagógicas, ajustáveis pelo diagnóstico, e não dados estatísticos da prova.

Os itens avançados de tangência 19 e 21 serão apresentados em M3 e retomados para justificativa completa depois de M6/M7. Em 19, caracterizar uma raiz por unicidade e aproximação é suficiente para o treino; não será introduzida uma fórmula geral de resolução de cúbicas. Em 21, a exclusão dos outros pontos usa argumentos de concavidade e continuidade que serão ensinados antes da tentativa final. A ordem numérica da lista não será imposta como ordem de estudo.

## 5. Cronograma de 20 horas líquidas

Orçamento proposto, **com M11 aprovado; usos pontuais de limites fora dele conforme a decisão de escopo descrita acima**:

| Bloco | Teoria + exemplos (min) | Prática ativa (min) | Total |
|---|---:|---:|---:|
| D0 — diagnóstico e reparos | 0 | 30 | 0h30 |
| M1 — conceito e diferenciabilidade | 40 | 30 | 1h10 |
| M2 — regras, cadeia e inversas | 60 | 80 | 2h20 |
| M3 — tangência e raciocínio conceitual | 40 | 65 | 1h45 |
| M4 — ordens superiores | 55 | 45 | 1h40 |
| M5 — implícitas e taxas | 30 | 40 | 1h10 |
| M6 — Rolle e TVM | 40 | 35 | 1h15 |
| M7 — sinais, extremos e gráficos | 55 | 75 | 2h10 |
| M8 — otimização | 55 | 85 | 2h20 |
| M9 — diferenciais | 20 | 35 | 0h55 |
| M10 — Taylor e erro | 60 | 45 | 1h45 |
| M11 — L’Hôpital | 25 | 25 | 0h50 |
| R — revisão cumulativa distribuída | 0 | 30 | 0h30 |
| S — simulado A + B e correções | 0 | 100 | 1h40 |
| **Total** | **480 (8h)** | **720 (12h; 60%)** | **20h** |

Simulados: dois blocos de 35 minutos mais duas correções de 15 minutos. O teste de consistência da entrega deve garantir 1.200 minutos.

Prática ativa inclui resolver, recuperar fórmulas sem olhar, escrever justificativas, revisar erros e fazer simulados. Leitura de solução e visualização de exemplo contam como teoria, não como tentativa autônoma. Pausas não contam no tempo líquido.

R será distribuído depois de M3, M7 e M10; não concentrado todo no final. Acontecendo em dias diferentes, a revisão reaparece na sessão seguinte e, se houver tempo até a prova, cerca de 24–48 horas depois. O simulado A pode ocorrer após M7 (conteúdo já estudado); o B após M11. São simulados de treino, não réplicas oficiais de duração ou pesos de uma prova USP que não foi fornecida.

### Seleção de treino e limite honesto das 20 horas

O banco conterá os 105 itens e seus subitens, soluções e variações autorais. O percurso rápido terá uma primeira seleção de aproximadamente 40 exercícios representativos, com revisões e variações cobrindo famílias que faltarem. Seleção inicial: 2, 7, 9, 11, 14, 18, 21, 24, 25, 28, 30, 32, 34, 35, 38, 39, 40, 42, 44, 47, 55, 57, 58, 59, 61, 62, 65, 71, 74, 77, 79, 80, 83, 87, 90, 93, 95, 97, 99, 102. Essa seleção não é uma promessa de que todas as demais formas sejam dispensáveis: M8 e M11, por exemplo, precisarão de exemplos e variações para as demais famílias.

O diagnóstico substitui itens dominados por itens ainda frágeis; não remove um assunto antes de haver evidência. Exercícios conceituais longos e difíceis podem exigir várias tentativas. A seleção e os tempos devem ser recalibrados após D0 e o primeiro simulado.

**Não é realista garantir 105 resoluções completas, revisão profunda, dois simulados e 8h de teoria em 20h para qualquer ponto de partida.** Depois de diagnóstico, revisão e simulados, restam aproximadamente 9h20 de prática temática: cerca de 5min20 por exercício numerado se fossem tentados todos, sem contar subitens. Muitos problemas da lista exigem mais que isso. As 20h são a trilha intensiva inicial. Se o diagnóstico indicar lacunas ou o simulado revelar dependência de dicas, o tempo adicional necessário deve ser informado, sem esconder lacunas nem atribuir domínio por conclusão de páginas.

## 6. Validação de cobertura e matemática

### O que foi feito nesta fase

- Leitura da teoria do capítulo 3 e dos 105 enunciados; conferência visual das nove páginas da lista e das páginas de exercícios do livro.
- Correspondência dos 105 números entre lista e livro.
- Mapeamento individual de método e pré-requisitos: não foi identificada necessidade de integrais, logaritmos, exponenciais ou séries para os itens numerados.
- Identificação explícita da exceção sobre limites e de casos em que álgebra/condições de domínio fazem parte da solução.

**Esta é uma validação curricular, não a declaração de que 105 soluções já foram produzidas e verificadas.** Cobertura significa que há um caminho de resolução com técnicas do currículo proposto. A validação final depende das aulas e soluções que ainda serão escritas.

### Rotas de verificação dos casos que poderiam expandir indevidamente o curso

- **17 e 60:** derivar f(x+T)=f(x); T continua sendo um período, sem afirmar que o período fundamental precisa coincidir. Para a recíproca, f(x)=x é um contraexemplo permitido, com derivada constante periódica.
- **21 e 22:** analisar interseções da tangente com o cosseno por cotas e periodicidade. Tangente não significa “reta que só toca em um ponto”. Não é preciso ensinar teoria de equações transcendentes.
- **32, 34 e 38:** aplicações reiteradas da cadeia; prova curta e indução onde o próprio exercício pede. A proibição de demonstrações longas não elimina essas questões de prova.
- **39:** construir composições diferenciáveis com componentes não diferenciáveis; exemplos com constantes e módulo bastam. A cadeia dá condições suficientes, não necessárias.
- **40:** para y=arcsen x, usar (1−x²)y″=xy′ e derivadas em zero. A recorrência para a_n=y⁽ⁿ⁾(0) é a_(n+2)=n² a_n, com a_0=0, a_1=1. Permite todas as ordens por indução e produto, sem séries de potências. A diferenciação iterada de produtos será explicada.
- **42:** o domínio exige q(x)=ax²+2bx+c>0 em toda a reta. A derivada tem numerador (αb−aβ)x+αc−bβ. Para nunca anular, esse numerador deve ser constante não nulo. Isso exige tratar também a=b=0, c>0; não presumir a>0 e perder o caso constante do radicando.
- **58:** de f′→σ>0, obter f′>σ/2 depois de certo ponto e aplicar TVM para uma cota linear inferior.
- **59:** usar f(x)=(1+x²)^(1/4): f′→0 e f→+∞, sem introduzir logaritmos.
- **65:** convexidade e uma secante de inclinação positiva fornecem crescimento pelo menos linear para x suficientemente grande.
- **69 e 77:** otimizar com domínio e bordas; ponto estacionário pode não dar o mínimo. Comparar distância ao quadrado ou tempo total, conforme o problema.
- **71:** usar valores nos dois extremos da cúbica, monotonicidade e continuidade para contar raízes; em raiz dupla verificar f″≠0. Continuidade/valor intermediário entram como pré-requisito pontual.
- **79–80:** existência do mínimo por continuidade em compacto; unicidade por convexidade estrita. Um intervalo aberto pode destruir a existência; não elimina automaticamente a unicidade quando o mínimo existe.
- **93–99:** Taylor finito e resto de Lagrange bastam; para 99, pode-se usar o Taylor de ordem 3 do cosseno, cujo termo cúbico em zero é nulo, obtendo erro ≤|x|⁴/24<1/384. Sem séries infinitas.
- **100–105:** conferir indeterminação antes de derivar e depois de cada transformação. Em 103, tratar o parâmetro a, a convenção para n=0 se 0∈N e o caso a=0; o limite não é sempre um número finito.

### Cuidado editorial antes de transcrever o banco

Fórmulas não podem ser copiadas apenas da extração de texto. A conferência visual confirmou, entre outras: 8 é sec²x/cot²x; 42 tem raiz cobrindo todo o denominador; 53 contém (x−12)²; 83 é 4x/(4+x²); 84 é (x⁴−3)/x; 85 é 4/√(4−x²); 88 é 1/(2−x²); 103 contém sen(a/x).

No 28, preservar a potência −2 sobre o valor da tangente, usando parênteses explícitos na versão digital. No 30, a versão digital deve explicitar o argumento da arctan e o radical do bloco [(2x−1)¹⁰+2]¹ᐟ²; qualquer dúvida editorial deve ser registrada antes de validar o gabarito. No 37 há uma troca de letra na redação da lista (z/x), sem mudar o objetivo: diferenciar trigonométricas cuja variável está em graus.

### Critério para publicar cada exercício

1. Conferir enunciado, subitens e figura contra a imagem do PDF.
2. Atribuir ID único, duas referências de origem, habilidades e aulas que ensinam cada passo.
3. Resolver independentemente; verificar domínio, sinais, parâmetros, fronteiras, unidades e completude das justificativas.
4. Para cálculos, usar uma segunda rota algébrica ou simbólica quando apropriada. Amostragem numérica pode detectar erros, mas não provar equivalência global. Para provas e modelagem, aplicar rubrica de argumentos, não corretor de expressão.
5. Confirmar que a solução não usa técnica externa ao currículo autorizado. Se usar, corrigir a aula ou a solução antes de publicar.
6. Registrar estado: transcrito, solução redigida, revisado matematicamente, coberto por aula, pronto. Só “pronto” entra na versão de estudo.

## 7. Produto enxuto

Primeira versão: curso completo navegável, banco de exercícios, progresso persistente, caderno de erros, revisões e simulados. Todos os módulos autorizados acessíveis desde o primeiro acesso, sem bloqueio por pontuação.

| Área | Comportamento mínimo real |
|---|---|
| Início | Próxima ação explicável, tempo líquido, módulos estudados, tentativas verificadas e revisões pendentes |
| Aulas | Sumário, fórmulas legíveis, exemplos, condições e erros; marcar estudada sem confundir com domínio |
| Exercícios | Filtros por módulo/dificuldade/origem; resposta em rascunho; tentativa registrada; dicas progressivas opcionais; solução inicialmente oculta |
| Soluções | Banco separado dos enunciados; revelar após tentativa ou confirmação explícita, sem bloqueio permanente; revelação marca tentativa assistida |
| Correção | Autocorreção só em formatos com validação determinística confiável, por exemplo escolha fechada ou número com tolerância especificada; expressão livre e prova ficam “aguardando conferência” |
| Corrigir com GPT | Copiar ID, enunciado completo, assunto, dificuldade, resposta, pedido de correção rigorosa e identificação dos erros. O usuário cola no professor externo e registra depois o resultado; sem API nem envio automático |
| Erros e revisões | Registrar erro de conceito, técnica, álgebra, domínio, modelagem ou atenção; tentativa seguinte em questão diferente; revisão reaparece com prioridade explicada |
| Simulados | Questões mistas, cronômetro, sem dicas/soluções antes de encerrar; guardar respostas, rubrica, resultado e plano de revisão |
| Persistência | Dados locais, restauração após recarregar; exportação/importação JSON com validação, versão e confirmação antes de substituir dados existentes |
| Leitura | Responsivo, teclado, contraste, modo claro/escuro; representações gráficas simples somente quando ajudam |

Regras de recomendação, transparentes: priorizar primeiro erro conceitual recorrente e pré-requisito frágil; depois revisão vencida; depois aula/prática ainda não tentada. Acertar após dica ou ver solução não conta como resolução autônoma. Conferência pelo próprio usuário e correção externa terão origem identificada, sem fingir validação automática.

Tempo líquido requer iniciar/pausar a sessão e pausar ao sair para segundo plano. Não se pode inferir atenção apenas porque uma página está aberta. O indicador de preparação deve mostrar evidências por habilidade e a data da última tentativa, sem estimar uma probabilidade inventada de tirar 10.

Ficam para depois: backend, login, serviços pagos, API de IA, chat embutido, gamificação extensa, rankings, editor matemático sofisticado e painéis analíticos complexos. A correção confiável e a persistência têm prioridade sobre animações e gráficos interativos.

## 8. Arquitetura prevista e estrutura de arquivos

Estrutura local proposta: React + TypeScript + Vite, KaTeX para fórmulas e IndexedDB para progresso. CSS simples com tokens de tema é suficiente; bibliotecas de gráfico e interface adicionais só serão adotadas quando a necessidade de uma aula justificar. Nenhuma versão de dependência foi fixada ou instalada nesta fase.

```text
deriva/
  src/
    app/                  # rotas, layout e temas
    components/           # Formula, Lesson, Exercise, Hint, Timer
    content/
      modules/            # aulas tipadas e disponíveis desde o início
      exercises/          # enunciados, subitens, figuras e metadados
      solutions/          # respostas, passos, rubricas, condições
      assessments/        # diagnóstico e dois simulados
      coverage/           # fonte -> exercício -> habilidade -> aula
    domain/
      types.ts
      mastery.ts          # regras explícitas de evidência de domínio
      review.ts           # fila de revisões
      grading.ts          # formatos realmente autocorrigíveis
    storage/
      database.ts         # IndexedDB, versão e migrações
      backup.ts           # exportação/importação e validação
    features/
      dashboard/
      course/
      practice/
      errors/
      reviews/
      exams/
  tests/
    coverage/
    progress/
    grading/
    study-flow/
  docs/
    scope.md
    decisions.md
    mathematical-review.md
    progress.md
    pending.md
```

Dados centrais: Module, Lesson, Skill, Exercise, Subpart, SourceReference, Solution, Attempt, ErrorEntry, ReviewTask, StudySession e ExamAttempt. Tentativa preserva rascunho enviado, data, ajuda usada, resultado, origem da correção e habilidades. Conteúdo e progresso têm versões diferentes: atualizar uma solução não deve apagar tentativas.

Soluções separadas no código facilitam manutenção e evitam revelação acidental. Como a aplicação é local e sem backend, isso não é uma proteção contra inspeção técnica dos arquivos; é ocultação pedagógica na interface.

## 9. Implementação e testes após aprovação

| Fase | Entrega concreta | Verificação de saída |
|---|---|---|
| 0 — escopo | Aprovar matriz, usos pontuais de limites e decisão sobre M11 | Nenhuma lacuna silenciosa nos itens afetados |
| 1 — conteúdo | Aulas, exemplos, 105 enunciados/subitens, soluções, rubricas e mapa de habilidades | Auditoria matemática e rastreabilidade item a item; nenhuma aula vazia |
| 2 — fluxo de estudo | Navegação, leitura, tentativa, dicas, solução oculta e correção registrada | Percurso real de ponta a ponta, teclado e tela estreita |
| 3 — dados e revisão | Persistência, backup, erros e recomendação | Recarregar sem perda; importação inválida não altera dados; revisões coerentes |
| 4 — avaliações | Diagnóstico e simulados mistos | Cronômetro restaurado, respostas preservadas e ausência de dicas durante prova |
| 5 — aceite | Aplicação e relatório de verificação | Build de produção, testes pertinentes, revisão visual e status honesto de pendências |

Testes necessários: conjunto 1–105 sem faltas/duplicatas; referências de aulas e soluções existentes; todos os subitens; condições de correção; não marcar expressão não validada como correta; tentativas assistidas não aumentarem domínio autônomo; persistência após recarga; recuperação de simulado; exportar/importar sem perdas; rejeitar JSON malformado ou versão incompatível sem sobrescrever progresso; navegação em computador e celular.

Asserções numéricas ou simbólicas não substituem revisão das provas, da modelagem e das hipóteses dos teoremas. Não haverá “100% coberto” na interface enquanto faltar solução revisada ou aula necessária para algum item.

## 10. Critério de sucesso e estado desta entrega

Proposta de critério operacional: dois simulados diferentes com pelo menos 90% da rubrica, nenhuma lacuna conceitual recorrente e resolução, sem dicas, de uma questão inédita de cada família principal. É uma referência para decidir a próxima revisão, não uma garantia de nota nem uma nota oficial USP. O objetivo pessoal continua sendo 10.

Para considerar o curso completo: cada um dos 105 itens deve ter caminho explicado pelas aulas, solução revisada e subitens tratados; todos os módulos autorizados devem estar utilizáveis desde o início; progresso, erros, revisões e simulados devem funcionar e persistir.

Concluído agora: análise das fontes, matriz curricular e individual dos 105 itens, currículo, orçamento de tempo, requisitos enxutos, arquitetura e plano de validação. L’Hôpital aprovado. Pendente: conciliação dos demais usos pontuais de limites, aprovação para desenvolvimento, redação integral do curso e dos gabaritos, implementação e testes da aplicação.

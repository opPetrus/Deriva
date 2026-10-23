# Deriva — aulas completas

Faça o diagnóstico; consulte somente os pré-requisitos indicados pelos erros. Leia uma aula, feche os exemplos e tente exercícios sem consulta. Registre a tentativa antes de usar dicas; consulte solução somente depois e refaça uma variante. Os 105 itens e subitens estão disponíveis; o percurso de20h seleciona treino representativo e pode precisar de tempo extra se houver lacunas. Marcar aula lida não comprova domínio. Retome 19,21,22 depois deM7; as notas singulares de46,47 podem ser lidas apósM10.

## M1.1 — Derivada: taxa instantânea e tangente

Objetivos: Calcular uma derivada pela definição; Interpretar inclinação e unidades.

Uma secante mede uma taxa média. Aproximar os dois pontos pergunta se existe uma taxa estável naquele ponto: essa é a derivada. Ela informa a inclinação da melhor aproximação por uma reta.

Para a no domínio, f′(a)=lim[h→0](f(a+h)−f(a))/h, se esse limite existe como número real. O ponto a+h deve permanecer no domínio e h≠0 durante a simplificação. O valor de f′ é um número no ponto; f′(x) é uma função. A definição não permite dividir por zero nem substituir h=0 antes de cancelar os fatores. Para derivar pela definição: escreva o quociente, desenvolva ou racionalize, cancele h apenas para h≠0 e depois tome o limite. A tangente tem valor correto e inclinação correta no contato. Ela pode cruzar a curva. Se f mede metros e x segundos, f′ mede m/s. O uso de limites aqui é apenas o necessário para essa definição.

Fórmulas e condições:

- f′(a)=lim[h→0](f(a+h)−f(a))/h, finito.
- Tangente: y=f(a)+f′(a)(x−a).

### Exemplo M1.1-EX01

Obtenha f′(a) para f(x)=x² pela definição.

1. [(a+h)²−a²]/h=(2ah+h²)/h=2a+h, h≠0.
2. O limite é 2a. Em a=3, f′(3)=6 e a tangente é y−9=6(x−3).

Resultado: f′(a)=2a; tangente em 3: y=6x−9.

### Exemplo M1.1-EX02

Por que a tangente a x³ na origem pode cruzar a curva?

1. f′(0)=lim h³/h=lim h²=0. A reta é y=0.
2. x³ é negativo à esquerda e positivo à direita: cruza sua tangente.

Resultado: Tangente não significa contato único nem ausência de cruzamento.

Erros frequentes: Substituir h=0 no quociente antes de simplificar; Confundir f(a), f′(a) e f′(x).

Prática: DER-AUT-M1-B, DER-AUT-M1-I.

Domínio esperado: Resolver um quociente incremental sem usar regras prontas e explicar o significado da reta obtida.

Fonte: Táboas, 3.1–3.2, pp. 87–97.

## M1.2 — Continuidade e derivadas laterais

Objetivos: Distinguir continuidade e derivabilidade; Testar uma junção por partes.

Para existir uma única inclinação, as aproximações pelos dois lados precisam concordar. Uma curva pode não ter salto e ainda assim ter um canto.

Continuidade em a significa f(x)→f(a). Derivabilidade implica continuidade, pois f(a+h)−f(a)=h·[(f(a+h)−f(a))/h]→0. A recíproca é falsa. No interior de um intervalo, f é derivável se e somente se os quocientes incrementais laterais convergem para o mesmo número real. Em função por partes, confira primeiro que os limites dos valores coincidem com o valor definido; depois compare as derivadas laterais pela definição. As derivadas das fórmulas dos ramos podem ser usadas quando cada ramo tem extensão derivável até a junção e a continuidade já foi verificada. Diferenciar somente a expressão atribuída no ponto isolado não testa uma vizinhança.

Fórmulas e condições:

- Derivável em a ⇒ contínua em a.
- No interior: f′(a−)=f′(a+)∈R ⇔ derivável.

### Exemplo M1.2-EX01

Escolha A,B para f(x)=Ax+B se x<1 e x² se x≥1 ser derivável em 1.

1. Continuidade exige A+B=1.
2. Derivadas laterais: A e 2. Igualar dá A=2, B=−1.
3. Com essas escolhas os valores e as inclinações coincidem.

Resultado: A=2, B=−1.

### Exemplo M1.2-EX02

Estude |x| em zero.

1. A função é contínua. O quociente |h|/h vale −1 à esquerda e 1 à direita.
2. Os limites são distintos.

Resultado: Contínua e não derivável em 0.

Erros frequentes: Igualar derivadas sem conferir valores na junção; Achar que toda função contínua é derivável.

Prática: DER-L3-039, DER-L3-057, DER-AUT-M1-I.

Domínio esperado: Classificar três funções por partes justificando separadamente continuidade e derivabilidade.

Fonte: Táboas, 3.1–3.2, pp. 87–97.

## M1.3 — Cantos, oscilação e tangente vertical

Objetivos: Reconhecer por que uma derivada falha; Distinguir tangente vertical de derivada finita.

Uma inclinação pode falhar por salto, por duas inclinações distintas, por oscilação ou por crescer sem limite. São fenômenos diferentes e pedem justificativas diferentes.

A derivada definida no curso é um número real finito. Se uma função contínua tem quociente incremental tendendo a +∞ ou −∞, seu gráfico pode ter tangente vertical, mas não uma derivada real naquele ponto. Em extremidade do domínio, como zero para √x, o estudo é lateral; diga explicitamente isso. Oscilações como sen(1/x) não têm limite em zero: podem ser demonstradas por duas sequências de aproximação que produzem valores diferentes. Multiplicar uma oscilação limitada por algo que tende a zero pode, porém, produzir limite zero. O princípio de comparação |x sen(1/x)|≤|x| basta para muitos exemplos; não requer um módulo geral de limites. Não derive uma fórmula válida apenas para x≠0 e depois a substitua em zero: use a definição no ponto.

Fórmulas e condições:

- |sen u|≤1; portanto |x sen(1/x)|≤|x|.
- Tangente vertical não equivale a f′(a)∈R.

### Exemplo M1.3-EX01

Estude g(x)=x²sen(1/x), x≠0, e g(0)=0.

1. g(h)/h=h sen(1/h). O módulo é ≤|h|→0.
2. Logo g′(0)=0. Para x≠0, produto e cadeia dão 2x sen(1/x)−cos(1/x), que não tende a zero.

Resultado: g é derivável em 0, mas g′ não é contínua ali.

### Exemplo M1.3-EX02

Estude a raiz cúbica em zero.

1. O quociente incremental é h^(1/3)/h=|h|^(−2/3)→+∞.
2. A função é contínua e a tangente é x=0; não há derivada finita.

Resultado: Tangente vertical em (0,0).

Erros frequentes: Chamar ∞ de valor real da derivada; Deduzir continuidade de f′ somente porque f é derivável.

Prática: DER-AUT-M1-A, DER-AUT-M1-C.

Domínio esperado: Justificar um exemplo oscilatório usando uma cota e explicar a distinção entre derivada e tangente vertical.

Fonte: Táboas, 3.1–3.2, pp. 87–97.

## M2.1 — Potências, soma, produto e quociente

Objetivos: Escolher a regra externa correta; Preservar domínio ao simplificar.

As regras transformam a definição num método eficiente. Antes de calcular, leia a expressão como uma árvore de operações: a operação externa determina o primeiro passo.

Constantes derivam para zero; fatores constantes permanecem. Soma e diferença são derivadas termo a termo. Um produto não deriva multiplicando as derivadas: cada fator precisa variar uma vez com o outro preservado. No quociente, a ordem do numerador importa e o denominador é elevado ao quadrado. A regra da potência vale para expoentes racionais nos pontos em que a função é real e derivável; raízes pares exigem atenção ao domínio. Reescrever frações como potências negativas costuma reduzir erros. Simplificações são identidades somente no domínio original: (x²−1)/(x−1)=x+1 para x≠1, mas a expressão original continua indefinida em 1. Registre exclusões antes de cancelar fatores.

Fórmulas e condições:

- (xʳ)′=rxʳ⁻¹ nos pontos de validade; (cf)′=cf′.
- (fg)′=f′g+fg′.
- (f/g)′=(f′g−fg′)/g², exigindo g≠0.

### Exemplo M2.1-EX01

Derive (x²+1)/(x−2).

1. Use f=x²+1, g=x−2.
2. A derivada é [2x(x−2)−(x²+1)]/(x−2)²=(x²−4x−1)/(x−2)².

Resultado: (x²−4x−1)/(x−2)², x≠2.

### Exemplo M2.1-EX02

Derive x²√x para x>0.

1. Reescreva como x^(5/2).
2. Pela potência, a derivada é (5/2)x^(3/2). Por produto obtém-se a mesma expressão.

Resultado: (5/2)x^(3/2).

Erros frequentes: Usar (fg)′=f′g′; Trocar f′g−fg′ por seu negativo; Perder exclusões de domínio.

Prática: DER-L3-001, DER-L3-002, DER-L3-003, DER-L3-006.

Domínio esperado: Resolver uma derivada por produto e outra por quociente e conferir uma delas após simplificação.

Fonte: Táboas, 3.3;3.5–3.6, pp. 97–108.

## M2.2 — Derivadas trigonométricas e domínio

Objetivos: Usar as seis fórmulas em radianos; Combinar trigonometria com produto/quociente.

Seno e cosseno formam um ciclo de derivação. As outras quatro fórmulas podem ser recuperadas escrevendo quocientes e recíprocos, em vez de decorar sem controle.

Em radianos, seno deriva para cosseno e cosseno para menos seno. Da razão sen/cos vem a derivada da tangente. Use as identidades sen²+cos²=1, 1+tan²=sec² e 1+cot²=csc² para simplificar. Tangente e secante não existem onde cos x=0; cotangente e cossecante não existem onde sen x=0. Uma potência trigonométrica como cos²x é [cos x]²: primeiro derive a potência externa e depois o cosseno. Em sin(2x), a operação externa é a função seno, não uma potência. As fórmulas padrão pressupõem radianos; M3.4 explica a mudança para graus.

Fórmulas e condições:

- sen′=cos; cos′=−sen; tan′=sec².
- cot′=−csc²; sec′=sec·tan; csc′=−csc·cot.

### Exemplo M2.2-EX01

Recupere a derivada de tan x.

1. tan x=sen x/cos x.
2. Quociente: (cos²x+sen²x)/cos²x=1/cos²x.

Resultado: tan′x=sec²x, cos x≠0.

### Exemplo M2.2-EX02

Derive x cos²x.

1. Produto: cos²x+x·2cos x(−sen x).
2. A cadeia entra na derivada de cos²x.

Resultado: cos²x−2x cos x sen x.

Erros frequentes: Esquecer os sinais de cos, cot e csc; Confundir cos²x e cos(x²).

Prática: DER-L3-002, DER-L3-004, DER-L3-005, DER-L3-008.

Domínio esperado: Derivar uma expressão mista e justificar todos os pontos excluídos.

Fonte: Táboas, 3.3;3.5–3.6, pp. 97–108.

## M2.3 — Cadeia: uma camada de cada vez

Objetivos: Decompor expressões aninhadas; Aplicar fatores internos sem expandir desnecessariamente.

Uma função composta descreve uma mudança passando por etapas. A taxa total é o produto das taxas em cada etapa, avaliadas nos lugares corretos.

Se u=g(x) é diferenciável em x e f é diferenciável em g(x), então (f∘g)′(x)=f′(g(x))g′(x). A derivada externa mantém o argumento interno; apenas ao derivar a próxima camada surgem seus fatores. Para três ou mais camadas, repita a regra de fora para dentro. Não multiplique por g′ duas vezes nem apague o argumento de f′. Uma estratégia escrita: nomeie u, derive f(u), derive u e monte o produto. Para [tan u]⁻² as camadas são potência −2, tangente e u; para tan(u⁻²), a ordem é outra. Essa diferença deve ficar explícita com parênteses. Condições suficientes da cadeia não são condições necessárias: uma composição pode ser derivável mesmo quando um dos fatores não é.

Fórmulas e condições:

- [f(u(x))]′=f′(u(x))u′(x).
- [uʳ]′=ruʳ⁻¹u′, no domínio de validade.

### Exemplo M2.3-EX01

Derive √(1+x⁴).

1. u=1+x⁴, u′=4x³. A externa é u^(1/2), de derivada 1/(2√u).
2. Multiplique: 4x³/(2√(1+x⁴)).

Resultado: 2x³/√(1+x⁴).

### Exemplo M2.3-EX02

Derive cos((2x−1)³).

1. A externa fornece −sen((2x−1)³).
2. A camada seguinte fornece 3(2x−1)² e a última fornece 2.

Resultado: −6(2x−1)² sen((2x−1)³).

Erros frequentes: Derivar o argumento mas esquecer a função externa; Avaliar f′ em x em vez de u(x); Expandir potências altas sem necessidade.

Prática: DER-L3-026, DER-L3-027, DER-L3-028, DER-L3-029, DER-L3-031.

Domínio esperado: Resolver três camadas sem omitir nenhum fator interno.

Fonte: Táboas, 3.3;3.5–3.6, pp. 97–108.

## M2.4 — Função inversa e inversas trigonométricas

Objetivos: Distinguir função inversa e recíproco; Derivar inversas com os ramos e domínios corretos.

A inversa troca entrada e saída. Se uma função tem inclinação muito grande, sua inversa tem inclinação pequena: as taxas se tornam recíprocas nos pontos correspondentes.

Se f é contínua e estritamente monótona num intervalo, derivável em a e f′(a)≠0, a inversa é derivável em b=f(a), com (f⁻¹)′(b)=1/f′(a). Não é 1/f′(b). As trigonométricas precisam de ramos para serem invertidas: arcsen em [−π/2,π/2], arccos em [0,π], arctan em (−π/2,π/2), arccot em (0,π). Para arcsec e arccsc adotam-se ramos usuais compatíveis com as fórmulas com |x|. As fórmulas de arcsen/arccos são interiores em |x|<1; as de arcsec/arccsc, em |x|>1. Em extremidades, use um teste lateral separado. Não confunda arcsen x com 1/sen x. A inversa também pode exigir cadeia quando seu argumento é outra função.

Fórmulas e condições:

- (f⁻¹)′(b)=1/f′(f⁻¹(b)), f′≠0.
- arcsen′=1/√(1−x²); arccos′=−1/√(1−x²).
- arctan′=1/(1+x²); arccot′=−1/(1+x²).
- arcsec′=1/(|x|√(x²−1)); arccsc′=−1/(|x|√(x²−1)).

### Exemplo M2.4-EX01

Derive arctan(x²+1).

1. A externa arctan fornece 1/[1+(x²+1)²].
2. O argumento fornece 2x.

Resultado: 2x/[1+(x²+1)²].

### Exemplo M2.4-EX02

Se f(2)=5 e f′(2)=3, qual (f⁻¹)′(5)?

1. O argumento da inversa é 5, correspondente à entrada 2 de f.
2. A derivada é o recíproco de f′(2).

Resultado: 1/3.

Erros frequentes: Omitir |x| em arcsec; Usar f⁻¹ como 1/f; Esquecer os domínios dos ramos.

Prática: DER-L3-007, DER-L3-009, DER-L3-010, DER-L3-030.

Domínio esperado: Resolver uma inversa abstrata e uma composição com arctan, explicando os pontos de avaliação.

Fonte: Táboas, 3.3;3.5–3.6, pp. 97–108.

## M3.1 — Tangente, normal, paralelismo e ângulo

Objetivos: Traduzir geometria em condições sobre f′; Construir a equação completa de uma reta.

A derivada fornece só a inclinação. Para determinar uma reta é necessário também um ponto. Problemas de tangência alternam entre encontrar o ponto e encontrar a inclinação.

Na abscissa a, a tangente é y−f(a)=f′(a)(x−a). Tangente horizontal exige f′(a)=0. Retas paralelas têm a mesma inclinação; escreva a reta dada como y=mx+b antes de comparar. A normal é perpendicular à tangente e, se f′(a)≠0, tem inclinação −1/f′(a). Se a tangente é horizontal, a normal é vertical x=a. A lista define ângulo entre gráficos pela diferença absoluta dos arctan das inclinações; siga essa definição, mantendo radianos nas contas. Duas curvas tangentes no mesmo ponto precisam compartilhar valor e inclinação; ter somente valores iguais prova interseção, não tangência.

Fórmulas e condições:

- Tangente: y−f(a)=f′(a)(x−a).
- Normal: y−f(a)=−(x−a)/f′(a), se f′(a)≠0.
- Ângulo da lista: |arctan m₁−arctan m₂|.

### Exemplo M3.1-EX01

Tangente e normal a x² em a=1.

1. P=(1,1), f′(1)=2.
2. Tangente y−1=2(x−1); normal y−1=−(x−1)/2.

Resultado: y=2x−1 e y=−x/2+3/2.

### Exemplo M3.1-EX02

Onde a tangente a x³ é paralela a y=12x+7?

1. f′=3x². Imponha 3a²=12, logo a=±2.
2. Os pontos são (2,8) e (−2,−8); o intercepto da reta dada não afeta o paralelismo.

Resultado: a=−2 e 2.

Erros frequentes: Confundir paralelismo com igualdade de retas; Dar apenas a inclinação quando se pede equação.

Prática: DER-L3-011, DER-L3-012, DER-L3-013, DER-L3-014, DER-L3-015, DER-L3-016.

Domínio esperado: Resolver uma reta e um ângulo sem esquecer o ponto de contato.

Fonte: Táboas, 3.1;3.5–3.6, pp. 87–108.

## M3.2 — Tangência com contato desconhecido

Objetivos: Impor passagem por ponto externo; Excluir e comparar todas as soluções admissíveis.

Se o contato não é dado, nomeie sua abscissa a. A equação da tangente passa a ser uma família de retas; a condição geométrica seleciona os membros certos.

Para a tangente passar por (p,q), imponha q=f(a)+f′(a)(p−a). Pela origem, a condição é f(a)−af′(a)=0. Resolva no domínio de derivabilidade e depois escreva cada reta; contatos diferentes podem em alguns problemas produzir a mesma reta. Para tangência a uma reta fixa, imponha simultaneamente f(a)=ma+b e f′(a)=m. Em uma interseção polinomial quadrática, discriminante zero é uma segunda rota. Não suponha que uma tangente só encontra o gráfico uma vez: seno/cosseno e cúbicas refutam essa ideia. Para contar soluções sem fórmulas algébricas enormes, use fatoração, monotonicidade e valor intermediário. Os argumentos completos dos itens 19,21 e22 podem ser retomados após M6/M7.

Fórmulas e condições:

- Passagem por (p,q): q=f(a)+f′(a)(p−a).
- Tangência à reta y=mx+b: f(a)=ma+b e f′(a)=m.

### Exemplo M3.2-EX01

Tangentes a y=x² que passam por (0,−1).

1. Na abscissa a: y=2ax−a².
2. Passagem pelo ponto exige −1=−a², logo a=±1.
3. As inclinações são ±2 e ambas as retas têm intercepto −1.

Resultado: y=2x−1 e y=−2x−1.

### Exemplo M3.2-EX02

A tangente horizontal a cos x em zero tem contato único?

1. A reta é y=1.
2. Ela encontra o gráfico em todo x=2kπ.

Resultado: Não: infinitos contatos.

Erros frequentes: Usar o ponto externo como se fosse o contato; Contar raízes sem conferir domínio ou retas distintas.

Prática: DER-L3-018, DER-L3-019, DER-L3-020, DER-L3-021, DER-L3-022, DER-L3-033.

Domínio esperado: Resolver uma tangência por ponto externo e justificar que encontrou todas as retas.

Fonte: Táboas, 3.1;3.5–3.6, pp. 87–108.

## M3.3 — Cadeia abstrata, simetria e periodicidade

Objetivos: Trabalhar com dados f(a),f′(a) sem fórmula de f; Escrever provas curtas a partir de identidades.

Não conhecer a fórmula de f não impede calcular a taxa de uma composição em um ponto. O essencial é saber em qual entrada a função interna chega.

Em g=f∘u, calcule u(a), depois u′(a), e só então use f′(u(a)). Para três funções, use f′(g(h(a)))g′(h(a))h′(a). A generalização para n funções é por indução, reaplicando a cadeia. Para provar propriedades, comece da identidade que as define. Paridade: f(−x)=f(x) ou f(−x)=−f(x); a derivada da entrada −x introduz um sinal. Periodicidade: f(x+T)=f(x), com T>0; a derivada da entrada x+T é 1. Concluir que T é um período da derivada não garante que seja seu menor período. Para refutar uma recíproca, um único exemplo que satisfaz a hipótese e falha na conclusão basta; verifique ambos explicitamente.

Fórmulas e condições:

- (f∘u)′(a)=f′(u(a))u′(a).
- f par ⇒ f′ ímpar; f ímpar ⇒ f′ par.
- f T-periódica e derivável ⇒ f′ T-periódica.

### Exemplo M3.3-EX01

Se f′(5)=7 e g(x)=f(x²+1), calcule g′(2).

1. u(2)=5 e u′(2)=4.
2. g′(2)=f′(5)·4=28.

Resultado: 28.

### Exemplo M3.3-EX02

Prove a propriedade da derivada de uma função ímpar.

1. Derive f(−x)=−f(x): −f′(−x)=−f′(x).
2. Cancele −1 para obter a identidade par.

Resultado: f′(−x)=f′(x).

Erros frequentes: Avaliar f′ na abscissa externa sem passar pela função interna; Afirmar igualdade de períodos fundamentais.

Prática: DER-L3-017, DER-L3-024, DER-L3-032, DER-L3-034, DER-L3-060.

Domínio esperado: Escrever uma prova com identidade inicial, derivação e conclusão, sem saltos de argumento.

Fonte: Táboas, 3.1;3.5–3.6, pp. 87–108.

## M3.4 — Radianos, contraexemplos e condições globais

Objetivos: Converter graus na derivação; Testar recíprocas e condições em toda a reta.

Condições locais e globais não são a mesma coisa. Um cálculo correto em um ponto não prova uma afirmação para toda R; é preciso examinar domínio e todos os parâmetros.

Se x está em graus, a função numérica seno é sen(πx/180); a cadeia acrescenta π/180. Contraexemplo é uma construção que torna a hipótese verdadeira e a conclusão falsa. Para a falsa recíproca da cadeia, quadrados podem apagar o canto de |x|; funções que só assumem dois valores podem tornar uma composição constante. Para f=(αx+β)/√q, domínio em toda R exige q>0 em toda R. Um quadrático ax²+2bx+c é estritamente positivo em R se a>0,ac−b²>0, ou se a=b=0,c>0. Após derivar, uma função afim Ax+B é nunca nula em R exatamente quando A=0,B≠0. Sempre trate os casos em que o grau da expressão diminui; dividir por a sem testar a=0 perderia soluções.

Fórmulas e condições:

- Graus: d[sen(πx/180)]/dx=(π/180)cos(πx/180).
- Ax+B≠0 para todo x ⇔ A=0 e B≠0.

### Exemplo M3.4-EX01

Dê composição derivável apesar de uma componente não o ser.

1. f(u)=u² é derivável; g(x)=|x| não é em zero.
2. f(g(x))=x² é derivável em toda R.

Resultado: A cadeia não pode ser usada ao contrário.

### Exemplo M3.4-EX02

Quando (Ax+B)/(√(1+x²)) tem derivada nunca nula em R?

1. A derivada tem numerador A−Bx e denominador positivo.
2. Para nunca zerar, B=0 e A≠0.

Resultado: B=0,A≠0.

Erros frequentes: Omitir o fator π/180; Usar um exemplo que também falha na hipótese; Dividir por um parâmetro que pode ser zero.

Prática: DER-L3-037, DER-L3-039, DER-L3-042.

Domínio esperado: Produzir um contraexemplo válido e resolver um caso com parâmetros sem perder degenerações.

Fonte: Táboas, 3.1;3.5–3.6, pp. 87–108.

## M4.1 — Derivadas de ordem superior e fórmulas gerais

Objetivos: Calcular derivadas sucessivas; Conjecturar e provar padrões para n.

A segunda derivada mede a taxa de mudança da primeira; repetir o processo revela estrutura. Padrões precisam ser provados, não apenas observados nas primeiras linhas.

Defina f″=(f′)′ e f⁽ⁿ⁾=(f⁽ⁿ⁻¹⁾)′. Não confunda f⁽ⁿ⁾ com fⁿ, que é potência. Polinômios de grau d têm derivada de ordem d constante e as posteriores nulas. Seno e cosseno seguem um ciclo de quatro sinais/funções. Para potências xʳ, a derivada n-ésima é o produto r(r−1)…(r−n+1)xʳ⁻ⁿ onde todas as derivações são válidas. Para provar por indução: confira n=1, assuma a expressão no índice n e derive para obter n+1. Fatorial n!=n(n−1)…1, 0!=1; duplo fatorial multiplica apenas números de mesma paridade. Escreva o produto explicitamente se essa notação não for familiar.

Fórmulas e condições:

- Dⁿxʳ=[∏(r−j), j=0,…,n−1]xʳ⁻ⁿ.
- Dⁿ(1/x)=(−1)ⁿn!/xⁿ⁺¹, x≠0.

### Exemplo M4.1-EX01

Calcule a quinta derivada de x³+sen x.

1. Após quatro derivações a parte polinomial desaparece.
2. O ciclo do seno é sen, cos, −sen, −cos, sen, cos.

Resultado: cos x.

### Exemplo M4.1-EX02

Prove Dⁿx⁴=0 para n≥5.

1. As quatro primeiras derivadas são 4x³,12x²,24x,24.
2. A quinta é zero e todas as seguintes derivam a função zero.

Resultado: Zero para todas as ordens n≥5.

Erros frequentes: Confundir índice de derivação com expoente; Extrapolar padrão sem justificar o passo indutivo.

Prática: DER-L3-035, DER-L3-036, DER-L3-040, DER-AUT-M4-B.

Domínio esperado: Obter uma fórmula geral e escrever o passo de indução completo.

Fonte: Táboas, 3.7, pp. 109–111.

## M4.2 — Regularidade Cⁿ e indução

Objetivos: Distinguir derivabilidade de continuidade da derivada; Provar estabilidade por produto e composição.

Ser derivável uma vez diz que uma inclinação existe. Ser C¹ exige também que essa inclinação varie continuamente. São informações distintas.

f∈Cⁿ significa que existem derivadas até ordem n e a n-ésima é contínua; as derivadas inferiores também são contínuas. C⁰ significa contínua e C∞, derivável em todas as ordens. A função x²sen(1/x), prolongada por zero, é derivável, mas não C¹: sua derivada oscila perto da origem. Produtos de Cⁿ são Cⁿ por indução usando a regra do produto. Para composição: no caso C¹, (f∘g)′=(f′∘g)g′ é contínua; no passo Cⁿ, os dois fatores são Cⁿ⁻¹ pela hipótese indutiva. Isso prova que a derivada da composição é Cⁿ⁻¹, exatamente o necessário. Mostre a continuidade, não apenas a existência de uma expressão derivada.

Fórmulas e condições:

- f∈Cⁿ ⇔ f tem n derivadas e f⁽ⁿ⁾ é contínua.
- C∞ não significa que a função coincide com uma série; séries não são necessárias aqui.

### Exemplo M4.2-EX01

Classifique f(x)=x|x|.

1. f=x² para x≥0 e −x² para x<0. Pela definição, f′(0)=0.
2. A derivada é 2|x|, contínua, mas com canto em zero.

Resultado: f∈C¹ e f∉C².

### Exemplo M4.2-EX02

Por que produto de C¹ é C¹?

1. (fg)′=f′g+fg′.
2. Cada fator e cada derivada são contínuos, portanto a soma de produtos é contínua.

Resultado: A derivada do produto é contínua.

Erros frequentes: Afirmar C¹ somente por haver derivada; No passo indutivo, esquecer que f′ e g′ perdem uma ordem de regularidade.

Prática: DER-L3-038, DER-AUT-M4-C.

Domínio esperado: Distinguir dois exemplos de regularidade e demonstrar o caso C¹ da composição.

Fonte: Táboas, 3.7, pp. 109–111.

## M4.3 — Segunda cadeia e recorrência para arcsen

Objetivos: Derivar produtos gerados pela primeira cadeia; Obter todas as derivadas no ponto sem séries.

Depois da primeira cadeia, o resultado é um produto. A segunda derivação precisa voltar à regra do produto; não basta multiplicar segundas derivadas.

Para F=f(g(h)), a primeira derivada é A·B·C, com A=f′(g(h)), B=g′(h), C=h′. Derive cada fator por vez e aplique a cadeia dentro deles. Para ordens gerais de produto, a fórmula de Leibniz é Dⁿ(uv)=Σ[j=0…n] binom(n,j)u⁽ʲ⁾v⁽ⁿ⁻ʲ⁾; ela segue por indução agrupando coeficientes binomiais. Não precisa decorá-la para produtos simples, mas ela permite obter uma recorrência no item 40. Para y=arcsen x, a identidade (1−x²)y″=xy′, derivada n vezes em zero, deixa poucos termos: polinômios de grau 2 e1 têm as derivadas seguintes nulas. Com aₙ=y⁽ⁿ⁾(0), resulta aₙ₊₂=n²aₙ, a₀=0,a₁=1. Isso ensina todas as ordens usando somente derivadas e indução.

Fórmulas e condições:

- F″=f″(g(h))[g′(h)]²(h′)²+f′(g(h))g″(h)(h′)²+f′(g(h))g′(h)h″.
- Para arcsen: a₂ₘ=0 e a₂ₘ₊₁=[(2m−1)!!]².

### Exemplo M4.3-EX01

Calcule a segunda derivada de sen(x²).

1. Primeira: 2x cos(x²).
2. Segunda por produto: 2cos(x²)+2x[−sen(x²)·2x].

Resultado: 2cos(x²)−4x²sen(x²).

### Exemplo M4.3-EX02

Obtenha a sétima derivada de arcsen em zero.

1. a₁=1; a₃=1²a₁=1.
2. a₅=3²a₃=9; a₇=5²a₅=225.

Resultado: 225.

Erros frequentes: Omitir termos do produto; Introduzir séries infinitas onde a recorrência resolve.

Prática: DER-L3-040, DER-L3-041.

Domínio esperado: Derivar uma composição duas vezes e explicar por que a recorrência do arcsen vale para qualquer ordem.

Fonte: Táboas, 3.7, pp. 109–111.

## M5.1 — Movimento, velocidade e aceleração

Objetivos: Interpretar sinal da velocidade; Separar posição, velocidade e aceleração.

Velocidade é a taxa da posição; seu sinal diz para qual lado o objeto anda. Estar numa posição negativa não significa mover-se para o lado negativo.

Se s(t) é posição, v=s′ e a=s″. Movimento no sentido positivo corresponde a v>0, no negativo a v<0, e repouso instantâneo a v=0. Um instante com v=0 não garante repouso num intervalo. Para determinar intervalos, resolva s′=0 e estude o sinal, restringindo ao domínio físico, usualmente t≥0. Rapidez é |v|: pode crescer mesmo com aceleração negativa, se v também é negativa. Derivadas de tempo têm unidades: posição em m, velocidade em m/s, aceleração em m/s². Para problemas com dois móveis, escreva posições na mesma origem e no mesmo relógio antes de comparar distâncias.

Fórmulas e condições:

- v(t)=s′(t); a(t)=s″(t).
- Rapidez=|v|; direção depende do sinal de v.

### Exemplo M5.1-EX01

Se s=t²−4t, t≥0, quando o móvel muda de sentido?

1. v=2t−4 se anula em t=2.
2. v<0 para 0≤t<2 e v>0 para t>2. A aceleração é 2.

Resultado: Muda do sentido negativo para o positivo em t=2.

### Exemplo M5.1-EX02

s=3cos(2t): encontre v e a.

1. Cadeia: v=−6sen(2t).
2. Derive outra vez: a=−12cos(2t).

Resultado: v=−6sen(2t), a=−12cos(2t).

Erros frequentes: Usar sinal da posição para decidir sentido; Esquecer t≥0 ou as unidades.

Prática: DER-L3-023.

Domínio esperado: Construir quadro de sinais de v e interpretar os intervalos em palavras.

Fonte: Táboas, 3.4;3.8, pp. 100–112.

## M5.2 — Derivação implícita e ramos

Objetivos: Derivar relações sem explicitar y; Identificar divisões válidas e pontos inconclusivos.

Uma equação entre x e y pode descrever vários ramos. A derivação implícita calcula a inclinação de um ramo assumido diferenciável, sem precisar isolá-lo.

Considere y=y(x). Ao derivar y³, aparece 3y²y′; em xy, aparece y+xy′. Derive os dois membros, agrupe todos os termos com y′ e só divida quando seu coeficiente for não nulo. Para F(x,y)=0, a abreviação y′=−Fₓ/Fᵧ é apenas uma organização das mesmas regras: Fₓ deriva em x mantendo y fixo e Fᵧ faz o inverso; não se precisa de um curso de derivadas parciais. Fᵧ=0 não prova automaticamente tangente vertical: se o numerador também zera, a equação pode não decidir a inclinação ou admitir vários ramos. Se um parâmetro faz a relação virar identidade, não há inclinação determinada. Preserve o domínio original mesmo depois de multiplicar ou simplificar, especialmente x/y e funções inversas.

Fórmulas e condições:

- (yⁿ)′=nyⁿ⁻¹y′; (xy)′=y+xy′.
- Coeficiente·y′=outro termo: dividir apenas se coeficiente≠0.

### Exemplo M5.2-EX01

Derive x²+y²=9.

1. 2x+2yy′=0.
2. Se y≠0, y′=−x/y. Nos pontos (±3,0), não existe ramo y(x) com derivada finita; há tangente vertical.

Resultado: y′=−x/y onde y≠0.

### Exemplo M5.2-EX02

A fórmula pode falhar em um ponto derivável?

1. Na relação y²=x², o cálculo dá y′=x/y fora da origem.
2. Há ramos y=x e y=−x com derivadas 1 e−1 na origem; a relação sozinha não escolhe um deles.

Resultado: Sim: 0/0 exige análise do ramo.

Erros frequentes: Tratar y como constante; Dividir por coeficiente nulo e descartar um ramo; Afirmar derivada única para relação degenerada.

Prática: DER-L3-043, DER-L3-044, DER-L3-045, DER-L3-046, DER-L3-047, DER-L3-048.

Domínio esperado: Resolver duas implícitas e explicar o que a fórmula não permite concluir em um ponto singular.

Fonte: Táboas, 3.4;3.8, pp. 100–112.

## M5.3 — Taxas relacionadas

Objetivos: Modelar relações geométricas variáveis; Derivar antes de substituir dados instantâneos.

Duas medidas de uma figura podem variar ligadas por uma restrição. Conhecer a taxa de uma permite obter a da outra por derivação no mesmo tempo.

Procedimento: escolha variáveis e sinais; escreva a restrição válida durante todo o movimento; derive no tempo; só então substitua os dados do instante. Se você põe uma variável igual a um número antes de derivar, transforma indevidamente uma medida variável em constante. Pitágoras, semelhança e fórmulas de área/volume são suficientes para os modelos exigidos. Um sinal negativo significa diminuição na orientação escolhida, não um erro nem uma rapidez negativa. Verifique unidades e se a configuração é admissível. Na escada, x²+y²=L² leva a xx′+yy′=0; L permanece constante.

Fórmulas e condições:

- Restrição de escada: x²+y²=L² ⇒ y′=−xx′/y, y≠0.

### Exemplo M5.3-EX01

Escada de 10 m, base afastando a 1 m/s; x=6. Qual taxa do topo?

1. y=√(100−36)=8.
2. Derivando a restrição: 2xx′+2yy′=0.
3. y′=−6·1/8=−3/4 m/s.

Resultado: Topo desce a 0,75 m/s.

### Exemplo M5.3-EX02

Raio de círculo cresce a 0,2 cm/s. Quando r=5, qual A′?

1. A=πr²; derivando no tempo A′=2πrr′.
2. A′=2π·5·0,2=2π cm²/s.

Resultado: 2π cm²/s.

Erros frequentes: Substituir x=3 antes de diferenciar a relação; Usar mesma unidade para comprimento e área por tempo.

Prática: DER-L3-025, DER-AUT-M5-C.

Domínio esperado: Modelar uma taxa inédita, declarar sentido das variáveis e interpretar o sinal final.

Fonte: Táboas, 3.4;3.8, pp. 100–112.

## M6.1 — Fermat, Rolle e Valor Médio

Objetivos: Verificar hipóteses antes de aplicar teoremas; Distinguir existência e unicidade.

O TVM liga a taxa média entre duas pontas a uma taxa instantânea no interior. Ele transforma informação sobre derivadas em informação global sobre valores.

Fermat: num extremo local interior em que f é derivável, f′=0. A condição é necessária, não suficiente: x³ tem f′(0)=0 sem extremo. Rolle: se f é contínua em [a,b], derivável em (a,b), a<b e f(a)=f(b), existe c∈(a,b) com f′(c)=0. TVM: nas mesmas condições de regularidade, existe c com f(b)−f(a)=f′(c)(b−a). As pontas exigem continuidade, não derivabilidade. Nenhum dos dois teoremas garante unicidade. Para prová-la num problema, acrescente monotonicidade ou resolva a equação. Cauchy generaliza o TVM para duas funções: [f(b)−f(a)]g′(c)=[g(b)−g(a)]f′(c), com ambas contínuas no fechado e deriváveis no aberto; esse enunciado serve de suporte para L’Hôpital, sem demonstração longa.

Fórmulas e condições:

- TVM: f(b)−f(a)=f′(c)(b−a), a<c<b.
- Rolle acrescenta f(a)=f(b), obtendo f′(c)=0.

### Exemplo M6.1-EX01

Aplique o TVM a f=x² em [1,3].

1. A taxa média é (9−1)/(3−1)=4.
2. f′(c)=2c=4 fornece c=2, que pertence a (1,3).

Resultado: c=2.

### Exemplo M6.1-EX02

Por que Rolle não se aplica a |x| em [−1,1]?

1. Os valores das pontas coincidem e há continuidade.
2. Falta derivabilidade em 0; a derivada nos demais pontos é ±1, nunca zero.

Resultado: A hipótese de derivabilidade interior é indispensável.

Erros frequentes: Ignorar uma hipótese por conhecer a conclusão; Afirmar unicidade só por TVM; Usar Fermat em ponto de borda.

Prática: DER-L3-061, DER-L3-062, DER-AUT-M6-B.

Domínio esperado: Enunciar as hipóteses no intervalo escolhido e separar uma prova de existência da prova de unicidade.

Fonte: Táboas, 3.9, pp. 113–120.

## M6.2 — Cotas para derivadas e crescimento

Objetivos: Usar TVM para construir desigualdades; Entender os usos pontuais do infinito na lista.

Se uma função tem taxa sempre maior que uma constante positiva, seu valor ganha pelo menos uma quantidade linear. Uma derivada pequena, por outro lado, não diz sozinha até onde a função chegará.

Se m≤f′≤M num intervalo, para x>y nesse intervalo o TVM fornece m(x−y)≤f(x)−f(y)≤M(x−y). Em particular, f′>0 implica crescimento estrito, f′<0 decrescimento e f′≡0 constância em um intervalo. A palavra intervalo é essencial: em domínios separados a função pode assumir constantes diferentes. Se f′→σ>0 no infinito, escolha uma cota menor, por exemplo σ/2, válida a partir de algum A, e aplique o TVM de A a x. “f→+∞” significa que para qualquer altura B os valores ficam acima de B depois de certo ponto; não é substituir x por um número chamado infinito. Isso basta para os itens 58 e65. Uma cota inferior linear com inclinação positiva prova essa conclusão.

Fórmulas e condições:

- m≤f′≤M ⇒ m(x−y)≤f(x)−f(y)≤M(x−y), x>y.
- f′≡0 num intervalo ⇒ f constante nesse intervalo.

### Exemplo M6.2-EX01

Se f(0)=2 e 1≤f′(x)≤3 em [0,4], limite f(4).

1. TVM: 4≤f(4)−2≤12.
2. Some 2 aos extremos.

Resultado: 6≤f(4)≤14.

### Exemplo M6.2-EX02

Se duas funções têm a mesma derivada num intervalo, o que se conclui?

1. h=f−g tem h′=0.
2. Pelo TVM h é constante.

Resultado: f−g=C nesse intervalo.

Erros frequentes: Confundir limite da derivada com limite da função; Aplicar uma cota além do intervalo em que foi demonstrada.

Prática: DER-L3-058, DER-L3-065.

Domínio esperado: Converter uma hipótese sobre f′ numa desigualdade entre valores de f.

Fonte: Táboas, 3.9, pp. 113–120.

## M6.3 — Como escrever prova ou contraexemplo

Objetivos: Escolher a estratégia compatível com o enunciado; Verificar domínio global e conclusão.

Uma afirmação universal é refutada por um exemplo válido. Uma prova universal, porém, não pode depender apenas de experimentar casos.

Para provar: traduza a hipótese em identidade, desigualdade ou condições de teorema; escolha o intervalo; desenvolva a implicação; conclua exatamente o pedido. Para contraexemplo: escreva uma função explícita, confirme todas as hipóteses e mostre a falha da conclusão. No 59, é necessário ser diferenciável em toda R; √x não serviria para esse domínio. A substituição por (1+x²)^(1/4) mantém crescimento lento sem problemas em zero. Para testes de “único”, pense em duas partes: existência e impossibilidade de dois objetos. Se a pergunta é sobre a recíproca, inverter a ordem verbal de uma prova não é válido. Uma conta numérica ou um desenho sugere uma resposta, mas não prova a afirmação para todos os x.

Fórmulas e condições:

- Contraexemplo: hipótese verdadeira + conclusão falsa.
- Unicidade exige argumento além de existência.

### Exemplo M6.3-EX01

Derivada zero no infinito implica função com limite finito?

1. f=(1+x²)^(1/4) é derivável em R.
2. f′=x/[2(1+x²)^(3/4)]→0, mas f≥√x para x≥0.

Resultado: Não: f→∞.

### Exemplo M6.3-EX02

Derivada nula implica constância em qualquer domínio?

1. Em R\{0}, tome f=−1 para x<0 e 1 para x>0.
2. A derivada é zero em todo domínio, mas os valores não coincidem nas duas componentes.

Resultado: Falta a hipótese de intervalo.

Erros frequentes: Usar contraexemplo fora do domínio exigido; Achar que vários exemplos provam uma afirmação universal.

Prática: DER-L3-059, DER-L3-060, DER-L3-079, DER-L3-080.

Domínio esperado: Escrever um contraexemplo com verificação explícita das hipóteses e da falha da conclusão.

Fonte: Táboas, 3.9, pp. 113–120.

## M7.1 — Extremos locais, globais e bordas

Objetivos: Listar todos os candidatos; Classificar por sinais sem depender só de f″.

Pontos estacionários são candidatos, não respostas. O que faz uma função ter máximo ou mínimo é seu comportamento ao redor ou em todo o domínio.

Máximo local em c significa f(x)≤f(c) numa vizinhança relativa ao domínio; mínimo inverte a desigualdade. Global exige a comparação com todos os pontos. Candidatos: zeros de f′, pontos onde f′ não existe mas f existe, e fronteiras incluídas do domínio. Se f é contínua em c e f′ troca de + para −, há máximo; de − para +, mínimo. Se não troca, esse teste não dá extremo. Teste da segunda derivada: f′(c)=0 e f″(c)>0 dão mínimo; f″(c)<0, máximo, sob regularidade local adequada; f″(c)=0 é inconclusivo. Em intervalo fechado limitado, continuidade garante extremos globais, encontrados comparando todos os candidatos e bordas. Em intervalo aberto/infinito, use sinais e limites nas fronteiras; um supremo não atingido não é máximo.

Fórmulas e condições:

- +→− em f′: máximo; −→+: mínimo.
- Candidatos incluem pontos não deriváveis e bordas incluídas.

### Exemplo M7.1-EX01

Classifique zero para x³ e x⁴.

1. x³ tem derivada 3x²≥0 sem troca: zero não é extremo.
2. x⁴ tem derivada 4x³, negativa antes e positiva depois de zero.

Resultado: x⁴ tem mínimo; x³ não tem extremo ali.

### Exemplo M7.1-EX02

Extremos de x² em [−1,2].

1. Candidatos: −1,0,2. Valores:1,0,4.
2. Compare os três, não só o crítico interior.

Resultado: Mínimo global (0,0), máximo global (2,4).

Erros frequentes: Excluir cantos da lista de candidatos; Chamar todo zero de f′ de extremo; Não conferir bordas.

Prática: DER-L3-049, DER-L3-057.

Domínio esperado: Classificar um ponto estacionário sem extremo e um mínimo não derivável.

Fonte: Táboas, 3.9;3.11–3.12.1, pp. 113–142.

## M7.2 — Convexidade, concavidade e inflexão

Objetivos: Relacionar forma do gráfico a f′ e f″; Evitar falsos pontos de inflexão.

Numa função convexa, as inclinações das tangentes aumentam. Isso pode ocorrer mesmo enquanto a função desce: crescer e ser convexa são propriedades diferentes.

f é convexa em intervalo quando fica abaixo de cada corda: f((1−t)a+tb)≤(1−t)f(a)+tf(b), 0≤t≤1. Estritamente convexa usa desigualdade estrita para a≠b,0<t<1; côncava significa −f convexa. Se f é derivável, convexidade equivale a f′ não decrescente e a cada tangente ficar abaixo do gráfico. f″>0 garante convexidade estrita; f″<0, concavidade estrita. f″=0 num ponto não decide nada: x⁴ é o contraexemplo. Inflexão exige ponto do domínio, continuidade e mudança efetiva entre os dois caracteres de convexidade; pode existir sem f″ ou mesmo sem f′ no ponto, como raiz cúbica. Um polo não é inflexão. Critério suficiente: f″(c)=0 e f‴(c)≠0, com regularidade local, dão troca de sinal. Se a primeira derivada não nula após f′ tem ordem m, m par classifica extremo pelo sinal; m ímpar dá inflexão sob hipótese Cᵐ.

Fórmulas e condições:

- f″>0 ⇒ convexa; f″<0 ⇒ côncava.
- Inflexão exige troca de concavidade e continuidade no ponto.

### Exemplo M7.2-EX01

Compare x³ e x⁴ na origem.

1. Para x³, f″=6x muda de negativo para positivo: inflexão.
2. Para x⁴, f″=12x²≥0 dos dois lados: sem inflexão.

Resultado: Ambas têm f″(0)=0, mas apenas x³ tem inflexão.

### Exemplo M7.2-EX02

Pode uma função decrescer e ser convexa?

1. f=1/x em (0,∞) tem f′=−1/x²<0 e f″=2/x³>0.
2. As inclinações são negativas, mas aumentam rumo a zero.

Resultado: Sim.

Erros frequentes: Usar f″=0 como prova suficiente; Unir concavidades através de um ponto fora do domínio.

Prática: DER-L3-050, DER-L3-051, DER-L3-052, DER-L3-053, DER-L3-054, DER-L3-055, DER-L3-056, DER-L3-063, DER-L3-064, DER-L3-072.

Domínio esperado: Montar os quadros de f′ e f″ e justificar cada inflexão por troca real de sinal.

Fonte: Táboas, 3.9;3.11–3.12.1, pp. 113–142.

## M7.3 — Esboço completo por derivadas

Objetivos: Combinar domínio, sinais, extremos e fronteiras; Desenhar ramos compatíveis com as conclusões.

Um esboço é um resumo visual de fatos demonstrados. A forma geral só é confiável quando respeita domínio, sinais e comportamento perto das fronteiras.

Roteiro: (1) domínio; (2) zeros e interseção com eixo y; (3) simetria/período; (4) f′ e quadro de crescimento; (5) extremos; (6) f″ e concavidades/inflexões; (7) fronteiras e assíntotas; (8) trace ramos. Nos usos pontuais necessários aqui, limite infinito perto de a caracteriza assíntota vertical x=a; limite finito L quando x→±∞ dá horizontal y=L. Nem toda função tem assíntota horizontal. Dividir um polinômio por x, como (x⁴−3)/x=x³−3/x, ajuda a ver o comportamento no infinito; não reintroduz x=0. Pontos críticos sem troca de monotonicidade continuam importantes para desenhar tangente horizontal. Faça um período de função periódica e repita; não tente marcar infinitos pontos.

Fórmulas e condições:

- f→±∞ ao aproximar a pelo domínio: assíntota vertical x=a.
- f→L finito em ±∞: assíntota horizontal y=L.

### Exemplo M7.3-EX01

Esboce x/(1+x²).

1. Domínio R, função ímpar, zero em0. f′=(1−x²)/(1+x²)²: mínimo (−1,−1/2), máximo (1,1/2).
2. f″=2x(x²−3)/(1+x²)³: inflexões em −√3,0,√3. Os valores no gráfico são respectivamente −√3/4,0,√3/4.
3. No infinito f→0, assíntota horizontal y=0. Use os sinais dos fatores para desenhar os ramos.

Resultado: Curva ímpar, limitada, com dois extremos e três inflexões.

Erros frequentes: Desenhar antes de testar domínio; Achar que assíntota nunca pode ser atravessada; Ignorar um ramo de função racional.

Prática: DER-L3-081, DER-L3-082, DER-L3-083, DER-L3-084, DER-L3-085, DER-L3-086.

Domínio esperado: Produzir um esboço em que cada extremo, inflexão e assíntota tenha justificativa.

Fonte: Táboas, 3.9;3.11–3.12.1, pp. 113–142.

## M7.4 — Raízes, convexidade estrita e unicidade

Objetivos: Contar raízes sem resolver uma cúbica geral; Provar existência e unicidade de mínimo.

Derivadas permitem controlar quantas vezes uma curva pode cruzar um nível. Convexidade estrita permite excluir dois mínimos sem precisar calcular o ponto ótimo.

Para contar raízes de uma função contínua, separe os intervalos de monotonicidade. Em cada intervalo estritamente monótono há no máximo uma raiz; sinais opostos e o valor intermediário fornecem existência. Em família com parâmetro, avalie a função nos extremos locais e traduza o pedido em desigualdades no parâmetro. Raiz dupla de polinômio anula f e f′ mas não f″; raiz tripla exige atenção diferente. Para mínimo único em intervalo compacto: continuidade garante existência; dois mínimos distintos contradizem a desigualdade estrita no ponto médio. Tirar a hipótese de fechado pode eliminar existência. Para uma função convexa com uma secante positiva, a comparação de inclinações fornece uma cota linear inferior, suficiente para mostrar crescimento no infinito.

Fórmulas e condições:

- Uma função estritamente monótona tem no máximo uma raiz por intervalo.
- Convexidade estrita + existência de mínimo ⇒ minimizador único.

### Exemplo M7.4-EX01

Para x³−3x+λ, quando há três raízes reais distintas?

1. Extremos em −1 e1, valores λ+2 e λ−2.
2. Precisamos λ+2>0 e λ−2<0. A monotonicidade dos três ramos dá uma raiz em cada.

Resultado: −2<λ<2.

### Exemplo M7.4-EX02

Por que convexidade estrita impede dois mínimos?

1. Se f(u)=f(v)=m, u≠v, então f((u+v)/2)<m.
2. Isso contradiz a definição de valor mínimo.

Resultado: Há no máximo um minimizador.

Erros frequentes: Confundir intervalo aberto com ausência obrigatória de mínimo; Usar convexidade para existência sem compacidade ou outra hipótese.

Prática: DER-L3-065, DER-L3-071, DER-L3-079, DER-L3-080.

Domínio esperado: Contar raízes com parâmetro e provar unicidade sem calcular explicitamente o mínimo.

Fonte: Táboas, 3.9;3.11–3.12.1, pp. 113–142.

## M8.1 — Otimização: objetivo, restrição e domínio

Objetivos: Transformar pedido verbal numa função; Provar que um candidato é ótimo global.

A parte mais importante pode acontecer antes de derivar: escolher a quantidade certa. Máximo da inclinação, da área ou do custo são problemas diferentes mesmo na mesma curva.

Roteiro: desenhe e nomeie variáveis; escreva o objetivo; use a restrição para eliminar variáveis; determine o domínio físico; derive; liste candidatos e bordas; compare e interprete com unidades. Se o pedido é “maior coeficiente angular”, o objetivo é f′, cuja derivada é f″. Em domínio fechado compare valores; em domínio aberto/infinito use sinais e comportamento de fronteira. f″<0 em todo intervalo garante que o crítico é máximo global no intervalo; f″>0 garante mínimo global quando o crítico existe. Nem todo ótimo é interior: distâncias com restrição x≥0 frequentemente atingem mínimo na borda.

Fórmulas e condições:

- Otimizar inclinação de f = otimizar f′.
- Uma restrição reduz o problema a uma variável.

### Exemplo M8.1-EX01

Maximize xy com x+y=10, x,y>0.

1. y=10−x e 0<x<10. Objetivo P=10x−x².
2. P′=10−2x=0 em5; P″=−2<0.

Resultado: x=y=5; produto25.

### Exemplo M8.1-EX02

Se a distância ao quadrado é (x−c)²+x, x≥0, pode o vértice ficar fora?

1. O vértice está em x=c−1/2.
2. Se c<1/2, é negativo; o mínimo admissível é x=0.

Resultado: Sempre teste a admissibilidade do candidato.

Erros frequentes: Derivar a restrição em vez do objetivo; Não demonstrar que o ótimo é global.

Prática: DER-L3-066, DER-L3-067, DER-L3-069.

Domínio esperado: Explicar a escolha do objetivo e justificar globalmente a solução.

Fonte: Táboas, 3.12, pp. 133–139.

## M8.2 — Áreas, volumes e custos ponderados

Objetivos: Construir modelos geométricos da lista; Distinguir área geométrica e objetivo ponderado.

Uma dimensão pode aumentar o objetivo e ao mesmo tempo reduzir outra dimensão pela restrição. O equilíbrio surge no produto ou na soma ponderada das medidas.

Fórmulas necessárias: retângulo A=bh; triângulo A=bh/2; círculo A=πr² e perímetro2πr; cilindro V=πr²h, lateral2πrh e fundoπr²; caixa retangular V=abc. Semelhança conserva razões de comprimentos correspondentes. Na cartolina, cortar quadrados de lado x reduz cada dimensão da base em2x. No cilindro sem tampa, não inclua a área superior. Custo e luminosidade não precisam ser proporcionais à área total: aplique o peso de cada região. No vitral, o diâmetro de junção não pertence ao contorno externo. Ao substituir a restrição no objetivo, mantenha a condição de cada dimensão ser positiva (ou não negativa nas bordas de comparação).

Fórmulas e condições:

- Caixa: V=x(L−2x)(W−2x), 0<x<min(L,W)/2.
- Cilindro aberto: custo=c_fπr²+c_l2πrh.

### Exemplo M8.2-EX01

Com perímetro20, maximize área de retângulo.

1. 2b+2h=20 ⇒ h=10−b, 0<b<10.
2. A=10b−b², máximo em b=5 e h=5.

Resultado: Quadrado de lado5, área25.

### Exemplo M8.2-EX02

Por que área de semicírculo com peso2/3 vira πr²/3?

1. A área geométrica é πr²/2.
2. Multiplique por2/3: (2/3)(πr²/2)=πr²/3.

Resultado: O objetivo ponderado deve respeitar o peso por unidade de área.

Erros frequentes: Contar tampa inexistente; Usar peso de custo uma vez para todo o objeto; Contar a linha de junção como perímetro externo.

Prática: DER-L3-068, DER-L3-070, DER-L3-073, DER-L3-074, DER-L3-075.

Domínio esperado: Montar e resolver um problema ponderado sem consultar um modelo pronto.

Fonte: Táboas, 3.12, pp. 133–139.

## M8.3 — Distância, tempo e iluminação

Objetivos: Escolher transformações que preservam o mínimo; Comparar pontos críticos e trajetórias de borda.

Distância pode ser otimizada pelo quadrado, mas tempo precisa respeitar a velocidade de cada trecho. São escolhas matemáticas que simplificam sem mudar o objetivo.

Para distância euclidiana, minimize D² se D≥0, pois a raiz é estritamente crescente. Em movimento relativo, use componentes da diferença de posições no mesmo tempo. Para tempo em trechos com velocidades diferentes, some comprimento/velocidade de cada trecho. Numa circunferência de raio R, arco de ângulo θ em radianos tem comprimento Rθ e corda tem 2Rsen(θ/2). Estacionar o tempo pode produzir máximo: o teste de segunda derivada ou quadro de sinais e comparação das bordas são indispensáveis. Iluminações de duas fontes somam P₁/x²+P₂/(l−x)², não a diferença; as distâncias são positivas. Funções inversas de distância explodem nas fontes, enquanto a segunda derivada positiva garante um único mínimo interior.

Fórmulas e condições:

- D²=(Δx)²+(Δy)²; minimizar D² equivale a minimizar D.
- T=Σ comprimento do trecho/velocidade do trecho.
- Arco Rθ; corda2Rsen(θ/2), θ em radianos.

### Exemplo M8.3-EX01

Dois trechos têm comprimentos 3 e4, velocidades1 e2. Qual o tempo?

1. O tempo é 3/1+4/2.
2. Não divida a distância total por uma média simples das velocidades.

Resultado: 5 unidades de tempo.

### Exemplo M8.3-EX02

Fontes iguais nos extremos de segmento l: onde a iluminação é mínima?

1. I=P/x²+P/(l−x)² é simétrica. I′=0 em l/2.
2. I″>0, garantindo mínimo único.

Resultado: No ponto médio.

Erros frequentes: Minimizar caminho quando o pedido é tempo; Aceitar o ponto crítico sem comparar bordas; Usar raiz quadrada em vez de cúbica na proporção das fontes.

Prática: DER-L3-069, DER-L3-076, DER-L3-077, DER-L3-078.

Domínio esperado: Resolver um problema de tempo e outro de distância justificando as transformações do objetivo.

Fonte: Táboas, 3.12, pp. 133–139.

## M9.1 — Diferencial e aproximação linear

Objetivos: Separar valor, variação exata e variação aproximada; Usar a derivada no ponto inicial.

A tangente pode substituir localmente uma curva para fazer uma conta simples. A diferencial é a variação prevista por essa reta, não a variação exata da curva.

No ponto a, tome dx como pequeno incremento de entrada. Defina dy=f′(a)dx e linearização L(a+dx)=f(a)+dy. A variação real é Δy=f(a+dx)−f(a). Em geral Δy≠dy; diferenciabilidade significa que o erro Δy−dy é pequeno comparado a dx quando dx→0. Um incremento negativo deve manter seu sinal. Se o pedido é valor aproximado, some f(a); se é variação aproximada, forneça dy. O ponto a é escolhido com cálculo fácil e próximo da entrada desejada. Quanto maior a curvatura e o incremento, menos precisa pode ser a estimativa; M10 fornece cotas quando exigidas.

Fórmulas e condições:

- dy=f′(a)dx; f(a+dx)≈f(a)+dy.
- Δy=f(a+dx)−f(a); erro de linearização=Δy−dy.

### Exemplo M9.1-EX01

Aproxime √9,06.

1. a=9, dx=0,06; f(9)=3, f′(9)=1/6.
2. dy=0,01; some ao valor inicial.

Resultado: √9,06≈3,01.

### Exemplo M9.1-EX02

Para f=x² em a=2 e dx=−0,1, compare dy e Δy.

1. dy=4(−0,1)=−0,4.
2. Δy=1,9²−2²=−0,39.

Resultado: O valor aproximado é3,6; o exato3,61; erro0,01.

Erros frequentes: Entregar dy quando se pediu f(a+dx); Usar f′ no ponto final; Trocar ≈ por igualdade exata.

Prática: DER-L3-087, DER-L3-088, DER-L3-092.

Domínio esperado: Obter valor e variação aproximados e identificar o termo de erro numa expressão polinomial.

Fonte: Táboas, 3.13.1, pp. 143–147.

## M9.2 — Medidas, unidades e erros

Objetivos: Converter corretamente raio e diâmetro; Estimar mudanças de área com diferencial.

A variável escolhida determina a derivada. Se o dado é diâmetro, você pode converter para raio ou reescrever a fórmula em diâmetro; misturar as duas escolhas produz fator2 errado.

Para círculo, C=2πr e A=πr²; para superfície esférica, S=4πr²=πD² com D=2r. Assim dr=dD/2. A diferencial transporta uma pequena mudança de entrada para a saída mantendo unidades: dA tem unidade de área. Para erro máximo de medida |dx|≤ε, a estimativa linear de erro absoluto é |f′(a)|ε; ela não é automaticamente uma cota rigorosa para o erro real em todo intervalo. Uma cota rigorosa pode usar TVM: |Δf|≤sup|f′|·ε, ou Taylor para erro de linearização. Erro relativo aproxima |dy|/|f(a)|, quando f(a)≠0; erro percentual multiplica por100. Quando a relação é linear, como C com r, o transporte de incremento é exato.

Fórmulas e condições:

- Círculo: dA=2πr dr. Esfera: dS=8πr dr=2πD dD.
- Estimativa linear de erro: |dy|≈|f′(a)|ε.

### Exemplo M9.2-EX01

Esfera com diâmetro4 cresce0,04. Estime aumento da superfície.

1. Use S=πD². dS=2πD dD.
2. Com D=4 e dD=0,04, dS=0,32π.

Resultado: 0,32π unidades de área.

### Exemplo M9.2-EX02

Aresta de cubo2 medida com erro máximo0,01: estime erro de volume.

1. V=a³, dV=3a²da.
2. No ponto2, |dV|≤12·0,01=0,12. É estimativa linear; a cota rigorosa pelo TVM usa 3(2,01)²·0,01.

Resultado: Estimativa0,12; cota pelo TVM0,121203.

Erros frequentes: Usar o acréscimo do diâmetro como acréscimo do raio; Chamar estimativa linear de limite rigoroso sem justificativa.

Prática: DER-L3-089, DER-L3-090, DER-L3-091.

Domínio esperado: Resolver uma mudança de medida com unidades e distinguir estimativa de cota garantida.

Fonte: Táboas, 3.13.1, pp. 143–147.

## M10.1 — Taylor finito em torno de um centro

Objetivos: Construir coeficientes pelo fatorial; Distinguir ordem e grau efetivo.

A linearização coincide com valor e primeira derivada no centro. Taylor estende a ideia, fazendo um polinômio coincidir também com as próximas derivadas.

Se f tem derivadas até ordem n em a, seu polinômio de Taylor é Pₙ(x)=Σ[k=0…n]f⁽ᵏ⁾(a)(x−a)ᵏ/k!. O centro é a, portanto as potências são de x−a, não necessariamente de x. Por que k!? A k-ésima derivada de cₖ(x−a)ᵏ no centro é k!cₖ; dividir por k! faz esse valor igual a f⁽ᵏ⁾(a). Um coeficiente pode ser zero, então ordem3 pode ter grau efetivo2. A construção de um polinômio não garante boa aproximação longe do centro: isso requer controlar o resto. Para um polinômio de grau n, o Taylor de ordem n coincide exatamente com ele, em toda R; o resto é zero. O estudo é de polinômios finitos, sem séries infinitas.

Fórmulas e condições:

- Pₙ(x)=Σ f⁽ᵏ⁾(a)(x−a)ᵏ/k!, k=0,…,n.
- Pₙ⁽ᵏ⁾(a)=f⁽ᵏ⁾(a), k≤n.

### Exemplo M10.1-EX01

Taylor de ordem2 de x³ em a=1.

1. f(1)=1, f′(1)=3, f″(1)=6.
2. P₂=1+3(x−1)+3(x−1)². O termo ausente é (x−1)³.

Resultado: P₂=1+3h+3h², h=x−1.

### Exemplo M10.1-EX02

Taylor de ordem3 do mesmo polinômio.

1. f‴=6 e o coeficiente cúbico é6/3!=1.
2. Some h³ ao P₂.

Resultado: P₃=1+3h+3h²+h³=x³ exatamente.

Erros frequentes: Omitir k!; Usar xᵏ com centro a≠0; Supor que grau e ordem sempre coincidem.

Prática: DER-L3-093, DER-L3-094, DER-L3-095, DER-L3-096, DER-AUT-M10-B.

Domínio esperado: Construir um Taylor fora de zero e conferir pelo menos duas derivadas no centro.

Fonte: Táboas, 3.13.2, pp. 147–152.

## M10.2 — Aproximações com Taylor e deslocamentos

Objetivos: Aplicar o polinômio na entrada correta; Converter graus e organizar derivadas até ordem4.

Depois de montar Taylor, a conta deve usar o deslocamento em relação ao centro. O principal erro não costuma ser derivar, mas substituir um ângulo em graus onde o polinômio espera radianos.

Faça uma tabela com k, f⁽ᵏ⁾(a), divisão por k!, e termo em h=x−a. Para seno/cosseno, use o ciclo de quatro derivadas. Para √x, use a potência. Para tan x, gere derivadas como polinômios em t=tan x: se uma derivada é Q(t), a seguinte é Q′(t)(1+t²). No item97 isso produz valores1,2,4,16,80 no centroπ/4. Para aproximar cos47° pelo centro45°, h=2π/180, não2 e nem47π/180. Preserve alguns algarismos extras durante a conta e só arredonde ao final. Escreva ≈ e, se exigido, use o resto para declarar precisão; a mera presença de várias casas decimais não as garante.

Fórmulas e condições:

- h angular=(graus finais−graus do centro)π/180.
- Se t=tan x, D[Q(t)]=Q′(t)(1+t²).

### Exemplo M10.2-EX01

Estime sen91° pelo Taylor de ordem3 em π/2.

1. P₃=1−h²/2; h=π/180.
2. Substituindo: 1−π²/64800.

Resultado: ≈0,9998476913.

### Exemplo M10.2-EX02

Coeficiente cúbico de tan x em π/4.

1. A terceira derivada no centro é16.
2. Divida por3!=6.

Resultado: 8/3, e não16.

Erros frequentes: Substituir graus diretamente; Arredondar cada derivada antes da soma; Omitir coeficientes nulos sem explicar ordem.

Prática: DER-L3-094, DER-L3-095, DER-L3-096, DER-L3-097, DER-L3-098.

Domínio esperado: Resolver as três famílias de aproximação do item98 com centros e unidades corretos.

Fonte: Táboas, 3.13.2, pp. 147–152.

## M10.3 — Resto de Lagrange e erro absoluto

Objetivos: Obter uma cota válida num intervalo; Escolher a ordem que aproveita termos nulos.

Um polinômio aproximante só oferece precisão garantida quando o termo que falta é controlado. O resto traduz derivadas seguintes numa cota numérica.

Se f∈Cⁿ⁺¹ num intervalo contendo a e x, o resto de Lagrange é Rₙ(x)=f⁽ⁿ⁺¹⁾(ξ)(x−a)ⁿ⁺¹/(n+1)!, para algum ξ entre a e x. Para uma estimativa utilizável, encontre M que limite |f⁽ⁿ⁺¹⁾| em todo o segmento; então |Rₙ|≤M|x−a|ⁿ⁺¹/(n+1)!. Não se pode simplesmente avaliar a derivada seguinte em a e chamar isso de M. Se o termo de ordem n+1 do polinômio é nulo, você pode tratá-lo como Taylor de uma ordem maior e obter cota mais forte, desde que haja regularidade suficiente. Para polinômios, as derivadas acima do grau são zero e o resto desaparece. A notação opcional o(hⁿ) significa que R/hⁿ→0; não é necessária para calcular as cotas.

Fórmulas e condições:

- |Rₙ|≤M|h|ⁿ⁺¹/(n+1)!, se |f⁽ⁿ⁺¹⁾|≤M no segmento.

### Exemplo M10.3-EX01

Limite o erro de sen x≈x quando |x|≤0,1.

1. x é também Taylor de ordem2 do seno em0, pois f″(0)=0.
2. A terceira derivada é −cos x, de módulo≤1.
3. |erro|≤|x|³/6≤0,001/6.

Resultado: Erro≤1/6000≈0,000166667.

### Exemplo M10.3-EX02

Por que cos x≈1−x²/2 pode usar resto de ordem4?

1. O Taylor de ordem3 é esse mesmo polinômio porque f‴(0)=0.
2. A quarta derivada é cos, de módulo≤1.

Resultado: Erro≤|x|⁴/24.

Erros frequentes: Usar apenas a derivada seguinte no centro para limitar todo intervalo; Confundir erro absoluto com erro relativo; Não verificar regularidade no segmento.

Prática: DER-L3-099, DER-AUT-M10-C.

Domínio esperado: Apresentar uma cota com M, intervalo e ordem explicitados.

Fonte: Táboas, 3.13.2, pp. 147–152.

## M11.1 — L’Hôpital nos exercícios exigidos

Objetivos: Reconhecer formas autorizadas e transformar outras; Justificar reaplicações e parâmetros.

A regra troca um quociente indeterminado por outro envolvendo derivadas. Ela não diz para derivar uma fração como função, nem se aplica a qualquer limite difícil.

Forma operacional: em uma vizinhança perfurada do ponto (ou numa cauda para infinito), f e g são deriváveis, g e g′ não se anulam; ocorre f→0,g→0 ou |g|→∞ numa forma apropriada; se lim f′/g′ existe como real ou infinito com as hipóteses satisfeitas, então lim f/g tem esse valor. Use separadamente os lados quando necessário; para limite bilateral eles devem coincidir. Aplique só depois de identificar0/0 ou infinito/infinito. Produto0·∞ e diferença∞−∞ precisam primeiro virar quociente por álgebra. Em reaplicações, confirme novamente a indeterminação e a não anulação da nova derivada do denominador. Não subtraia limites divergentes como se fossem números. Parâmetros podem mudar o caso: em xⁿsen(a/x), a=0 torna a função identicamente zero e deve ser separado antes de qualquer manipulação com infinito. A aula fica limitada aos seis itens e variações equivalentes.

Fórmulas e condições:

- L’Hôpital: lim f/g=lim f′/g′, sob as hipóteses; isso não é (f/g)′.
- Não aplicar diretamente a ∞−∞ nem 0·∞.

### Exemplo M11.1-EX01

Calcule lim[x→0](1−cos x)/x².

1. Forma0/0; primeira razão derivada sen x/(2x), ainda0/0.
2. Segunda razão cos x/2 tem limite1/2. As derivadas dos denominadores são não nulas nos domínios exigidos.

Resultado: 1/2.

### Exemplo M11.1-EX02

Transforme x sen(2/x), x→∞.

1. Escreva sen(2/x)/(1/x), forma0/0.
2. A razão das derivadas é2cos(2/x)→2.

Resultado: 2.

Erros frequentes: Derivar a fração inteira pela regra do quociente; Aplicar sem forma indeterminada; Ignorar a=0 ou a convenção de N.

Prática: DER-L3-100, DER-L3-101, DER-L3-102, DER-L3-103, DER-L3-104, DER-L3-105.

Domínio esperado: Resolver uma transformação∞−∞ e justificar cada reaplicação de L’Hôpital.

Fonte: Táboas, 3.10, pp. 121–123.

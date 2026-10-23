# Pré-requisitos e notas de referência

Consulte sob demanda. Não são módulos extras de limites nem de cálculo geral.

## DER-PRE-ALG — Álgebra e frações

Use distributividade e fatoração antes de cancelar. (u+v)²=u²+2uv+v²; u²−v²=(u−v)(u+v). Cancelamento exige fator comum multiplicativo e fator não nulo. Em 1/a−1/b, denominador comum ab produz (b−a)/(ab). Não se cancela uma parcela de soma.

Exemplo: (x²−4)/(x−2)=x+2 somente se x≠2.

## DER-PRE-POW — Potências e raízes

u⁻ⁿ=1/uⁿ para u≠0; u^(m/n) é a raiz n-ésima de uᵐ nos domínios reais adequados. Para raiz par, u≥0; se a raiz está no denominador, u>0. Somar potências exige termos semelhantes: x²+x³ não é x⁵. Multiplicação dá x²x³=x⁵.

Exemplo: √(4−x²) real exige −2≤x≤2; no denominador exige −2<x<2.

## DER-PRE-DOM — Domínio e composição

Comece pelas operações: denominadores não nulos, radicandos pares não negativos e argumentos dentro dos domínios das funções. Na composição f(g(x)), exija x no domínio de g e g(x) no domínio de f.

Exemplo: arccos(2x) exige −1≤2x≤1, isto é −1/2≤x≤1/2. A fórmula derivada interior usa desigualdade estrita.

## DER-PRE-SIGN — Equações, inequações e sinais

Resolva igualdades para achar fronteiras; em inequações de produto/quociente, marque todos os zeros e polos e teste os fatores em cada intervalo. Um fator quadrático sem raízes e de coeficiente principal positivo mantém sinal positivo. Não multiplique uma inequação por expressão de sinal desconhecido.

Exemplo: (x−1)/(x+2)>0 dá x<−2 ou x>1; x=−2 é proibido e x=1 não satisfaz a desigualdade estrita.

## DER-PRE-TRIG — Trigonometria necessária

Radianos: uma volta2π, meia voltaπ. Graus→radianos: θπ/180. sen²+cos²=1; tan=sen/cos; cot=cos/sen; sec=1/cos; csc=1/sen. Adição: sen(a+b)=sen a cos b+cos a sen b; cos(a+b)=cos a cos b−sen a sen b. cos3x=4cos³x−3cos x. Zeros: sen x=0 em kπ; cos x=0 emπ/2+kπ. Valores notáveis: senπ/6=1/2, cosπ/3=1/2, senπ/4=cosπ/4=√2/2.

Exemplo: sen x+cos x=√2sen(x+π/4); cos3x=cos x(4cos²x−3).

## DER-PRE-LINE — Retas e distância

Reta não vertical y=mx+b tem inclinação m; por(p,q): y−q=m(x−p). Paralelas têm mesma inclinação; perpendiculares não horizontais têm produto das inclinações−1. Distância entre(a,b),(c,d) é√((a−c)²+(b−d)²).

Exemplo: A reta2y+8x−5=0 tem m=−4; sua perpendicular tem m=1/4.

## DER-PRE-GEO — Geometria para os modelos

Pitágoras: catetos² somam hipotenusa². Em triângulos semelhantes, lados correspondentes mantêm razão. Retângulo bh, triângulo bh/2, círculoπr², circunferência2πr, cilindroπr²h e lateral2πrh, esfera área4πr². Corda de círculo:2Rsen(θ/2), arcoRθ em radianos.

Exemplo: A seção paralela à base, a altura t em triângulo de base b e altura h, tem comprimento b(1−t/h).

## DER-PRE-IND — Fatorial, binômio e indução

n!=1·2···n,0!=1; binom(n,k)=n!/[k!(n−k)!]. Para provar por indução: verifique o primeiro índice, suponha a hipótese no índice n e prove n+1. A hipótese é usada como uma igualdade válida naquele índice, não como a conclusão ainda não provada.

Exemplo: Se Dⁿ(1/x)=(−1)ⁿn!x⁻ⁿ⁻¹, derivar produz (−1)ⁿ⁺¹(n+1)!x⁻ⁿ⁻².

## DER-PRE-CONT — Continuidade e valor intermediário sob demanda

Continuidade em a significa valores próximos de f(a) quando a entrada se aproxima de a pelo domínio. Soma/produto/composição de contínuas permanecem contínuos no domínio; quociente exige denominador não nulo. Função contínua em[a,b] toma todo valor entre f(a) e f(b); sinais opostos garantem pelo menos uma raiz. Contínua em intervalo fechado limitado atinge máximo e mínimo. Esses resultados entram apenas nos argumentos de derivadas que os exigem.

Exemplo: Uma cúbica com sinais opostos nas pontas de um intervalo e monotonicidade estrita tem exatamente uma raiz ali.

## DER-PRE-INF — Comportamento nas fronteiras sob demanda

x→+∞ descreve entradas arbitrariamente grandes. Para racional, compare maiores potências dividindo por uma delas. Perto de um polo, examine o sinal do denominador pelos lados. Uma expressão limitada dividida por algo que cresce sem limite tende a zero; uma cota linear inferior de inclinação positiva prova divergência para+∞.

Exemplo: x/(x²+1)=(1/x)/(1+1/x²)→0 em±∞; 1/x tende a+∞ em0⁺ e−∞ em0⁻.

## DER-REF-DARBOUX — Darboux: referência curta

Se f é diferenciável num intervalo, sua derivada assume valores intermediários entre dois valores que já assume. Isso não significa que f′ seja contínua. O exemplo x²sen(1/x) mostra uma derivada descontínua. Em particular, uma derivada não pode ter um salto com limites laterais finitos diferentes. Esta nota não é uma exigência adicional de treino da lista.

## DER-REF-CONVEXSET — Conjunto convexo e epígrafo

Um conjunto é convexo quando contém o segmento entre quaisquer dois de seus pontos. O epígrafo de f é o conjunto dos pares(x,y) com y≥f(x). A função é convexa quando esse conjunto é convexo; para funções do curso isso equivale à desigualdade de cordas ensinada em M7.2. Não é necessário estudar interseções gerais de semiplanos para resolver a lista.

## DER-REF-ASYMPTOTIC — Notações opcionais O, o e ∼

Perto de a, r(h)=O(hⁿ) significa |r(h)|≤C|h|ⁿ para h pequeno e alguma constanteC; r(h)=o(hⁿ) significa r(h)/hⁿ→0; r(h)∼c hⁿ significa r(h)/hⁿ→c, com a convenção indicada no livro. São abreviações de estimativas, não séries infinitas. As soluções podem ser lidas usando as desigualdades escritas por extenso.

## DER-REF-DISCONT — Classificação de descontinuidade

Quando existem os dois limites laterais finitos num ponto interior, a descontinuidade é de primeira espécie segundo a convenção do texto; quando ao menos um limite lateral exigido não existe como finito, é de segunda espécie. Nas pontas considere somente o lado do domínio. A aplicação relevante aqui é distinguir salto de oscilação; os testes de derivabilidade continuam sendo feitos pela definição.

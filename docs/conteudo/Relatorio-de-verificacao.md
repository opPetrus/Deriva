# Verificação e cobertura — Deriva

Estado: conteúdo pedagógico entregue, sem interface. Data:22/10/2026.

| Evidência | Resultado |
|---|---:|
| Módulos / aulas completas | 11 / 33 |
| Exemplos resolvidos nas aulas | 65 |
| Exercícios numerados únicos dos PDFs | 105/105 (100%) |
| Soluções desses exercícios | 105/105 |
| Exercícios autorais adicionais | 33 |
| Total de exercícios / soluções | 138 / 138 |
| Dicas progressivas | 260 |
| Diagnóstico / simulados inéditos | 1 / 2 |
| Quadros de pré-requisitos / notas curtas | 10 / 4 |
| Gráficos estáticos | 9 |
| Aulas com objetivos, teoria, condições, exemplos, erros e prática | 33/33 |
| Checagens simbólicas ou aritméticas exatas aprovadas | 181 |
| Itens dos PDFs com checagem computacional complementar | 82/105 |
| Autorais com checagem computacional complementar | 9/33 |
| Soluções revisadas argumentativamente pelo autor | 138/138 |
| Referências órfãs / IDs duplicados detectados | 0 / 0 |
| Orçamento | 480min teoria +720min prática =1200min |

## O que os resultados demonstram

A matriz individual liga cada número1–105 a referências dos dois PDFs, aulas existentes, pré-requisitos e solução existente. A matriz de tópicos liga as33 aulas a objetivos, exemplos resolvidos e prática. O validador verifica esses vínculos, subitens com respostas, campos de conteúdo, níveis de dificuldade, desafios, orçamento e ausência de dicas nas avaliações. A lista repete os exercícios3.14 do livro; não se contam duplicatas como210 exercícios.

## Revisão matemática

Foram conferidos desenvolvimento, domínio, hipóteses, parâmetros, bordas e conclusão nas138 soluções e nos65 exemplos. As 181 checagens registradas usam SymPy para identidades, derivadas, coeficientes de Taylor, limites e candidatos de otimização, além de aritmética exata. Os itens sem teste simbólico específico foram revisados por seus argumentos escritos. Checagem de alguns passos de um exercício não equivale a uma prova computacional de sua solução inteira.

As provas curtas têm identidade/hipótese inicial e argumento de conclusão; a revisão não foi delegada a revisor externo. A validação estrutural comprova completude e rastreabilidade, mas não transforma automaticamente uma demonstração escrita em prova formal. O relatório JSON preserva a distinção por solução e por checagem.

Casos conferidos com atenção: módulo na derivada de arcsec; derivada lateral em1 no item9; todos os contatos em19,21,22; recorrência do arcsen sem séries; radicando constante em42; degenerações em43–47; pontos estacionários sem extremo; mínimo em borda; custos/luminosidade ponderados; máximo de tempo em77; cotas rigorosas versus diferenciais; parâmetro a=0 e convenção n=0 no103.

## Limite editorial conhecido

A notação do exercício30 admite duas leituras pela posição do expoente1/2. A solução adota arctan(√A) e apresenta também a derivada de √(arctan A), ambas conferidas simbolicamente. Isso deixa a técnica coberta, mas a intenção do professor permanece não confirmada. Não há exercício omitido por essa ambiguidade.

## Escopo da cobertura

100% refere-se aos105 exercícios numerados da Lista3/seção3.14 e às33 aulas do currículo aprovado. As notas de Darboux, convexidade de conjuntos, ordem de grandeza e classificação de descontinuidade dão referência para trechos laterais do capítulo. Não se afirma que cada observação incidental “verifique” do livro tenha virado um exercício separado, nem que demonstrações longas excluídas pelo plano tenham sido reproduzidas.

Os arquivos não executam cronômetro, correção, persistência ou recomendação: contêm dados, textos, rubricas e regras para uma futura interface. Nenhuma funcionalidade de site é apresentada como implementada.

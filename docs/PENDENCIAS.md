# Estado final e limites

O fluxo essencial solicitado está implementado: aula → tentativa → gravação → conferência → erro/revisão → simulado → conferência e revisão posterior. Não há botões de funcionalidades simuladas nem aulas de preenchimento.

Itens deliberadamente fora da primeira versão: autenticação, sincronização de nuvem, notificações em segundo plano, API de IA, correção simbólica de respostas livres, editor matemático avançado, ranking, aplicativo instalado/PWA e gráficos interativos para cada problema.

Verificações ainda não realizadas: Safari, Firefox, dispositivos físicos e teste de carga com milhares de registros reais. A importação impõe limites explícitos (8MB,10 mil tentativas, mil avaliações) e valida integridade das relações.

Conteúdo: a ambiguidade original de notação do exercício30 continua documentada. As duas interpretações estão resolvidas; confirmar a leitura pretendida com o professor é a única pendência editorial conhecida do material-base.

Preparação para GitHub Pages concluída em cópia separada, sem envio remoto. Pendem confirmação dos arquivos pelo usuário, autenticação com escrita, primeiro push e seleção de GitHub Actions em Settings → Pages. Consulte [o guia](GITHUB-PAGES.md) e [a verificação](VERIFICACAO-PAGES.md).

Para abrir esta cópia localmente, execute npm ci e npm run build antes de Iniciar-Deriva.cmd. Exporte/importe o progresso por backup ao mudar do endereço local para Pages.

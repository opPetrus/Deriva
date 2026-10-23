# Envio e publicação do Deriva

## Estado desta preparação

Destino: https://github.com/opPetrus/Deriva.git. O repositório foi consultado e clonado sem autenticação: estava público e vazio, com branch padrão `main`. Não foi encontrada credencial Git nem sessão de navegador autenticada. Portanto, a permissão de escrita da conta não pôde ser confirmada. Nenhum push, alteração de configuração remota ou publicação foi feito.

O usuário solicitou revisão dos arquivos e confirmação antes do envio. Essa confirmação continua necessária antes do primeiro push feito pelo assistente.

## Caminho mais rápido no Windows

1. Entre na sua conta pelo GitHub Desktop.
2. Use **File → Add local repository** e escolha esta pasta `Deriva-GitHub` preparada pelo assistente, que já tem `origin` apontando para o repositório correto. A pasta local mantém o Git; o ZIP para transporte inclui apenas o código e a documentação.
3. Revise os arquivos, escreva uma mensagem como **Publicar Deriva completo com GitHub Pages** e clique em **Commit to main**.
4. Clique em **Push origin** ou **Publish branch**, conforme o botão exibido. Não use force push.
5. Abra https://github.com/opPetrus/Deriva/settings/pages e escolha **Source → GitHub Actions**. O GitHub pode exigir que exista ao menos um commit para exibir as opções de Pages.
6. Abra https://github.com/opPetrus/Deriva/actions. Aguarde o workflow **Testar e publicar Deriva**. Se a primeira tentativa ocorreu antes de habilitar Pages, reexecute-a com **Run workflow** na branch `main`.

URL esperada depois do primeiro deploy bem-sucedido: https://oppetrus.github.io/Deriva/. Use a URL exibida pelo próprio deploy como confirmação da publicação.

## Alternativa com Git já instalado

Depois de aprovar os arquivos, abra o terminal nesta pasta preparada:

```powershell
git status
git add .
git commit -m "Publicar Deriva completo com GitHub Pages"
git push -u origin main
```

O Git Credential Manager pode abrir a autenticação oficial do GitHub. Conclua o login na sua própria conta; não coloque senhas ou tokens no código. A autenticação precisa permitir atualizar os arquivos de workflow.

Se estiver usando o ZIP em outro computador, extraia o conteúdo em uma pasta vazia e inicialize o Git antes dos comandos acima:

```powershell
git init -b main
git remote add origin https://github.com/opPetrus/Deriva.git
```

Se alguém tiver acrescentado commits remotos desde esta preparação, busque e integre esse trabalho antes de enviar. Os comandos acima pressupõem o repositório vazio verificado nesta sessão.

## O que o workflow faz

- Em push na `main` e acionamento manual: `npm ci` → `npm test` → `npm run build:pages` → `npm run check:pages` → artefato de `dist` → GitHub Pages.
- Em pull request para `main`: instalação, testes e build; sem publicação.
- Um teste ou build com falha impede o deploy.
- O job de build tem leitura do código; somente o job de deploy tem `pages: write` e `id-token: write`.
- Há controle de concorrência por referência e limite de tempo de cada job.
- As rotas usam hash (`#/course`), portanto a navegação e a recarga não exigem redirecionamento de servidor.
- Scripts, folhas de estilo, fontes, chunks de soluções e gráficos usam o prefixo `/Deriva/` na versão Pages. O build local preserva `/`.

## Progresso ao mudar de endereço

Antes de mudar do endereço local para Pages, exporte seu progresso em **Dados e preferências**. No site publicado, importe esse backup. O domínio público tem armazenamento próprio, separado do endereço local. A publicação não acrescenta sincronização entre navegadores e computadores.

## Referências

- https://vite.dev/guide/static-deploy.html#github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

# Barbearia Imperium — Perfumaria

Loja: https://barbearia-imperium.thrivingmile2.chatgpt.site

Painel: https://barbearia-imperium.thrivingmile2.chatgpt.site/admin

O painel permite cadastrar fotos, nome, marca, volume, preço opcional, tipo de aroma, notas, intensidade, doçura, ocasiões, descrição e disponibilidade. Instruções em GUIA-DO-FORNECEDOR.md.

## Acesso e dados

O login administrativo usa e-mail e senha próprios, sem exigir conta ChatGPT. OWNER_EMAILS e ADMIN_OWNER_EMAIL definem os responsáveis. As senhas usam PBKDF2-SHA256 com salt individual e um pepper secreto independente (ADMIN_PASSWORD_PEPPER). As sessões usam tokens aleatórios de 256 bits, guardados no banco apenas como SHA-256, com cookies HttpOnly, SameSite=Strict e Secure em HTTPS, e validade de oito horas. As rotas protegidas verificam sessão e conta ativa a cada solicitação. As alterações exigem origem correspondente, e tentativas de login/ativação têm limite por e-mail e IP.

O primeiro acesso do responsável usa um token aleatório de ativação: configure somente seu SHA-256 em ADMIN_SETUP_TOKEN_HASH e o vencimento em milissegundos em ADMIN_SETUP_EXPIRES_AT. Entregue o token original apenas ao proprietário, no fragmento /admin#ativar=TOKEN. A ativação é de uso único e exige um e-mail autorizado. Para recuperação do responsável, configure um novo token e vencimento, publique e entregue o novo link privado. Nunca altere ADMIN_PASSWORD_PEPPER após cadastrar senhas, pois isso invalidaria as senhas existentes. Os valores ficam nos segredos do Site, fora do repositório.

O responsável gera links individuais de ativação/redefinição para fornecedores no painel, válidos por 48 horas. O fornecedor define a própria senha e pode gerenciar o catálogo; somente o responsável gerencia acessos. Revogar acesso encerra sessões e cancela convites pendentes. A troca de senha encerra as sessões anteriores. Não há cadastro público nem envio automático de e-mail. ADMIN_EMAILS e a tabela catalog_administrators são registros legados e não concedem mais acesso ao painel.

O catálogo e as contas ficam no D1 (DB), com fotos no R2 (BUCKET). Todas as operações administrativas verificam identidade e permissão no servidor. As contas usam identificadores locais estáveis. Alterações guardam o identificador de quem as publicou e usam controle de versão para evitar sobrescrita concorrente.

Salvar rascunho preserva a versão pública. Publicar atualiza a loja. Arquivar é reversível. O catálogo de catalog.json é importado apenas na primeira execução, sem sobrescrever cadastros existentes. Migrações em drizzle devem ser preservadas após aplicação.

Os clientes continuam informando nome e sobrenome localmente no navegador. Essa identificação é independente do acesso administrativo. A sacola gera mensagens para WhatsApp; não efetua pagamentos nem envia mensagens automaticamente. O número configurado é 556292063634, exatamente o informado pelo proprietário; confirmar o nono dígito antes de alterá-lo.

## Desenvolvimento

Vinext/Cloudflare Worker, preservando o visual da loja em HTML/CSS/JS. node build-site.cjs prepara os arquivos públicos. Use o helper oficial de build e publicação da skill Sites para gerar o Worker, incluir migrações e publicar no projeto existente.

No PowerShell, use npm.cmd quando npm.ps1 estiver bloqueado. Variáveis de teste ficam em .dev.vars, ignorado pelo Git. Não configure a identidade local seedy@sites.test em produção.

Verificações: node --check app.js; node --check admin-panel.js; node verify-catalog.cjs; node verify-whatsapp.cjs; node node_modules/typescript/bin/tsc --noEmit.

node verify-admin.mjs usa o preview local na porta 5173 com migrações aplicadas e fixtures locais para seedy@sites.test, pepper de teste e token de ativação de 64 letras a (somente em .dev.vars). Testa login por e-mail/senha, rejeição de cabeçalhos ChatGPT forjados, ativação e reutilização de token, permissões, troca de senha, encerramento e revogação de sessões; também rascunhos, publicação, conflito de edição, disponibilidade, aroma/ocasião, fotos no R2, validação de imagem, arquivar e restaurar. Os produtos de teste são arquivados e permanecem apenas no banco local. Nunca use as fixtures em produção.

A revisão visual depende da disponibilidade do host de navegador. Não foram enviadas mensagens nem efetuadas transações durante os testes.

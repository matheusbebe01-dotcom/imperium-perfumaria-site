# Barbearia Imperium — Perfumaria

Loja: https://barbearia-imperium.thrivingmile2.chatgpt.site

Painel: https://barbearia-imperium.thrivingmile2.chatgpt.site/admin

O painel permite cadastrar fotos, nome, marca, volume, preço opcional, tipo de aroma, notas, intensidade, doçura, ocasiões, descrição e disponibilidade. Instruções em GUIA-DO-FORNECEDOR.md.

## Acesso e dados

O login administrativo usa a autenticação ChatGPT da hospedagem. OWNER_EMAILS define os responsáveis, e ADMIN_EMAILS contém os acessos iniciais. Os valores são configurados como segredos do Site, fora do repositório. O responsável pode liberar ou revogar o e-mail do fornecedor no painel. O fornecedor pode gerenciar o catálogo, mas somente o responsável pode gerenciar acessos.

O catálogo fica no D1 (DB), com fotos no R2 (BUCKET). Todas as operações administrativas verificam identidade e permissão no servidor. As contas adicionais são vinculadas ao identificador estável do usuário no primeiro login. Alterações guardam o identificador de quem as publicou e usam controle de versão para evitar sobrescrita concorrente.

Salvar rascunho preserva a versão pública. Publicar atualiza a loja. Arquivar é reversível. O catálogo de catalog.json é importado apenas na primeira execução, sem sobrescrever cadastros existentes. Migrações em drizzle devem ser preservadas após aplicação.

Os clientes continuam informando nome e sobrenome localmente no navegador. Essa identificação é independente do acesso administrativo. A sacola gera mensagens para WhatsApp; não efetua pagamentos nem envia mensagens automaticamente. O número configurado é 556292063634, exatamente o informado pelo proprietário; confirmar o nono dígito antes de alterá-lo.

## Desenvolvimento

Vinext/Cloudflare Worker, preservando o visual da loja em HTML/CSS/JS. node build-site.cjs prepara os arquivos públicos. Use o helper oficial de build e publicação da skill Sites para gerar o Worker, incluir migrações e publicar no projeto existente.

No PowerShell, use npm.cmd quando npm.ps1 estiver bloqueado. Variáveis de teste ficam em .dev.vars, ignorado pelo Git. Não configure a identidade local seedy@sites.test em produção.

Verificações: node --check app.js; node --check admin-panel.js; node verify-catalog.cjs; node verify-whatsapp.cjs; node node_modules/typescript/bin/tsc --noEmit.

node verify-admin.mjs usa o preview local na porta 5173 com migrações aplicadas e seedy@sites.test nas variáveis locais. Testa acesso, rascunhos, publicação, conflito de edição, disponibilidade, aroma/ocasião, fotos no R2, validação de imagem, arquivar, restaurar e controle de acessos. Os produtos de teste são arquivados e permanecem apenas no banco local.

A revisão visual depende da disponibilidade do host de navegador. Não foram enviadas mensagens nem efetuadas transações durante os testes.

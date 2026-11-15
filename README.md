# Barbearia Imperium — protótipo de perfumaria

Abra index.html no navegador. Catálogo com 12 perfumes/versões, 19 fotos enviadas pelo cliente e 3 fotos adicionais pesquisadas na internet. Marca da loja e checkout continuam demonstrativos. Preços e disponibilidade sob consulta.

Identificações, limitações e fontes estão em CATALOGO-IDENTIFICACAO.md. Edite os produtos em catalog.json e execute `node build-site.cjs` para atualizar app.js e dist. Valide com `node --check app.js` e `node verify-catalog.cjs`.

Inclui apresentação, navegação para coleção, filtros, detalhes, sacola com quantidade e subtotal, cadastro demonstrativo com nome e telefone obrigatórios e preferência opcional de marketing. A sacola e o perfil fictício duram somente a sessão da aba. Senhas nunca são armazenadas. O login real, a verificação de e-mail e a recuperação de senha ainda não estão implementados.

## Personalizar
- Logomarca: substituir a marca em index.html.
- Produtos: editar catalog.json; as fotos estão em assets/perfumes. Cada produto tem uma galeria e pode exibir fonte e legenda para fotos externas.
- WhatsApp: preencher STORE.whatsapp em app.js com o número comercial, incluindo 55 e DDD, somente dígitos. Enquanto vazio, o botão informa que falta configurar.
- Cores e layout: style.css.
- As fontes usam Google Fonts e têm alternativas locais quando não há internet.

## Para transformar em uma loja real
1. Autenticação: backend com provedor como Supabase Auth ou Firebase Auth para email/senha, confirmação de email, recuperação e sessão persistente segura. Não enviar senha por email. Nunca confiar no perfil do navegador como prova de identidade.
2. Banco de dados: perfil com nome, telefone, consentimento e data, produtos, estoque e pedidos, com controle de acesso por cliente. Aplicar política de privacidade e permitir cancelar marketing.
3. Checkout: integrar provedor de pagamento como Mercado Pago, com chaves privadas somente no servidor. Calcular preços, estoque e frete no servidor, nunca confiar nos valores do navegador.
4. Confirmação: receber webhook de pagamento, verificar assinatura e estado junto ao provedor, processar eventos sem duplicar pedidos e só então marcar como pago.
5. Avisos: enviar confirmação ao comprador e notificação ao vendedor por serviço de email. Para mensagens automáticas pelo WhatsApp, configurar WhatsApp Business Platform e os modelos exigidos. O link wa.me serve para conversa manual e não envia notificações automáticas.
6. Antes de publicar para vendas, configurar domínio, HTTPS, frete, troca/devolução e testar cadastro, recuperação, compra aprovada/recusada e webhook.

Dados necessários: marca/logo, catálogo e mídia, preços e estoque, número comercial, email do vendedor, endereço de origem, regras de entrega e contas dos provedores. Nenhuma chave secreta deve ser colocada no HTML ou app.js.

O protótipo não possui servidor, não cobra, não dispara emails e não registra pedidos reais. O checkout mostra explicitamente essa condição.

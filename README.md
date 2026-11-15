# Barbearia Imperium — protótipo de perfumaria

Abra index.html no navegador. Catálogo com 12 perfumes/versões, 19 fotos enviadas pelo cliente e 3 fotos adicionais pesquisadas na internet. Preços e disponibilidade são combinados pelo WhatsApp da Barbearia Imperium. Os perfumes são oferecidos em tamanho original, conforme informado pela loja; não presumir o volume em mililitros a partir das fotos de referência.

Identificações, limitações e fontes estão em CATALOGO-IDENTIFICACAO.md. Edite os produtos em catalog.json e execute `node build-site.cjs` para atualizar app.js e dist. Valide com `node --check app.js` e `node verify-catalog.cjs`.

Na primeira visita, abre uma tela de identificação com nome e sobrenome obrigatórios. O cliente pode lembrar o nome no dispositivo (localStorage) ou apenas na aba (sessionStorage). Não há senha, autenticação ou banco de dados. A sacola dura a sessão da aba. O cliente pode explorar sem se identificar, mas precisa informar nome e sobrenome antes de encaminhar a seleção ao WhatsApp.

A sacola oferece “Combinar preços pelo WhatsApp” e “Conversar sobre os produtos”. O link usa `wa.me` com mensagem codificada, nome, nomes dos perfumes e quantidades atuais. O cliente revisa e envia a mensagem no WhatsApp; o site não envia automaticamente e não efetua pedidos ou pagamentos. A prévia da mensagem fica disponível na sacola.

Validação do fluxo: `node verify-whatsapp.cjs` (com WhatsApp simulado, sem envio de mensagens).

## Personalizar
- Logomarca: substituir a marca em index.html.
- Produtos: editar catalog.json; as fotos estão em assets/perfumes. Cada produto tem uma galeria e pode exibir fonte e legenda para fotos externas.
- WhatsApp: `STORE.whatsapp` em app.js. Configurado como `556292063634`, exatamente o número enviado pelo proprietário, com o código do Brasil. Confirmar com ele se há um nono dígito antes de alterar o destinatário.
- Cores, tipografia e layout: style.css e imperium-theme.css. Fontes serifadas locais.

## Para transformar em uma loja real
1. Autenticação: backend com provedor como Supabase Auth ou Firebase Auth para email/senha, confirmação de email, recuperação e sessão persistente segura. Não enviar senha por email. Nunca confiar no perfil do navegador como prova de identidade.
2. Banco de dados: perfil com nome, telefone, consentimento e data, produtos, estoque e pedidos, com controle de acesso por cliente. Aplicar política de privacidade e permitir cancelar marketing.
3. Checkout: integrar provedor de pagamento como Mercado Pago, com chaves privadas somente no servidor. Calcular preços, estoque e frete no servidor, nunca confiar nos valores do navegador.
4. Confirmação: receber webhook de pagamento, verificar assinatura e estado junto ao provedor, processar eventos sem duplicar pedidos e só então marcar como pago.
5. Avisos: enviar confirmação ao comprador e notificação ao vendedor por serviço de email. Para mensagens automáticas pelo WhatsApp, configurar WhatsApp Business Platform e os modelos exigidos. O link wa.me serve para conversa manual e não envia notificações automáticas.
6. Antes de publicar para vendas, configurar domínio, HTTPS, frete, troca/devolução e testar cadastro, recuperação, compra aprovada/recusada e webhook.

Dados necessários: marca/logo, catálogo e mídia, preços e estoque, número comercial, email do vendedor, endereço de origem, regras de entrega e contas dos provedores. Nenhuma chave secreta deve ser colocada no HTML ou app.js.

O site não possui servidor de autenticação, não cobra, não dispara emails e não registra pedidos reais. O atendimento e a combinação de valores acontecem no WhatsApp.

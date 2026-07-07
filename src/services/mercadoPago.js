/**
 * Serviço de Integração com o Mercado Pago para Assinaturas Recorrentes
 *
 * NOTA: Esta é uma estrutura preparada para integração futura.
 * Para funcionar no ambiente de produção, é necessário:
 * 1. Instalar o SDK do Mercado Pago no backend: npm install mercadopago
 * 2. Criar um servidor backend (ex: Node.js) que possua as chaves de acesso (Access Token)
 * 3. Chamar a API de Preapproval do Mercado Pago para criar assinaturas.
 *
 * Por segurança, NUNCA utilize seu Access Token no lado do cliente (frontend React).
 */

const BACKEND_URL = 'http://localhost:3000/api'; // Substituir pela URL do seu backend real

/**
 * Cria uma nova assinatura no Mercado Pago
 *
 * @param {Object} subscriptionData
 * @param {string} subscriptionData.planId - ID do plano selecionado
 * @param {Array<string>} subscriptionData.extras - Array com IDs dos extras selecionados
 * @param {number} subscriptionData.totalAmount - Valor total da assinatura calculada
 * @param {Object} userData - Dados do usuário (email, nome) coletados em um formulário
 * @returns {Promise<{ initPoint: string }>} - Retorna a URL de redirecionamento (init_point)
 */
export async function createSubscription(subscriptionData, userData) {
  try {
    console.log('Preparando assinatura com os dados:', { subscriptionData, userData });

    // TODO: Descomentar e ajustar quando o backend estiver pronto
    /*
    const response = await fetch(`${BACKEND_URL}/create-subscription`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        planId: subscriptionData.planId,
        extras: subscriptionData.extras,
        totalAmount: subscriptionData.totalAmount,
        payerEmail: userData.email,
        payerName: userData.name
      }),
    });

    if (!response.ok) {
      throw new Error('Falha ao criar assinatura');
    }

    const data = await response.json();
    return data; // O backend deve retornar { initPoint: "url_do_mercado_pago" }
    */

    // MOCK para testes no Frontend antes da integração real
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ initPoint: 'https://www.mercadopago.com.br/subscriptions/mock' });
      }, 1000);
    });
  } catch (error) {
    console.error('Erro na integração do Mercado Pago:', error);
    throw error;
  }
}

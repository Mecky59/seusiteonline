import { supabase } from '../lib/supabase';

/**
 * Cria uma nova assinatura chamando a Edge Function do Supabase
 *
 * @param {Object} subscriptionData
 * @param {string} subscriptionData.planId - ID do plano selecionado
 * @param {Array<string>} subscriptionData.extras - Array com IDs dos extras selecionados
 * @param {number} subscriptionData.totalAmount - Valor total da assinatura calculada
 * @param {Object} userData - Dados do usuário coletados no formulário
 * @returns {Promise<{ initPoint: string }>} - Retorna a URL de redirecionamento (init_point)
 */
export async function createSubscription(subscriptionData, userData) {
  try {
    console.log('Enviando dados para a Edge Function:', { ...subscriptionData, ...userData });

    const { data, error } = await supabase.functions.invoke('mercadopago', {
      body: {
        planId: subscriptionData.planId,
        extras: subscriptionData.extras,
        totalAmount: subscriptionData.totalAmount,
        name: userData.name,
        email: userData.email,
        phone: userData.phone
      }
    });

    if (error) {
      throw new Error(`Falha ao chamar a Edge Function: ${error.message}`);
    }

    return data; // O backend deve retornar { initPoint: "url_do_mercado_pago" }

  } catch (error) {
    console.error('Erro na integração:', error);
    throw error;
  }
}

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Configurações do CORS para permitir requisições do front-end
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Tratamento de requisição OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url);
    const path = url.pathname.split('/').pop(); // "mercadopago" ou rota interna se houver

    // Cria o cliente Supabase com a chave de serviço (Service Role) para bypass do RLS
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Ação 1: Criar Assinatura (Vem do Front-end)
    if (req.method === 'POST') {
      const body = await req.json();

      // Verifica se é um Webhook do Mercado Pago (Mercado Pago envia type e data.id)
      if (body.type || body.action) {
        console.log('Webhook Recebido do MP:', body);
        
        // Aqui você faria a chamada para a API do Mercado Pago para verificar o status
        // do pagamento (usando o ID que veio no webhook) e depois atualizaria o status no banco.
        // Exemplo simplificado:
        /*
        const { error } = await supabaseClient
          .from('sso_subscriptions')
          .update({ status: 'authorized' })
          .eq('mp_preapproval_id', body.data.id);
        */

        return new Response(JSON.stringify({ received: true }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        });
      }

      // Se não é webhook, é criação de assinatura
      const { planId, extras, totalAmount, name, email, phone } = body;

      if (!name || !email || !planId) {
        throw new Error('Dados incompletos para assinatura');
      }

      // TODO: Aqui entra a integração real com a API do Mercado Pago
      // Exemplo de payload para a API do Mercado Pago (Preapproval):
      /*
      const mpResponse = await fetch('https://api.mercadopago.com/preapproval', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('MERCADOPAGO_ACCESS_TOKEN')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reason: `Assinatura - ${planId}`,
          auto_recurring: {
            frequency: 1,
            frequency_type: 'months',
            transaction_amount: totalAmount,
            currency_id: 'BRL'
          },
          back_url: 'https://seusiteonline.com.br/sucesso',
          payer_email: email
        })
      });
      const mpData = await mpResponse.json();
      const initPoint = mpData.init_point;
      const preapprovalId = mpData.id;
      */

      // Mock temporário enquanto não tem a chave real:
      const initPoint = 'https://www.mercadopago.com.br/subscriptions/mock';
      const preapprovalId = 'mock_' + Math.random().toString(36).substring(7);

      // Salva no banco de dados do Supabase
      const { data: insertedData, error: dbError } = await supabaseClient
        .from('sso_subscriptions')
        .insert([{
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          plan_id: planId,
          extras: extras,
          total_amount: totalAmount,
          mp_preapproval_id: preapprovalId,
          status: 'pending'
        }])
        .select()
        .single();

      if (dbError) throw dbError;

      return new Response(
        JSON.stringify({ initPoint, subscriptionId: insertedData.id }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    }

    return new Response('Method Not Allowed', { status: 405 })

  } catch (error) {
    console.error('Erro na função mercadopago:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})

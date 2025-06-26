import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, dataInicio, dataFim } = await request.json();

    // Validação básica
    if (!email || !dataInicio || !dataFim) {
      return NextResponse.json(
        { error: "Email, data de início e data de fim são obrigatórios" },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Validação de datas
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    
    if (inicio > fim) {
      return NextResponse.json(
        { error: "Data de início deve ser anterior à data de fim" },
        { status: 400 }
      );
    }

    // Aqui você integraria com o backend para:
    // 1. Buscar as tarefas do período especificado
    // 2. Gerar o resumo
    // 3. Enviar por email
    
    // Por enquanto, vamos simular o processo
    console.log("Enviando resumo para:", email);
    console.log("Período:", dataInicio, "até", dataFim);

    // Simulação de delay para mostrar o loading
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Aqui você faria a integração real com:
    // - API do backend para buscar tarefas
    // - Serviço de email (Mailjet, SendGrid, etc.)
    
    return NextResponse.json({
      message: "Resumo enviado com sucesso!",
      email,
      periodo: {
        inicio: dataInicio,
        fim: dataFim
      }
    });

  } catch (error) {
    console.error("Erro ao enviar resumo:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}


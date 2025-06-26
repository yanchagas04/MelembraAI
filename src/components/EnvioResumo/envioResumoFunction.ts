export interface EnvioResumoParams {
  tipoFiltro: "hoje" | "intervalo";
  dataInicio: string;
  dataFim: string;
}

export async function envioResumoFunction({
  tipoFiltro,
  dataInicio,
  dataFim,
}: EnvioResumoParams): Promise<{ success: boolean; message: string }> {
  const token = localStorage.getItem("token");
  if (!token) {
    return {
      success: false,
      message: "Sessão expirada. Faça login novamente.",
    };
  }

  let dataInicioFormatada: string;
  let dataFimFormatada: string;

  if (tipoFiltro === "hoje") {
    const hoje = new Date();
    const formatar = (data: Date) => data.toISOString().split("T")[0];
    dataInicioFormatada = formatar(hoje);
    dataFimFormatada = formatar(hoje);
  } else {
    dataInicioFormatada = dataInicio;
    dataFimFormatada = dataFim;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/summary/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          includeCompleted: true,
          includePending: true,
          dateRange:
            tipoFiltro === "intervalo"
              ? { start: dataInicioFormatada, end: dataFimFormatada }
              : undefined,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message || "Resumo enviado com sucesso para seu email!" };
    } else {
      const errorData = await response.json();
      return { success: false, message: errorData.message || "Erro ao enviar resumo." };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Erro ao enviar resumo. Verifique sua conexão.",
    };
  }
}
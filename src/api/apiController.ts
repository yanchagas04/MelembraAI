const ACTIVITY_API_URL = "https://apis.scrimba.com/bored/api/activity";
const API_URL = '';
export async function gerarAtividade() {
    const response = await fetch(ACTIVITY_API_URL);
    const data = await response.json();
    const atividade = data.activity;
    const response2 = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(atividade)}&langpair=en|pt`);
    const data2 = await response2.json();
    return data2.responseData.translatedText;
}

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Erro na resposta do servidor ao tentar login.' }));
      // Log detalhado do erro da API
      console.error('API Login Error:', { status: response.status, errorData, requestBody: { email } }); // Não logar senha
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    // Handle empty response body gracefully
    try {
      return await response.json();
    } catch {
      return {};
    }
  } catch (error) {
    console.error('Login request failed:', error);
    throw error; // Re-throw para ser pego pelo chamador (componente)
  }
};
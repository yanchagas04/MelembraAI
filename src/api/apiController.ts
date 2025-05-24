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


export const register = async (name: string, email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/register`, { // Assuming API_URL is configured elsewhere or needs to be set
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Erro na resposta do servidor ao tentar registrar.' }));
      // Log detalhado do erro da API
      console.error('API Register Error:', { status: response.status, errorData, requestBody: { name, email } }); // Não logar senha
      // Mapear status code para mensagem de erro mais específica
      let errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
      if (response.status === 409) {
          errorMessage = "Email já cadastrado.";
      } else if (response.status === 400) {
          // A API pode retornar múltiplos erros de validação
          if (errorData.errors && Array.isArray(errorData.errors)) {
              errorMessage = errorData.errors.map((err: any) => err.msg).join(' ');
          } else {
              errorMessage = "Dados inválidos. Verifique os campos e tente novamente.";
          }
      }
      throw new Error(errorMessage);
    }
    // Handle empty response body gracefully
    try {
      return await response.json();
    } catch {
      return { message: "Registro realizado com sucesso!" }; // Retornar um objeto de sucesso padrão se a resposta for vazia
    }
  } catch (error) {
    console.error('Register request failed:', error);
    // Se o erro já for uma instância de Error com mensagem, repassa
    if (error instanceof Error) {
        throw error;
    }
    // Caso contrário, cria um novo erro genérico
    throw new Error("Falha ao tentar registrar. Tente novamente mais tarde.");
  }
};

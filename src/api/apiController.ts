const ACTIVITY_API_URL = "https://apis.scrimba.com/bored/api/activity";
export async function gerarAtividade() {
    const response = await fetch(ACTIVITY_API_URL);
    const data = await response.json();
    const atividade = data.activity;
    const response2 = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(atividade)}&langpair=en|pt`);
    const data2 = await response2.json();
    return data2.responseData.translatedText;
}
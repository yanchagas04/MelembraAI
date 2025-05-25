const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function pegarTarefas() {
    const res = await fetch(API_URL + '/api/activities', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    const response = await res.json()
    return response.activities
}
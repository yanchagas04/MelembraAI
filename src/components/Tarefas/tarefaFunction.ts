import { Tarefa } from "@/app/tipos"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default async function criarTarefa(tarefa: Tarefa){
    const res = await fetch(API_URL + '/api/activities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            title: tarefa.titulo,
            description: tarefa.descricao,
            date: tarefa.data,
            completed: false
        }),
    })
    const response = await res.json()
    return response
}

export async function deletarTarefa(id: string){
    const res = await fetch(API_URL + '/api/activities/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    })
    const response = await res.json()
    return response
}

export async function editarTarefa(tarefa: Tarefa){
    const res = await fetch(API_URL + '/api/activities/' + tarefa.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            title: tarefa.titulo,
            description: tarefa.descricao,
            date: tarefa.data,
            completed: tarefa.concluida
        }),
    })
    const response = await res.json()
    return response
}
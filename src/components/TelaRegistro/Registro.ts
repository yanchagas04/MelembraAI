const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function register(name: string, email: string, password: string) {
     const res = await fetch(API_URL + '/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    
    })
    const response = await res.json()
    return response
}
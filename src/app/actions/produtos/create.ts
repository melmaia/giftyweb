"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    await new Promise( r => setTimeout(r, 5000))

    const data = {
        nome: formData.get("nome"),
        descrição: formData.get("descrição"),
        icone: "apple"
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    const resp = await fetch(process.env.API_BASE_URL + "/produto", options)

    if (resp.ok){
        redirect("/produtos")
    }

    if(resp.status == 400){
        return {
            message: "erro de validação"
        }
    }
    
}


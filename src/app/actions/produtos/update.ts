"use server"

import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData){
    const id = formData.get("id")

    const data = {
        nome: formData.get("nome"),
        descrição: formData.get("descrição"),
        link: formData.get("link"),
        icone: formData.get("icone")
    }

    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    const resp = await fetch(`${process.env.API_BASE_URL}/produto/${id}` , options)

    if (resp.ok){
        redirect("/produtos")
    }

    if(resp.status == 400){
        return {
            message: "erro de validação"
        }
    }

}
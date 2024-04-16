'use server'

export async function getById(id: number) {
    const resp = await fetch(`${process.env.API_BASE_URL}/produto/${id}`, { next: { revalidate: 0 } })

    if (!resp.ok){
        throw new Error("produto não encontrado")
    }

    return await resp.json()
}
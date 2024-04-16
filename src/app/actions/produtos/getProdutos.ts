'use server'

export async function getProdutos() {
    const resp = await fetch(process.env.API_BASE_URL + "/produto", { next: { revalidate: 0 } })
    return await resp.json()
}
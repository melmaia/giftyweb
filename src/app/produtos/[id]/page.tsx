import { getById } from "@/app/actions/produtos/getById";
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";

export default async function EditarProduto({params}: Params) {
    const {id} = params
    const produto = await getById(id)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="produtos" />

            <EditForm {...produto} />
            
        </main>
    )
}
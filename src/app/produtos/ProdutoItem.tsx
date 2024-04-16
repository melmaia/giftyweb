"use client"

import DropDownActions from "@/components/DropDownActions";
import { Icone } from "@/components/Icone";
import { create } from "../actions/produtos/create";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/produtos/destroy";



interface ProdutoItemProps{
    produto : {
        id: number,
        nome: string,
        descrição: string
        icone: string
    }
}

function ProdutoItem({ produto } : ProdutoItemProps) {

    function handleDelete(){
        toast.promise(
            destroy(produto.id),
            {
                loading: "apagando...",
                success: "apagado com sucesso",
                error: "erro ao apagar"
            }
        );
    }
    return (
        <div>
            <div>
                <Icone nome={produto.icone}></Icone>
                <span>{produto.nome}</span>
                <span>{produto.descrição}</span>
            </div>
            <DropDownActions onDelete ={handleDelete} />

        </div>
    )
}
export default ProdutoItem;
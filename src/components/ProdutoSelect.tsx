'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { Icone } from "./Icone";

interface ProdutoSelectProps  {
    produtos: Array<Produto>,
    
}

export function ProdutoSelect({produtos}: ProdutoSelectProps) {

    return (
        <Select
            items={produtos}
            label="produto"
            variant="bordered"
            name="produto"
            placeholder="Selecione uma produto"
            labelPlacement="outside"
        >
            {(produto) => 
                <SelectItem key={produto.id} startContent={<Icone nome={produto.icone} />}>
                    {produto.nome}
                </SelectItem>
            }
        </Select>
    )
}
'use client';

import { useEffect, useState } from 'react';
import NavBar from "@/components/NavBar";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import ProdutoItem from './ProdutoItem';
import { getProdutos } from '../actions/produtos/getProdutos';

interface Produto {
id: number,
nome: string,
descrição: string,
icone: string
}

export default function Produtos() {
const [produtos, setProdutos] = useState<Produto[]>([]);

useEffect(() => {
    async function fetchProdutos() {
        const produtosData: Produto[] = await getProdutos();
    setProdutos(produtosData);
    }

    fetchProdutos();
}, []);

return (
    <main className="flex min-h-screen flex-col items-center">
    <NavBar active="produtos" />

    <section className="flex flex-col gap-2 bg-slate-800 min-w-[600px] mt-4 p-2 rounded">
        <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Itens Cadastrados</h2>
        <Link href="/produtos/new">
            <Button color="primary" startContent={<Plus />}>novo item</Button>
        </Link>
        </div>
        
    {produtos.map(produto =>
        <ProdutoItem produto ={produto} key={produto.id} />
        )}
        
    </section>
    </main>
);
}


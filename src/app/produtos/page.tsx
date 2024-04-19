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
descricao: string,
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

    <section className="itensCadastradados" style={{
                    width: '700px',
                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                    borderRadius: '35px',
                    backgroundColor: 'white',
                    display: 'inline-block',
                    color: 'black',
                    padding: '30px',
                    marginBottom: '100px',
                }}>
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


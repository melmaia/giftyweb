"use client";

import { create } from "@/app/actions/produtos/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
    message: '',
}

export default function CadastrarProduto(){
    const [state, formAction] = useFormState(create, initialState)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="produtos" />

            <form action={formAction} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
                <h2 className="text-2xl font-bold">Novo Item</h2>
                <Input
                    key="nome"
                    label="Nome"
                    name="nome"
                    labelPlacement="outside"
                    isInvalid={state?.message !== ''}
                    errorMessage={state?.message}
                />
                <Input
                    key="descrição"
                    label="Descrição"
                    name="descrição"
                    labelPlacement="outside"
                    isInvalid={state?.message !== ''}
                    errorMessage={state?.message}
                />
    
                <div className="flex justify-around mt-4">
                    <Link href="/produtos">
                        <Button variant="bordered" >Cancelar</Button>
                    </Link>
                    <SubmitButton></SubmitButton>
                </div>
            </form>
        </main>


    )
}

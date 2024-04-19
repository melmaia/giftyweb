"use client"

import {icones } from "@/app/utils/Icones";
import { update } from "@/app/actions/produtos/update";
import { Icone } from "@/components/Icone";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";

const initialState = {
    message: '',
}


export function EditForm(produto: Produto) {
    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
            <h2 className="text-2xl font-bold">Editar item {produto.nome}</h2>
            <input type="hidden" name="id" value={produto.id} />
            <Input
                key="nome"
                label="Nome"
                name="nome"
                defaultValue={produto.nome}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.message != ''}
                errorMessage={state?.message}
            />

            <Input
                key="descricao"
                label="descricao"
                name="descricao"
                defaultValue={produto.descricao}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.message != ''}
                errorMessage={state?.message}
            />

            <Input
                key="link"
                label="link"
                name="link"
                defaultValue={produto.link}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.message != ''}
                errorMessage={state?.message}
            />

            <Autocomplete
                defaultItems={icones}
                label="Ícone"
                name="icone"
                variant="bordered"
                defaultInputValue={produto.icone}
                labelPlacement={"outside"}
                placeholder="procurar ícone"
            >
                {(icone) => <AutocompleteItem key={icone.nome} startContent={<Icone nome={icone.nome} />}>{icone.nome}</AutocompleteItem>}
            </Autocomplete>

            <div className="flex justify-around mt-4">
                <Link href="/produtos">
                    <Button variant="bordered" >cancelar</Button>
                </Link>
                <SubmitButton></SubmitButton>
            </div>
        </form>
    )
}
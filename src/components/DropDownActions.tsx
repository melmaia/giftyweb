'use client'

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface DropDownActionsProps{
  onDelete: MouseEventHandler
}

export default function DropDownActions({onDelete}: DropDownActionsProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          style={{
            width: '20px',
            height: '20px',
            marginTop: '10px',
            marginBottom: '40px'}}
        >
          <ChevronDown/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {/*<DropdownItem key="edit" startContent={<Pencil />} >editar</DropdownItem>*/}
        <DropdownItem onClick={onDelete} startContent={<Trash />} key="delete" className="text-danger" color="danger">
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}


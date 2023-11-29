"use client";
import React, { ReactEventHandler } from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const shortCut = ["⌘E","⌘S", "⌘H"];

const DropDown = ({name}:{name: string}) => {
  const router = useRouter();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="bg-gradient-to-tr from-purple-500 to-green-500 text-white shadow-lg" radius="none">{name}</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem shortcut={shortCut[0]} onClick={()=> {
          router.push('http://localhost:3000/api/auth/signout');
          signOut();
        }}>Sign out</DropdownItem>
        <DropdownItem shortcut={shortCut[1]}>Settings</DropdownItem>
        <DropdownItem shortcut={shortCut[2]}>Help</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
export default DropDown;

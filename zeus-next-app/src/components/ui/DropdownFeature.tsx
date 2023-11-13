"use client";
import React from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const dropdownItems = ["Sign out", "Settings", "Help"];
const shortCut = ["⌘E","⌘S", "⌘H"];

const DropDown = ({name}:{name: string}) => {
  const router = useRouter();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>{name}</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem shortcut={shortCut[0]} onClick={()=> {
          signOut();
          router.push('/');
        }}>Sign out</DropdownItem>
        <DropdownItem shortcut={shortCut[1]}>Settings</DropdownItem>
        <DropdownItem shortcut={shortCut[2]}>Help</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
export default DropDown;

// {dropdownItems.map((item, i) => (<DropdownItem key={i} shortcut={shortCut[i]} >{item} </DropdownItem>))}
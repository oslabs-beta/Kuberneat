"use client";
//@ts-nocheck
import React from 'react';
import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";

interface PodProps {
  id: number, 
  info: {
    Namespace: string,
    Name: string,
    CPU_Requests: string,
    CPU_Limits: string,
    Memory_Requests: string,
    Memory_Limits: string,
    Age: string,
  }
}

const AllPods = ({id, info}: PodProps) => {
  const content = {
    Namespace: info.Namespace,
    Name: info.Name,
    CPU_Requests: info.CPU_Requests,
    CPU_Limits: info.CPU_Limits,
    Memory_Requests: info.Memory_Requests,
    Memory_Limits: info.Memory_Limits,
    Age: info.Age,

  }
  return (
    <>
    <Accordion>
      <AccordionItem value={id} title="Pods">
        <Avatar/>
        <p>{content.Namespace}</p>
        <p>{content.Name}</p>
        <p>{content.CPU_Requests}</p>
        <p>{content.CPU_Limits}</p>
        <p>{content.Memory_Requests}</p>
        <p>{content.Memory_Limits}</p>
        <p>{content.Age}</p>
      </AccordionItem>
    </Accordion>
    </>
  )
};
export default AllPods;
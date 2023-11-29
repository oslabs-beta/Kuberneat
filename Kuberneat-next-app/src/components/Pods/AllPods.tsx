"use client";
 /**
 * Renders all the pods.
 *
 * @param {PodProps} id - The ID of the pod.
 * @param {PodProps} info - The information about the pod.
 * @return {JSX.Element} The rendered component.
 */

//@ts-nocheck
import React from 'react';
import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";

type PodProps = {
  id: number;
  info: {
    Namespace: string;
    Name: string;
    CPU_Requests: string;
    CPU_Limits: string;
    Memory_Requests: string;
    Memory_Limits: string;
    Age: string;
  };
};

const AllPods = ({id, info}: PodProps) => {
  return (
    <>
    <div>Pods</div>
    <Accordion>
      <AccordionItem value={id} title="Pod">
        <Avatar/>
        <p>{info.Namespace}</p>
        <p>{info.Name}</p>
        <p>{info.CPU_Requests}</p>
        <p>{info.CPU_Limits}</p>
        <p>{info.Memory_Requests}</p>
        <p>{info.Memory_Limits}</p>
        <p>{info.Age}</p>
      </AccordionItem>
    </Accordion>
    </>
  )
};
export default AllPods;
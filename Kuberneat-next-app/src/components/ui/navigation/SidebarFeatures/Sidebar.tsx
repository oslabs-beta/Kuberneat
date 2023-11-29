"use client"
/**
 * Sidebar navigation component
 * @param {string} value - The value of the accordion item
 * @param {boolean} disabled - If `true`, the accordion item will be disabled
 */

import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/system';
import Image from 'next/image';
import dashboardIcon from '../../public/dashboardIcon.svg';
import podIcon from '../../public/podIcon.svg';
import promIcon from '../../public/promicon.svg';
import clusterIcon from '../../public/clusterIcon.svg';

import './Sidebar.style.css';
import {useRouter} from 'next/navigation';

import { Card, Typography } from "@material-tailwind/react";

const Sidebar = () => {
  const router = useRouter();
  
  return (
   <NextUIProvider>
    {/* Body of sidebar */}
     <Card id= "sidebar" className="h-[calc(100vh-2rem)] !right-0 w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900"
    style={{ position: 'fixed', right: 0, width: '20rem' }}
    >
      {/* Title: MENU */}
      <div className="mb-2 p-4 !text-black text-5xl">
        <Typography variant="h5" color="blue-gray">
          ⚡ Menu ⚡ 
        </Typography>
        {/* Beginning of accordion feature button to show more info  */}
          <Accordion>
            {/* Dashboard views -proivdes more visuals */}
            <AccordionItem 
            value="dashboards"
            aria-label="more-Dashboard"
            subtitle={
              <span>
                  <strong>More</strong> Dashboard Options
                </span>
              }
              title="Visuals"
              >
                {/* Grahana -main dashboard or home page  */}
              <div className="flex flex-col justify-between p-2">
                <Button className="p-4 m-4 bg-blue-500">
                <Image src={dashboardIcon} alt="dashboard-icon" />
                  <a href="/Home">Graphana UI</a>
                </Button>
                {/* 3D Visual */}

                <Button className="p-4 m-4 bg-blue-500" onClick={() => router.push('Views/Cluster-Web-View')}>
                <Image src={clusterIcon} alt="cluster-icon" />
                  <a>Cluster web view</a>
                </Button>

                {/* Individual Pod View */}
                <Button className="p-4 m-4 bg-blue-500"  onClick={() => router.push('Views/Pods')}>
                <Image src={podIcon} alt="pod-icon" />
                  <a>Pod view</a>
                </Button>
             </div>
        </AccordionItem>

        {/* Prometheus -provides more data */}
        <AccordionItem
         value="promethus"
         aria-label="promethus"
         subtitle={
           <span>
               <strong>Query</strong> with PromQL
             </span>
           }
           title="Prometheus"
        >
          <div className="flex flex-col justify-between p-2">
            <Button className="p-4 m-4 bg-blue-500" onClick={() => router.push('Views/Promethus')}>
              <Image src={promIcon} alt="prom-icon" />
              <a>Prometheus UI</a>
            </Button>
          </div>
        </AccordionItem>
        
        {/* View Health of running pods */}
        <AccordionItem
         value="heath"
         aria-label="health"
         subtitle={
           <span>
               Montior the <strong>health</strong> of current running pods
             </span>
           }
           title="Health"
        >
          <div className="flex flex-col justify-between p-2">
            <Button className="p-4 m-4 bg-blue-500" onClick={()=> router.push('Views/Health/')}>
              <a href="/Pod-View"> 💙 </a>
            </Button>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
    </Card>
   </NextUIProvider>
  )
};

export default Sidebar;
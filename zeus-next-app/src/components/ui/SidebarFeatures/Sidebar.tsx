import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/system';
import Image from 'next/image';
import dashbaordIcon from '../public/dashboardIcon.svg';
import podIcon from '../public/podIcon.svg';

import {
  Card, 
  Typography,
  List, 
  ListItem,
  ListItemPrefix, 
  ListItemSuffix,
  Chip
} from "@material-tailwind/react";



import './Sidebar.style.css';
const Sidebar = () => {
  
  return (
   <NextUIProvider>
     <Card className="h-[calc(100vh-2rem)] !fixed !right-0 w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
    style={{ position: 'fixed', right: 0, width: '20rem' }}
    >
      <div id="sidebar" className="mb-2 p-4 !text-black text-5xl">
        <Typography variant="h5" color="blue-gray">
          Menu
        </Typography>
      </div>
          <Accordion>
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
              <div className="flex flex-col justify-between p-2">
                <Button className="p-4 m-4">
                <Image src={dashbaordIcon} alt="dashboard-icon" />
                  <a href="/Home">Graphana dashboard</a>
                </Button>
                <Button className="p-4 m-4">
                  <a href="/Cluster-Web-View">Cluster web view</a>
                </Button>
                <Button className="p-4 m-4">
                <Image src={podIcon} alt="pod-icon" />
                  <a href="/Pod-View">Pod view</a>
                </Button>
             </div>
        </AccordionItem>

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
            <Button className="p-4 m-4">
              <a href="/Pod-View">Prometheus UI</a>
            </Button>
          </div>
        </AccordionItem>
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
            <Button className="p-4 m-4">
              <a href="/Pod-View">Prometheus UI</a>
            </Button>
          </div>
        </AccordionItem>
      </Accordion>
    </Card>
   </NextUIProvider>
  )
};

export default Sidebar;
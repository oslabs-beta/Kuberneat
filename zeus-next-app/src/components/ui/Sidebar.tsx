import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/system';
const Sidebar = () => {
  const [active, setActive] = useState(false);

  const content = ["Home", "Cluster View", "Pods", "Prometheus", "Alerts"];

  return (

    <div className="top-15 !right-0 flex flex-col w-64 h-full px-8 py-4 bg-white border-l dark:bg-gray-800 dark:border-gray-600">
            {/* sidebar header */}
        <div className="flex items-center justify-between">
        <ul>
          {content.map((item, i) => {
            return (
              <li key={i} className="flex items-center mt-4 py-2 px-6 bg-opacity-25 rounded-lg">
                <NextUIProvider>
                <Button
                  color="default"
                  variant="shadow"
                  onClick={() => setActive(!active)}
                >
                  {item}
                </Button>
                </NextUIProvider>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )

};

export default Sidebar;
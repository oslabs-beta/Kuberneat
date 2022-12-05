import { ProSidebar, Menu, SubMenu, MenuItem, SidebarContent, SidebarFooter, SidebarHeader } from 'react-pro-sidebar'; 
import React from 'react';



export default function Sidebar() {


    return (
        <div className='sidebar-dark'>
            <ProSidebar>

                <SidebarHeader>
                User Profile Info
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem>
                        Dashboard
                        </MenuItem>
                        <MenuItem>
                        Visualizer
                        </MenuItem>
                        <SubMenu>
                            <MenuItem>
                            </MenuItem>
                        </SubMenu>
                    </Menu>

                </SidebarContent>

            </ProSidebar>
        </div>

    )
}
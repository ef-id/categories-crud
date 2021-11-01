import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { FaList } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { BsFillPinAngleFill } from "react-icons/bs"
import { IoDocumentsSharp } from "react-icons/io5"
import './Header.css';


import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div id="header">
            <ProSidebar >
                <Menu iconShape="square">
                    <SidebarHeader>
                        <div className="title">
                            <p>Welcome, Admin</p>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem className="centerItem" icon={<FiHome />}>Dashboard<Link to="/" /></MenuItem>
                            <MenuItem icon={<BsFillPinAngleFill />}> <Link to="/posts">Posts</Link></MenuItem>
                            <MenuItem icon={<FaList />}> <Link to="/categories">Categories</Link></MenuItem>
                            <MenuItem icon={<IoDocumentsSharp />}> <Link to="/pages">Pages</Link></MenuItem>
                            <MenuItem icon={<BiCog />}> <Link to="/settings">Settings</Link></MenuItem>
                        </Menu>
                    </SidebarContent>

                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <div className="Header">
      <Breadcrumb>
        <Breadcrumb.Item>
        <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/list">Application Center</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}


export default Navbar;

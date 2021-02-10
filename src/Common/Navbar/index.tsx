import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
        <li className="liStyle"><NavLink to="/">Home</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;



import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
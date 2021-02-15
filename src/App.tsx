
import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import Navbar from './Common/Navbar';
import Home from './Home';
import { Layout, Menu } from 'antd';
import About from './About';
import './App.css'
import Count from './Count';
import Recoder from './Recoder';
function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
      <BrowserRouter>
        <Layout className="layout">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#fff' }}>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                <NavLink to="/home">Home</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/count">Count</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/recoder">Recoder</NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className="site-layout-content" style={{ padding: '0 50px' }}>
            <Switch>
              <Route exact path="/home" component={Home}>
                <Home />
              </Route>
              <Route path="/count" component={Count}>
                <Count />
              </Route>
              <Route path="/recoder" component={Recoder}>
                <Recoder />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

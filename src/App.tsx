
import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';

import Home from './Home';
import { Layout, Menu } from 'antd';

import './App.css'
import Count from './Count';
import Recoder from './Recoder';
import Timer from './Timer';
function App() {
  const { Header, Content } = Layout;
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
              <Menu.Item key="4">
                <NavLink to="/timer">Timer</NavLink>
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
              <Route path="/timer" component={Timer}>
                <Timer />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

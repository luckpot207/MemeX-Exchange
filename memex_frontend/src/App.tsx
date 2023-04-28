import React from 'react';
import './App.css';
import Logo from './assets/images/logo.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Routes from "./Routes";
import { ReactComponent as Exchange } from './assets/icons/exchange.svg';
import { ReactComponent as Governance } from './assets/icons/governace.svg';
import { ReactComponent as Dashboard } from './assets/icons/dashboard.svg';
import { AppstoreOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { BrowserRouter } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const list = [
  {
    key: '1',
    icon: Dashboard,
    label: 'Dashboard',
  },
  {
    key: '2',
    icon: Exchange,
    label: 'Exchange',
  },
  {
    key: '3',
    icon: Governance,
    label: 'Governance',
  },
]

const App = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className='logo d-flex justify-center align-center'>
              <img
                className='logo-img'
                src={Logo}
              />
            </div>

            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              children={list.map(item => <Menu.Item key={item.key} icon={<item.icon />} >{item.label}</Menu.Item>)}
            />
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24 }}>
                <Routes />
              </div>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

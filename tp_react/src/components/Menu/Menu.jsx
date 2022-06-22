import React, {useEffect, useState} from "react";
import "antd/dist/antd.min.css";
import "./Menu.css";
import {Menu, Layout, PageHeader, Avatar, Dropdown, Typography} from "antd";
import uprodit from "../../img_Project/image.png";


const {Header, Content, Footer, Sider} = Layout;

export default function MenuNav(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}>
        <img src={uprodit} alt="uprodit" className="logo" />
        <Menu defaultSelectedKeys={[props.id]} mode="inline" theme="dark">
          <Menu.Item
            name="dashboard"
            key="0"
           
            >
            Computing
          </Menu.Item>
          <Menu.Item
            key="1"
            name="Developer"
            
            >
           Developer
          </Menu.Item>
          <Menu.Item
            name="Mobile Developer"
            key="2"
            >
            Mobile Developer
          </Menu.Item>
          <Menu.Item
            name="Android Developer"
            key="3"
           
            >
           Android Developer
          </Menu.Item>
          <Menu.Item
            name="IOS Developer"
            key="4"
            
            >
          IOS Developer
          </Menu.Item>
          <Menu.Item
            name="Video-game Developer"
            key="5"
         
            >
            Video-game Developer
          </Menu.Item>
          <Menu.Item
            name="Nosql engineer"
            key="6"
           
            >
         Nosql engineer
          </Menu.Item>
          <Menu.Item
            name="Java/JEE  Consultant"
            key="7"
            
            >
            Java/JEE  Consultant
          </Menu.Item>
          <Menu.Item
            key="8"
            name="JS developer"

            >
         JS developer
          </Menu.Item>
          <Menu.Item
            name="Python developer"
            key="9"
           
            >
          Python developer
          </Menu.Item>
          <Menu.Item
            key="10 "
            name="Ruby  developer"

            >
         Ruby  developer
          </Menu.Item>
          <Menu.Item
            name="Php consultant"
            key="11"
           
            >
        Php consultant
          </Menu.Item>
         
        </Menu>
      </Sider>

      <Layout className="site-layout">
      <Header
          className="site-layout-background backgroundcolornav"
          style={{
            padding: 0,
          }}>

<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}  >
        <Menu.Item key={'1'}> News </Menu.Item>
        <Menu.Item key={'2'}> Jobs  </Menu.Item>
        <Menu.Item key={'3'}> Community  </Menu.Item>
        <Menu.Item key={'4'}  > Sign up </Menu.Item>
        <Menu.Item key={'5'}> Login  </Menu.Item>
        </Menu>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}>
          <PageHeader className="site-page-header" title={props.title} />
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}>
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}>
        </Footer>
      </Layout>
    </Layout>
    
  );
  
}

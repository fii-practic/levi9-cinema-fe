import { Layout, Menu } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { useLocation } from "react-router-dom";
import Router from "./router/Router";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";

const { content } = styles;

function App() {
  const location = useLocation();
  const isLoginPath = location.pathname === "/";

  return (
    <Layout>
      {!isLoginPath && <NavBar />}
      <Content className={content}>
        <Router />
      </Content>
      {!isLoginPath && <Footer></Footer>}
    </Layout>
  );
}

export default App;

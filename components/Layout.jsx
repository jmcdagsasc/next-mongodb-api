import Nav from "./Nav";
import Header from "./Header";
import { container, main } from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={container}>
        <main className={main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

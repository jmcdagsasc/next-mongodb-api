import Link from "next/link";
import { nav } from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={nav}>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Nosotros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

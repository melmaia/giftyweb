import Link from "next/link";
import "./navBar.css";

interface NavBarProps {
    active: "dashboard" | "listas" | "produtos" | "quemSomos"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-pink-500 border-b-4 pb-2"

    
    return (
        <header>
            <Link href="/">
                <img src="/images/logo.png" alt="Giffty Logo" className="logo" />
            </Link>
            <nav className="navegate">
                <ul className="listaHeader">
                    <li className="itemHeader">
                        <Link href="/quemSomos">Quem somos?</Link>
                    </li>
                    <li className="itemHeader">
                        <Link href="/listas">Listas</Link>
                    </li>
                    <li className="itemHeader">
                        <Link href="/produtos">Produtos</Link>
                    </li>
                </ul>
            </nav>

            <nav className="login">
                <ul className="listaHeader">
                    <img src="https://i.pravatar.cc/300" alt="Icon" className="icon-user"/>
                </ul>
            </nav>
        </header>
    );
}

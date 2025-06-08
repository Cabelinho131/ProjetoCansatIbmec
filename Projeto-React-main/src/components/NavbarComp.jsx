import { Link } from "react-router-dom"

export function NavbarComp() {
    

    return (
        <header id="header2">
            <nav id="navbar-comp">
                <Link to="/competicoes"><a href="" className="link-Comp"><button className="botao-Comp">CANSAT 2025</button></a></Link>
                <Link to="/competicoes2"><a href="" className="link-Comp">Competições anteriores</a></Link>
            </nav>
        </header>
    );
}
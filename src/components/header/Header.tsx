import "./Header.css";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand custom-text" href="/">Supermecado <strong>KiBarato</strong></a>
                    <button className="navbar-toggler custom-color" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header custom-text">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white custom-text" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active custom-links" aria-current="page" href="#product">Produtos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  custom-links" href="#cart">Carrinho</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  custom-links" href="#favorite">Favoritos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
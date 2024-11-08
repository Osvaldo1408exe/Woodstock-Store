import "./style.css"
export function Header() {
    return (
        <header>
            <div className="container">
                <div className="logoContainer">
                    <img src="/images/logo.png" alt="logo" className="logo"/>
                    <h1>Woodstock Store</h1>
                </div>
                <div className="pages-section">
                    <ul className="list-pages">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="user-section">
                    <ul className="list-user">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
                
            </div>
        </header>
    )
}
import './style.css'
export default function Footer() {
    return (
        <footer >
            <div className="footer-container">
                <div className="lists">
                    <div className="logo">
                        <a href="#"><p>Woodstock</p></a>
                    </div>
                    <div className="links">
                        <p>Links</p>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="help">
                        <ul>
                            <p>Help</p>
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Privacy Policies</a></li>
                        </ul>
                    
                    </div>
                </div>
                <p className="copy">© 2024 Woodstock Store. Developed by Osvaldo Protazio</p>
            </div>
            </footer>
    );
}
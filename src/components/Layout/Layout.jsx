import { Navigation } from "../Navigation/Navigation";
import "./Layout.css"
export function Layout() {
    return (
        <div>
            <nav>
                <Navigation />
            </nav>
            <main>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>
                <div className="content">Содержимое страницы...</div>

            </main>
        </div>
    )
}
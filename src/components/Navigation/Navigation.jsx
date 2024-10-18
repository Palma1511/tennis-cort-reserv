import { useEffect, useState } from "react";
import "./Navigation.css"
export function Navigation() {
    const [isSticky, setIsSticky] = useState(false);

    // Отслеживание положения прокрутки
    const handleScroll = () => {
        // Позиция прокурутки
        const scrollTop = window.pageYOffset;
        // Обновление состояния
        setIsSticky(scrollTop > 0);
    };
    // Добавление в случае прокрутки и удаление обработчика событий
    useEffect(() => {
        // Добавление обработки событий
        window.addEventListener('scroll', handleScroll);
        // Удаление обработки событий
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isSticky ? 'header fixed' : 'header'}>
            <img src="https://lifecitysport.by/wp-content/uploads/2023/12/logo-w.png" alt="image.png" />
            <h2>Теннис</h2>
        </header>
    )
}
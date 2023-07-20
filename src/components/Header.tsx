import React from 'react';
import '../styles/header.css';

export function Header() {
    return (
        <header className={"header"}>
            <div className={"header__container _container"}>
                <a href={""} className={"header__logo"}>
                    <span>MIRROR</span>
                    <span>movie</span>
                </a>
                <nav className={"header__menu menu"}>
                    <ul className={"menu__list"}>
                        <li className={"menu__item"}>
                            <a href={""} className={"menu__link"}>Фильмы</a>
                        </li>
                        <li className={"menu__item"}>
                            <a href={""} className={"menu__link"}>Сериалы</a>
                        </li>
                        <li className={"menu__item"}>
                            <a href={""} className={"menu__link"}>Мультфилмы</a>
                        </li>
                        <li className={"menu__item"}>
                            <a href={""} className={"menu__link"}>Катигории</a>
                        </li>
                    </ul>
                </nav>
                <div className={"header__search"}>
                    <input className={"header_input"}/>
                    <div className={"menu__item"}>
                        <a href={""} className={"menu__link"}>Войти</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
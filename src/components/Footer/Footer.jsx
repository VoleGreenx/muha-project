import React from 'react';
import classes from "./Footer.module.css";

const Footer = () => {
return (
<div className = {classes.wrap}>
    <div className = {classes.container}>
        <img src="/img/logo.svg" alt="Muha" />
        <div className= {classes.linked}>
            <div className= {classes.linked_item}>
                <ul>
                    <li><a href="#">Цены по регионам</a></li>
                    <li><a href="#">Instagram MUGO</a></li>
                    <li><a href="#">Партнеры</a></li>
                    <li><a href="#">Полезные статьи</a></li>
                    <li><a href="#">Подарки и акции</a></li>
                    <li><a href="#">Отзывы про</a></li>
                    <li><a href="#">Изучение языка страны</a></li>
                </ul>
            </div>
            <div className= {classes.linked_item}>
                <ul>
                    <li><a href="#">Сотрудничество</a></li>
                    <li><a href="#">Лич. кабинет</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Вопросы - ответы</a></li>
                    <li><a href="#">Пользовательское соглашение</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                </ul>
            </div>
            <div className={classes.linked_item + ' ' + classes.cta}>
                <div className= {classes.cta}>
                        <div className= {classes.cta_body}>
                            <h3 className= {classes.cta_title}>Как использовать наш сервис?</h3>
                            <p className= {classes.cta_text}>Пройдите краткий екскурс по всем функциям сайта. О которых вы, возможно, не знали.</p>
                            <a href="#" className={classes.cta_btn}>Давайте посмотрим</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Footer;
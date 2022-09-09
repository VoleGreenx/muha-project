import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={classes.navig}>
            <Link to="/"><img className={classes.logo} src="img/logo.svg" alt=""/></Link>
            <nav>
<<<<<<< HEAD
                <nav>
                    <Link to="#" className={classes.item}>Оставить отзыв</Link>
                    <Link to ="/findjobe" className={classes.item}>Найти работу</Link>
                    <Link to="#"  className={classes.item}>Акции</Link>
                    <Link to="#"  className={classes.item}>Справка</Link>
                    <Link to="#"  className={classes.item}>Русский</Link>
                    <Link to ="/login" className={classes.item}><img className={classes.account} src="img/account.svg" alt=""/>Войти</Link>
                </nav>
=======
                <Link className={classes.item}>Оставить отзыв</Link>
                <Link to ="/search-job" className={classes.item}>Найти работу</Link>
                <Link className={classes.item}>Акции</Link>
                <Link className={classes.item}>Справка</Link>
                <Link className={classes.item}>Русский</Link>
                <Link to ="/login" className={classes.item}><img className={classes.account} src="img/account.svg" alt=""/>Войти</Link>
>>>>>>> main
            </nav>
        </div>

    );
};

export default Navigation;
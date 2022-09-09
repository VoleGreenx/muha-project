import React from 'react';
import Btn from './Btn';
import classes from "./FAQ.module.css";

const FAQ = () => {
    return (
        <div className = {classes.wrap}>
            <div className = {classes.faqWrap}>
                    <h2 className = {classes.text}>Каждый отзыв отражает персональную историю</h2>
               <div className = {classes.btnWrap}>
                    <Btn text = "123" />
                    <Btn text = "1234" />
                    <Btn text = "1235" />
                    <Btn text = "1236" />
                    <Btn text = "1237" />
                    <Btn text = "1238" />
               </div>
               <a href="" className = {classes.faqBtn}>Перейти в справку</a>
            </div>
        </div>
    );
}

export default FAQ;
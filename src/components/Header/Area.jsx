import React from 'react';
import {Link} from "react-router-dom";

import classes from "./Area.module.css";


const Area = () => {
    return (
        <div className = {classes.area}>
            <div className = {classes.areaText}>
                <div className = {classes.textBlock}>
                    <h1 className = {classes.titl}>Поиск и проверка работы заграницей</h1>
                    <p className = {classes.text}> Найдите работу заграницей, которая будет стоить вашего 
                    труда. Или оставьте свою анонимную оценку работодателям, с которыми имели дело.</p>
                    <div className = {classes.btnBloc}>
                        <Link to="/Findjob" className = {classes.areaBtn}>Найти работу</Link>
                        <Link to="#" className = {classes.areaBtn}>Оставить отзыв</Link>
                    </div>
                    
                </div>

            <img className = {classes.people} src="img/people.svg" alt=""/>
            </div>
        </div>
    );
}

export default Area;
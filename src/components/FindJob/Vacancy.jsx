import React from 'react';
import classes from './Vacancy.module.css';
import VacancyRating from "./VacancyRating";

const Vacancy = ( {vacancy} ) => {
    return(
        <div className = {classes.vacancy_card}>
            <div className = {classes.card_body}>
                <VacancyRating vacancy={vacancy} />
                <div className = {classes.save}>Сохранить</div>
            </div>
            <div className = {classes.card_body}>
                <div className ={classes.vacancyTitle}>
                    <h3> {vacancy.titleOfVacansy} </h3>
                    <p> {vacancy.titleOfEmployer} </p>
                </div>
                <div> {vacancy.salary} zl</div>
            </div>
            <div className ={classes.vacancyText}>
                <p> {vacancy.description} </p>
            </div>
            <div className = {classes.card_body}>
                <div> {vacancy.location.country }, {vacancy.location.city} </div>
                <div className = {classes.card_body}> 
                    <div className = {classes.footerAny}>безопасность</div>
                    <div className = {classes.footerAny}>срочность</div>
                </div>
               
            </div>
        </div>
    );
}

export default Vacancy;
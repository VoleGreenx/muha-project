import React from 'react';
import Filter_country from './Filter_country';
import classes from './Findjob.module.css';
import Vacancy from './Vacancy';

const Findjob = (props) => {
    return (
        <div className = {classes.wrap}>
            <div className = {classes.content}>
                <div className = {classes.Sidebar}>
                    <div Sidebar_Btn>
                        <a href="#" className= {classes.Sidebar_Btn_item}>
                            <img className = {classes.Sidebar_Btn_ico} src="/img/eyeIcon.svg" alt="" />
                            <p>Зарплаты по регионам</p>
                        </a>
                    </div>

                    <div className = {classes.Sidebar_Filters}>
                        <Filter_country />
                        {/* Нужно добавить для каждого отдельно??
                        <Filter_qualificattion /> 
                        <Filter_salary /> 
                        */}
                        
                        <Filter_country />
                        <hr />
                        <div className = {classes.Sidebar_filterClear}>Сбросить все фильтры</div>
                    </div>
                </div>
                    <div className = {classes.vacancy}>
                        <Vacancy />
                        <Vacancy />
                        <Vacancy />
                        <Vacancy />
                        <Vacancy />
                        <Vacancy />
                    </div>
            </div>
        </div>
    );
}

export default Findjob;
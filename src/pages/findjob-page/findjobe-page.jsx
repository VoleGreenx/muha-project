import React from 'react';
import Filter_country from "../../components/FindJob/Filter_country";
import Vacancy from "../../components/FindJob/Vacancy";

import classes from "./findejob-page.module.css";

const JOBS = [
    {
        titleOfVacansy: "Хуй",
        rating: 1.0,
        salary: 1000,
        numberOfRevies: 10,
        titleOfEmployer: "RAJ-Personalservices GmbH",
        location: {
            country: "Poland",
            city: "Lodz"
        },
        description: "Заработная плата:\n" +
            "11,15 Евро/час (брутто) до 01.10.2022\n" +
            "13,00 Евро/час (брутто) c 01.10.2022.\n" +
            "Выплата в середине месяца на карту. Доплата 20% в праздничные " +
            "дни с понедельника по субботу и 10% в праздничные дни " +
            "в воскресенье. Плюс выплата отпускных!",
        id: 1
    },
    {
        titleOfVacansy: "Залупа",
        rating: 2.0,
        salary: 2000,
        numberOfRevies: 10,
        titleOfEmployer: "RAJ-Personalservices GmbH",
        location: {
            country: "Poland",
            city: "Lodz"
        },
        description: "Заработная плата:\n" +
            "11,15 Евро/час (брутто) до 01.10.2022\n" +
            "13,00 Евро/час (брутто) c 01.10.2022.\n" +
            "Выплата в середине месяца на карту. Доплата 20% в праздничные " +
            "дни с понедельника по субботу и 10% в праздничные дни " +
            "в воскресенье. Плюс выплата отпускных!",
        id: 2
    },
    {
        titleOfVacansy: "Пенис",
        rating: 3.0,
        salary: 3000,
        numberOfRevies: 10,
        titleOfEmployer: "RAJ-Personalservices GmbH",
        location: {
            country: "Poland",
            city: "Lodz"
        },
        description: "Заработная плата:\n" +
            "11,15 Евро/час (брутто) до 01.10.2022\n" +
            "13,00 Евро/час (брутто) c 01.10.2022.\n" +
            "Выплата в середине месяца на карту. Доплата 20% в праздничные " +
            "дни с понедельника по субботу и 10% в праздничные дни " +
            "в воскресенье. Плюс выплата отпускных!",
        id: 3
    },
    {
        titleOfVacansy: "Хер",
        rating: 4.0,
        salary: 4000,
        numberOfRevies: 10,
        titleOfEmployer: "RAJ-Personalservices GmbH",
        location: {
            country: "Poland",
            city: "Lodz"
        },
        description: "Заработная плата:\n" +
            "11,15 Евро/час (брутто) до 01.10.2022\n" +
            "13,00 Евро/час (брутто) c 01.10.2022.\n" +
            "Выплата в середине месяца на карту. Доплата 20% в праздничные " +
            "дни с понедельника по субботу и 10% в праздничные дни " +
            "в воскресенье. Плюс выплата отпускных!",
        id: 4
    },
    {
        titleOfVacansy: "Давалка",
        rating: 2,
        salary: 5000,
        numberOfRevies: 10,
        titleOfEmployer: "RAJ-Personalservices GmbH",
        location: {
            country: "Poland",
            city: "Lodz"
        },
        description: "Заработная плата:\n" +
            "11,15 Евро/час (брутто) до 01.10.2022\n" +
            "13,00 Евро/час (брутто) c 01.10.2022.\n" +
            "Выплата в середине месяца на карту. Доплата 20% в праздничные " +
            "дни с понедельника по субботу и 10% в праздничные дни " +
            "в воскресенье. Плюс выплата отпускных!",
        id: 5
    }
]

const FindjobePage = () => {
    return (
        <div className = {classes.wrap}>
            <div className = {classes.content}>
                <div className = {classes.Sidebar}>
                    <div className={classes.Sidebar_Btn}>
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
                    {JOBS.map(vacancy => <Vacancy vacancy = {vacancy} key = {vacancy.id} />)}
                </div>
            </div>
        </div>
    );
};

export default FindjobePage;
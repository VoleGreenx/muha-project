import React from 'react';
import ReactStars from "react-rating-stars-component/dist/react-stars";
import classes from "./VacancyRating.module.css";



const VacancyRating = ({vacancy}) => {
    return (


       <div className={classes.ratingBlock}>
            <div className={classes.rating}>
                    <ReactStars
                        {...{
                            value: vacancy.rating,
                            edit: false
                        }}
                    />
                <div className={classes.ratingValue}>{vacancy.rating} </div>
                <div>{vacancy.numberOfRevies} отзыва</div>
            </div>
        </div>

    );
};

export default VacancyRating;
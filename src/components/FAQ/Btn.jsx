import React from 'react';
import classes from "./Btn.module.css"

const Btn = (props) => {
    return (
        <div className = {classes.footerBtnSurf}>
            <img className = {classes.pic} src="img/surface.svg" alt="" />
            <p>{props.text}</p>
        </div>
    );
}

export default Btn;
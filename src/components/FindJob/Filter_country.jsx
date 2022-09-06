import React from 'react';
import classes from "./Filter_country.module.css";

const Filter_country = (props) => {
    return (
        <div className = {classes.Item}>
            <h3 className = {classes.Item_Header}>Страна</h3>
                <div className = {classes.Checkboxes}>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.check_input} />
                        <p className = {classes.input_text}>Польша</p>   
                        <span className = {classes.input_span}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.check_input} />
                        <p className = {classes.input_text}>Литва</p>   
                        <span className = {classes.input_span}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.check_input} />
                        <p className = {classes.input_text}>Германия</p>   
                        <span className = {classes.input_span}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.check_input} />
                        <p className = {classes.input_text}>Чехия</p>   
                        <span className = {classes.input_span}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.check_input} />
                        <p className = {classes.input_text}>Австрия</p>   
                        <span className = {classes.input_span}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.check_input} />
                        <p className = {classes.input_text}>Бельгия</p>   
                        <span className = {classes.input_span}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.check_input} />
                        <p className = {classes.input_text}>Великобритания</p>   
                        <span className = {classes.input_span}>123</span>
                    </label>

                </div>
        </div>
    );
}

export default Filter_country;
import React from 'react';
import classes from "./Login.module.css";
import InputMask from 'react-input-mask'

const Login = (props) => {
    return (
        
         <div className = {classes.loginWrap}>
            <div className = {classes.loginBlock}>
                <div className = {classes.loginHeader}>
                    <img className = {classes.loginImg} src="img/login_header.svg" alt="123" />
                </div>
                <div className = {classes.loginBtnBlock}>
                    <div className = {classes.loginBtn}>Регистрация</div>
                    <div className = {classes.loginBtn}>Вход</div>
                </div>
                <div className = {classes.socialLink}>
                    <p>Вы можете войти через соц. сети</p>
                    <div className = {classes.social}>
                        <div className = {classes.link}>1</div>
                        <div className = {classes.link}>2</div>   
                    </div>
                </div>
                <div className={classes.loginFormBlock}>
                    <form className={classes.loginForm} action="">
                        <label htmlFor="name" className={classes.loginFormLabel}>Имя и фамилия</label>
                        <input className={classes.loginFormText} placeholder = "Ваше имя" type="text" />
                        <label htmlFor="email" className={classes.loginFormLabel}>Ваш email</label>
                        <input className={classes.loginFormText} placeholder = "E-mail" type="email" />
                        <label htmlFor="phone" className={classes.loginFormLabel}>Номер телефона</label>
                        {/* <input className={classes.loginFormText} placeholder = "Телефон" type="tel" /> */}
                        <InputMask  mask="+38 (\099) 99 999 99" maskChar=" " className={classes.loginFormText} placeholder = "+38 (0__)-___-__-__" type="tel"/>
                        <label className={classes.loginPolicy} >
                            <input className={classes.policy} type="checkbox" name="" id="policy"  /> 
                            <p>I accept the terms of the offer of the privacy policy</p>
                        </label>
                        <input className = {classes.loginBtnSubmit} type="submit" value="Регистрация" />
                    </form>
                   
                    
                </div>

                <div className={classes.loginSigin}>
                    <p>Войти</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
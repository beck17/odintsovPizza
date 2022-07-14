import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Context} from "../index";
import firebase from "firebase";

function Login() {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <div className="cart cart--empty" style={{height:"50vh"}} >
            <h2 style={{marginTop:"100px"}}>
                Вы не авторизованы
            </h2>
            <p>
                Для того,чтоб перейти в корзину
                <br/>
                вас необходимо быть авторизованным
            </p><br/><br/>
            <button onClick={login} className="button button--black" style={{marginTop:"50px"}}>
                Войти с помощью GOOGLE
            </button>
        </div>
    );
}

export default Login;
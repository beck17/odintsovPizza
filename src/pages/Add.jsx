import React from 'react';
import {Link} from "react-router-dom";
// import {numberEx,adresEx} from "./Cart";

const Add = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Спасибо за заказ
            </h2>
            <p>
                По вашему адресу выслан вас заказ <br/>
                Курьер свяжется с вами по вашему телефону
            </p><br/><br/>
            <Link to="/" className="button button--black">
                <span>Вернуться на главную</span>
            </Link>
        </div>
    );
};

export default Add;
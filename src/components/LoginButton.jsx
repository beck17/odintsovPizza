import React from 'react';


function LoginButton({title ,onClick}){
    return (
        <button onClick={onClick} className="button button--cart">
            <svg width="18" height="18" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M227.5 291C148.247 291 84 355.247 84 434.5C84 440.023 79.5228 444.5 74 444.5C68.4772 444.5 64 440.023 64 434.5C64 344.201 137.201 271 227.5 271H284C374.299 271 447.5 344.201 447.5 434.5C447.5 440.023 443.023 444.5 437.5 444.5C431.977 444.5 427.5 440.023 427.5 434.5C427.5 355.247 363.253 291 284 291H227.5Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M256 236C305.153 236 345 196.153 345 147C345 97.8467 305.153 58 256 58C206.847 58 167 97.8467 167 147C167 196.153 206.847 236 256 236ZM256 256C316.199 256 365 207.199 365 147C365 86.801 316.199 38 256 38C195.801 38 147 86.801 147 147C147 207.199 195.801 256 256 256Z" fill="white"/>
            </svg>
            <span>{title}</span>
        </button>
    );
}

export default LoginButton;
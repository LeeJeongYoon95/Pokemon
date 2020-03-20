import React from 'react';
import './Kakao.css';

const Kakao = ({ friend }) => {

    console.log(friend);
    return (
        <li className="kakao-list">
            <div className="kakao-name">{friend.name}</div>
            <div className="kakao-id">{friend.id}</div>
            <div className="kakao-age">{friend.age}</div>
            <div className="kakao-descrip">{friend.description}</div>
        </li>
    )
};


export default Kakao;
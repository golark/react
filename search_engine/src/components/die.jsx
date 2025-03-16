

import React from 'react'


export default function Die(props) {


    function onClick(e) {
        props.handleDieClick(props.id)
    }

    return <button className={props.outOfGame ? "die-disabled" : "die"} onClick={onClick}>{props.value}</button>
}
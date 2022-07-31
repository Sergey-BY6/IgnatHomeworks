import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    let a = []
    let b = props.affair.priority
    if (b === 'high') a[0] = s.red
    if (b === 'low') a[0] = s.green
    if (b === 'middle') a[0] = s.orange

    return (
        <div key={props.affair._id} className={s.deleteBotton}>
            <span>{props.affair.name}</span> <span className={a[0]}>[{props.affair.priority}]</span>
            <button onClick={deleteCallback} className={s.deleteBotton2}>X</button>
        </div>
    )
}

export default Affair

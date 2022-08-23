import React from 'react'
import Affair from './Affair'
import { AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    console.log(mappedAffairs)

   // let colorButton = `${s.colorButton} ${s.active}`

    const setAll = (value: FilterType) => {
        props.setFilter(value)
    } // need to fix
    const setHigh = (value: FilterType) => {
        props.setFilter(value)
    }
    const setMiddle = (value: FilterType) => {
        props.setFilter(value)
    }
    const setLow = (value: FilterType) => {
        props.setFilter(value)
    }


const setClassName = (value: FilterType) => {
        return props.filter === value ? `${s.colorButton} ${s.active}`: (
            props.filter === value ? `${s.colorButton} ${s.active}` : (
                props.filter === value ? `${s.colorButton} ${s.active}`: (
                    props.filter === value ? `${s.colorButton} ${s.active}` : s.colorButton)))
}

    return (
        <div>
            {mappedAffairs}
            <div className={s.bottom}>
                <button className={setClassName('all')} onClick={() => setAll('all')}>All</button>
                <button className={setClassName('high')} onClick={() => setHigh('high')}>High</button>
                <button className={setClassName('middle')} onClick={() => setMiddle('middle')}>Middle</button>
                <button className={setClassName ('low')} onClick={() => setLow('low')}>Low</button>
            </div>

        </div>
    )
}

export default Affairs

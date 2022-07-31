import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'

export type AffairType = {
    _id: number
    name: string
    priority: string
}

export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> =  [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => {
    // need to fix any
    let filteredDefaultAffairs = affairs
    // if (filter === 'all') {return affairs
   if (filter === 'high') {
        filteredDefaultAffairs = affairs.filter(t => t.priority === 'high')
    }
    else if (filter === 'low') {
        filteredDefaultAffairs = affairs.filter(t => t.priority === 'low')
    }
    else if (filter === 'middle') {
        filteredDefaultAffairs = affairs.filter(t => t.priority === 'middle')
    }
    return filteredDefaultAffairs
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(t => t._id !== _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr />
            homeworks 2

            {/*should work (должно работать)*/}
            <div className={s.main}>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2

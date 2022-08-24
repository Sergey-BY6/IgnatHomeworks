// import React from 'react'
//
// function Header() {
//     return (
//         <div>
//             {/*// add NavLinks*/}
//
//         </div>
//     )
// }
//
// export default Header


import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';


function Header() {
    let activeStyle = (params: {isActive: boolean}) => {
        return {color: params.isActive ? s.active : s.link}
    }

    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} style={activeStyle}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} style={activeStyle}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} style={activeStyle}>junior+</NavLink>
            {/*// add NavLinks*/}
            <div className={s.block}/>
        </div>
    )
}

export default Header

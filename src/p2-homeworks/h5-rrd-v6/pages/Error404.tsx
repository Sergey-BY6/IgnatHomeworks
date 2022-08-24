import React from 'react'
import s from "./Pages.module.css"

function Error404() {
    return (
        <div className={s.error404}>
                <div className={s.err404}>404</div>
                <div className={s.pnf}>Page not found!</div>
                <div className={s.colorCat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404

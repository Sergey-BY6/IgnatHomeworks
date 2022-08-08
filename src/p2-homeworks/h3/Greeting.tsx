import React, {ChangeEventHandler, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: ChangeEventHandler<HTMLInputElement> // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPress: KeyboardEventHandler<HTMLInputElement>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : s.emptyClass// need to fix with (?:)
    const errorClass = s.errorText
    const buttonStatus = name.length === 0

    return (
        <div className={s.mainHW3}>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPress} className={inputClass}/>

            <button disabled={buttonStatus}
                    onClick={addUser}
                    className={s.button}
            >add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
            <div><span className={errorClass}>{error}</span></div>
        </div>
    )
}

export default Greeting

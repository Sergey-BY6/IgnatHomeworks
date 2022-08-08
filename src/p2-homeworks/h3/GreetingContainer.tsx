import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { //

    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any

    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let a = e.currentTarget.value
        if (a === '' || a === ' ') {
            setError('-- Error! Enter your name. --')
            setName('')
        } else {
            setName(a)
            setError('')
            // need to fix
        }
    }

    console.log(name)

    let totalUsers = users.length // need to fix

    const addUser = () => {
        if (name !== '') {
            addUserCallback(name)
            alert(`Hello ${name}!`) // need to fix
        }
        setName('')
    }

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onKeyPress={onKeyPress}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer

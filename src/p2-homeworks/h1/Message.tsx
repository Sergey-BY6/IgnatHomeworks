import React from 'react'
import classes from './Message.module.css'

type MessageDataTypeProps = {
    avatar: string
    name: string,
    message: string
    time: string
}

export const Message = (props: MessageDataTypeProps) => {
    return (
        <div className={classes.message}>
            <img src={props.avatar} alt={'avatar'} className={classes.avatar}/>

            <div className={classes.angle}> </div>

            <div className={classes.content}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}



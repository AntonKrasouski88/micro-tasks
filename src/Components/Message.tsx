import React, {ChangeEvent, useState} from 'react';

type MessagePropsType = {
    message: Array<MessageType>;
    addMessage: (title:string)=>void;
}

type MessageType = {
    message: string;
}

export const Message = (props:MessagePropsType) => {
    const showMessage = props.message.map((value, index) => {
        return <div key ={index}>
            {value.message}
        </div>
    })
    const [title,setTitle] = useState("");
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }
    const onClickInputHandler = ()=>{
        props.addMessage(title)
        setTitle("")
    }


    return (
        <div>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickInputHandler}>+</button>
            </div>
            <div>{showMessage}</div>
        </div>
    );
};

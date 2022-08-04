import React, {ChangeEvent} from 'react';

type InputPropsTitle = {
    setTitle:(title:string)=> void;
    title:string;
}

export const Input = (props:InputPropsTitle) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    };

        return (

            <input value={props.title} onChange={onChangeInputHandler}/>

        );
    };
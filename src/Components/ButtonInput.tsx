import React from 'react';

type ButtonType = {
    name: string
    callBack: ()=>void
}

export const ButtonInput = (props:ButtonType) => {
    const addMessage = () => props.callBack()

    return (
        <div>
            <button onClick={addMessage}>{props.name}</button>
        </div>
    );
};



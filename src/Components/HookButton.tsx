import React, {useState} from 'react';

export const HookButton = () => {
    let [a, setA] = useState(0);
    const count = () => {
        setA(++a);
        console.log(a);

    }

    const countReset = () => {
        setA(a = 0);
        console.log(a);
    }
    return (
        <div>
            <div>
                <h1>{a}</h1>
                <button onClick={count}>Count</button>
                <button onClick={countReset}>Count</button>
            </div>
        </div>
    );
};
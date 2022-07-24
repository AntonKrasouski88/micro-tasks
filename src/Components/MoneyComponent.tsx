import React from 'react';

type MoneyComponentType = {
    onFilterHandler: ()=>void
    currentMoney: Array<money>
}

type money = {
    banknots: string,
    value: number,
    number: string
}



export const MoneyComponent = (props:MoneyComponentType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objMoney, num) => {
                    return (
                        <li key={num}>
                            <span> {objMoney.banknots}</span>
                            <span> {objMoney.value}</span>
                            <span> {objMoney.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={props.onFilterHandler}>ALL</button>
            <button onClick={props.onFilterHandler}>RUBLS</button>
            <button onClick={props.onFilterHandler}>Dollars</button>
            {/*<button onClick={() => onFilterHandler("Dollars")}></button>*/}
        </div>
    );
};

import React from 'react';
import {filterType} from "../App";

type MoneyComponentType = {
    onFilterHandler: (type:filterType)=>void;
    currentMoney: Array<money>;
}

type money = {
    banknots: string;
    value: number;
    number: string;
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
            <button onClick={() => {props.onFilterHandler ("All")}}>ALL</button>
            <button onClick={() => {props.onFilterHandler ("RUBLS")}}>RUBLS</button>
            <button onClick={() => {props.onFilterHandler ("Dollars")}}>Dollars</button>
            {/*<button onClick={() => onFilterHandler("Dollars")}></button>*/}
        </div>
    );
};

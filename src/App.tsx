import React, {useState} from 'react';
import './App.css';
import {TopCars} from "./Components/TopCars";
import {Button} from "./Components/Button";
import {HookButton} from "./Components/HookButton";
import {MoneyComponent} from "./Components/MoneyComponent";


//import {MouseEvent} from "react";

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ];
    /*    const myFirstSubscriber = () => {
            return (
                console.log('Hello Im Anna!')
            );
        }
        const meSecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
            return console.log("Hello Im Second Subscriber");
        }*/

    /*    const onClickName = (name: string) => {
            return console.log(name)
        }*/

    /*
    const foo1 = () => {
        console.log(100200);
    }
    const foo2 = (num: number) => {
        console.log(num);
    }

    */
    const button1 = (text: string, age: number) => {
        console.log(text, age)
    }
    const button2 = (text: string, age: number) => {
        console.log(text, age)
    }
    const button3 = (text: string) => {
        console.log(text)
    }

    type filterType ='All' | 'Dollars' | 'RUBLS'
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState("All")

    let currentMoney = money;
    if (filter === "RUBLS") {
        currentMoney = money.filter((money) => money.banknots === 'RUBLS')
    } else if (filter === "Dollars") {
        currentMoney = money.filter((money) => money.banknots === 'Dollars')
    }


    let onFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }

    return (
        <div className="App">
            <HookButton/>
            <TopCars CarModel={topCars}/>
            <Button name={"MyYoutubeChanel - 1"} callBack={() => button1('Hello my friends', 21)}/>
            <Button name={"MyYoutubeChanel - 2"} callBack={() => button2('This is the best button', 22)}/>
            <Button name={"Fanny button"} callBack={() => button3('Im stupid Button')}/>
            <MoneyComponent currentMoney={money} onFilterHandler={()=>onFilterHandler("All")} />
            {/*<div>
            <button onClick={() => onClickName('Dima')}>MyYoutubeChanel - 1</button>
            <button onClick={() => onClickName('Anna')}>MyYoutubeChanel - 2</button>
        </div>*/}
            {/*<div>*/}
            {/*    <button onClick={foo1}>1</button>*/}
            {/*    <button onClick={() => foo2(100200)}>2</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;

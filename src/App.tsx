import React from 'react';
import './App.css';
import {TopCars} from "./Components/TopCars";
import {Button} from "./Components/Button";
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
    const button1 = (text:string, age:number) => {
        console.log(text, age)
    }
    const button2 = (text:string, age:number) => {
        console.log(text, age)
    }
    const button3 =(text: string) => {
        console.log(text)
    }


return (
    <div className="App">
        <TopCars CarModel={topCars}/>
        <Button name = {"MyYoutubeChanel - 1"} callBack={()=>button1('Hello my friends', 21)}/>
        <Button name = {"MyYoutubeChanel - 2"} callBack={()=>button2('This is the best button', 22)}/>
        <Button name = {"Fanny button"} callBack={()=> button3('Im stupid Button')}/>
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

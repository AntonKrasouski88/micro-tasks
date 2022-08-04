import React, {useState} from 'react';
import './App.css';
import {TopCars} from "./Components/TopCars";
import {Button} from "./Components/Button";
import {HookButton} from "./Components/HookButton";
import {MoneyComponent} from "./Components/MoneyComponent";
import {Message} from "./Components/Message";
import {Input} from "./Components/Input";
import {ButtonInput} from "./Components/ButtonInput";



//import {MouseEvent} from "react";
export type filterType ='All' | 'Dollars' | 'RUBLS'
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


    const money = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]

    const [filter, setFilter] = useState("All")


    let currentMoney;
    if (filter === "RUBLS") {
        currentMoney = money.filter((value) => value.banknots === 'RUBLS')
    } else if (filter === "Dollars") {
        currentMoney = money.filter((value) => value.banknots === 'Dollars')
    } else {currentMoney = money}

    let onFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }

    //lesson input
    let [message, setMessage] = useState( [
        {message: "message 1"},
        {message: "message 2"},
        {message: "message 3"},
    ])

    function addMessage (title:string) {
        let newMessage = [{message: title},...message];
        setMessage(newMessage);
    }
    const [title,setTitle] = useState("");
    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle("")
    }




    return (
        <div className="App">
            <HookButton/>
            <TopCars CarModel={topCars}/>
            <Button name={"MyYoutubeChanel - 1"} callBack={() => button1('Hello my friends', 21)}/>
            <Button name={"MyYoutubeChanel - 2"} callBack={() => button2('This is the best button', 22)}/>
            <Button name={"Fanny button"} callBack={() => button3('Im stupid Button')}/>
            <MoneyComponent currentMoney={currentMoney}
                            onFilterHandler={onFilterHandler} />
            {/*<Message message={message} addMessage = {addMessage}/>*/}
            <div>
                <Input setTitle = {setTitle} title = {title}/>
                <ButtonInput name={"+"} callBack={callBackButtonHandler}/>
                {message.map((value, index) => {
                return <div key ={index}>
            {value.message}
                </div>})}
            </div>
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

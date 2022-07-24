import React from 'react';

type TopCarsType = {
    CarModel: Array<CarPropertyType>;
}

type CarPropertyType = {
    manufacturer: string,
    model: string,
}


export const TopCars = (props: TopCarsType) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                </tr>
            </thead>
            <tbody>
                 {props.CarModel.map((item, i) => {
                     return (<tr key={i}>
                    <td>{item.manufacturer}</td>
                    <td>{item.model}</td>
                </tr>)
            })}
            </tbody>
        </table>)
};

import React from 'react';

type TopCarsType = {
    CarModel: Array<CarPropertyType>;
}

type CarPropertyType = {
    manufacturer: string,
    model: string,
}


export const TopCars = (props: TopCarsType) => {
    return (<table>
        {props.CarModel.map((item, i) => {
            return (<tr>
                <th key={i}>{item.manufacturer} {item.model}</th>
            </tr>)
        })}
    </table>)
};

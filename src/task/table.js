import React, { Fragment } from "react";
import Card from './card'

const table = ({btnClick}) => {


    const list = JSON.parse(localStorage.getItem("Shop"));
    let i = 0;

    const list_1 = list.filter((ele) => {
        if (ele.pro === "Realme" || ele.pro === "Redmi" || ele.pro === "Apple") {
            return ele;
        }
        else {
            return null;
        }   
    });

    const list_2 = list.filter((ele) => {
        if (ele.pro === "OnePlus" || ele.pro === "LG" || ele.pro === "Samsung") {
            return ele;
        }
        else {
            return null;
        }
    });
    const list_3 = list.filter((ele) => {
        if (ele.pro === "AC" || ele.pro === "Fridge" || ele.pro === "Fan") {
            return ele;
        }
        else {
            return null;
        }
    });


    return (
        <Fragment>
            <div className="table_container">
                <table>
                    <thead>
                        <tr>
                            <th><button id = "s1_btn" onClick={btnClick}>Mobile Shop</button></th>
                            <th><button id = "s2_btn" onClick={btnClick}>TV Shop</button></th>
                            <th><button id = "s3_btn" onClick={btnClick}>Home Appliances</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {
                                    list_1 !== null ?list_1.map((ele) => (
                                        <Card key = {i++} arr = {ele} />
                                    )): null
                                }
                            </td>
                            <td>
                                {
                                    list_2 !== null ? list_2.map((ele) => (
                                        <Card key = {i++}  arr = {ele}/>
                                    )): null
                                }
                            </td>
                            <td>
                                {
                                    list_3 !== null ? list_3.map((ele) => (
                                        <Card key = {i++}  arr = {ele}/>
                                    )): null
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}


export default table

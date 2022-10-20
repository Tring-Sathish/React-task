import React, { Fragment } from "react";
import Card from './card'

const table = ({btnClick}) => {

    const list_1 = JSON.parse(localStorage.getItem("Shop 1"));
    const list_2 = JSON.parse(localStorage.getItem("Shop 2"));
    const list_3 = JSON.parse(localStorage.getItem("Shop 3"));


    return (
        <Fragment>
            <div className="table_container">
                <table>
                    <thead>
                        <tr>
                            <th><button className="table_btn" id = "s1_btn" onClick={btnClick}>Mobile Shop</button></th>
                            <th><button className="table_btn" id = "s2_btn" onClick={btnClick}>TV Shop</button></th>
                            <th><button className="table_btn" id = "s3_btn" onClick={btnClick}>Home Appliances</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {
                                    list_1 !== null ? list_1.map((ele,index) => (
                                        <Card key = {index} product = {ele.pro} quantity = {ele.qua} price = {ele.pri} total = {ele.tot} />
                                    )) : null    
                                }
                            </td>
                            <td>
                                {
                                    list_2 !== null ? list_2.map((ele,index) => (
                                        <Card key = {index} product = {ele.pro} quantity = {ele.qua} price = {ele.pri} total = {ele.tot} />
                                    )): null
                                }
                            </td>
                            <td>
                                {
                                    list_3 !== null ? list_3.map((ele,index) => (
                                        <Card key = {index} product = {ele.pro} quantity = {ele.qua} price = {ele.pri} total = {ele.tot} />
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
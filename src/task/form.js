import React, { Fragment, useState } from "react";
import Table from "./table";
import './task4.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const [product, setproduct] = useState("");
    const [quantity, setquantity] = useState(1);
    const [price, setprice] = useState("");
    const [total, settotal] = useState("");
    const [list, setlist] = useState([]);
    const [options, setoptions] = useState([]);
    const [display, setdisplay] = useState(false);
    const [formdisplay, setformdisplay] = useState(false);


    const set_price_total = (select_product, select_quantity) => {

        const defalut_price = [
            { product: "Realme", value: 10000 },
            { product: "Apple", value: 45000 },
            { product: "Redmi", value: 20000 },
            { product: "OnePlus", value: 50000 },
            { product: "Samsung", value: 25000 },
            { product: "LG", value: 15000 },
            { product: "AC", value: 20000 },
            { product: "Fridge", value: 9000 },
            { product: "Fan", value: 2000 }
        ];

        defalut_price.forEach(element => {
            if (select_product === element.product) {
                setprice(element.value);
                settotal(element.value * select_quantity);
            }
        });

    }

    const addData = (e) => {
        e.preventDefault();
        if (product !== "Select product") {
            setdisplay(true);
            e.target.parentElement.reset();
            setproduct("Select product");
            setquantity(1);
            setprice("");
            settotal("");
            const obj = list.concat({
                pro: product,
                qua: quantity,
                pri: price,
                tot: total
            });
            setlist(obj);
        }
        else {
            toast.warn("Please select the product! or Enter the quantity")
        }
    }

    const storeData = (e) => {
        e.preventDefault();
        if (list.length !== 0) {
            setdisplay(false);
            e.target.parentElement.reset();
            setformdisplay(false);
            const data = JSON.parse(localStorage.getItem("Shop"));
            if (data !== null) {
                localStorage.setItem("Shop", JSON.stringify([...data, ...list]));
            }
            else {
                localStorage.setItem("Shop", JSON.stringify(list));
            }
            setlist([]);
            toast.success("Submited Succesfull!")
        }
        else {
            toast.info("Nothing to submit")
        }
    }

    const btnClick = (e) => {
        setformdisplay(true);
        setdisplay(false);
        setproduct("Select product");
        setquantity(1);
        setprice("");
        settotal("");
        setlist([]);
        if (e.target.id === "s1_btn") {
            setoptions(["Apple", "Realme", "Redmi"]);
        }
        else if (e.target.id === "s2_btn") {
            setoptions(["OnePlus", "Samsung", "LG"]);
        }
        else {
            setoptions(["AC", "Fan", "Fridge"]);
        }
        if (document.getElementById("form") !== null) {
            document.getElementById("form").reset();
        }
    }

    const handlechange = (e) => {
        if (e.target.id === "quantity") {
            setquantity(e.target.value);
            set_price_total(product, e.target.value)
        }
        else {
            setproduct(e.target.value);
            set_price_total(e.target.value, 1)
        }
    }

    const deleteRow = (e) => {
        list.splice(e.target.id, 1);
        setlist([...list]);
        if (list.length === 0) {
            setdisplay(false);
        }
    }

    const preventMinus = (e) => {
        
        if (e.code === 'Minus' || e.code === 'Equal') {
            e.preventDefault();
        }
    }

    return (

        <Fragment>
            <Table btnClick={btnClick} />
            {
                formdisplay ?
                    <div className="form_conatainer">
                        <form id="form">
                            <select onChange={handlechange} >
                                <option>Select product</option >
                                <option>{options[0]}</option>
                                <option>{options[1]}</option>
                                <option>{options[2]}</option>
                            </select >
                            <input type="number" min="1" id="quantity" placeholder="Enter Quantity" onChange={handlechange} onKeyPress={preventMinus} />
                            <input type="number" disabled value={price} />
                            <input type="number" disabled value={total} />
                            <button id="addbtn" onClick={addData}>&#43;</button>
                            {
                            list.length !== 0 ? <button id="submit" onClick={storeData} >Submit</button> : null
                            }
                        </form>
                    </div> : null
            }

            {
                display ?
                    <div className="table_data">
                        <table>
                            <thead>
                                <tr>
                                    <th className="th">Product</th>
                                    <th className="th">Quantity</th>
                                    <th className="th">Price</th>
                                    <th className="th">Total</th>
                                    <th className="th_btn"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((ele, index) => (
                                        <tr key={index} className={index}>
                                            <td className="td">{ele.pro}</td>
                                            <td className="td">{ele.qua}</td>
                                            <td className="td">{ele.pri}</td>
                                            <td className="td">{ele.tot}</td>
                                            <td className="delete"><button id={index} onClick={deleteRow}>&minus;</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    : null
            }
            <ToastContainer />
        </Fragment>
    );
}

export default Form

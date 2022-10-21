import React, { Fragment } from "react";

function Card({arr}) {
    return (
        <Fragment>
            <div className="card_container">
                <div className="card_body">
                    <div><h3>Product : <i>{arr.pro}</i></h3></div>
                    <div><h3>Quantity : <i>{arr.qua}</i></h3></div>
                    <div><h3>price : <i>{arr.pri}</i></h3></div>
                    <div><h3>Total : <i>{arr.tot}</i></h3></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Card
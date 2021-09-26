import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalSingerAdded = 0;
    let totalNetWorth = 0;
    for (const singer of cart) {
        if (!singer.quantity) {
            singer.quantity = 1;
        }
        totalNetWorth = totalNetWorth + singer.netWorth * singer.quantity;
        totalSingerAdded = totalSingerAdded + singer.quantity;
    }

    return (
        <div className="border border-info rounded bg-dark text-info w-100 cart-div py-2 px-2">
            <h6>Singers Added: {totalSingerAdded}</h6>
            {/* <img src={img} alt=""/> */}
            {/* <h5>{singerName}</h5> */}
            <h6>Total Net-Worth: {totalNetWorth}</h6>
            <div className="text-center">
                <button className="btn btn-outline-info my-2">Show More</button>
            </div>
        </div>
    );
};

export default Cart;
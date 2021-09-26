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

    const userIcon = <i className="fas fa-user"></i>;
    // const exists = singer.id;
    // let shopping_cart = {};
    // if (!exist) {
    //     // cart.singer[id] = 1;
    // } else {
        
    // }

    return (
        <div className="border border-success rounded bg-light text-success w-100 cart-div py-2 px-2 shadow-lg">
            <h5>{userIcon} Singers Added: {totalSingerAdded}</h5>
            {
                
                cart.map(singer => (
                    <div className=" justify-content-between bg-light d-flex  my-1">
                        <div className="d-flex ">
                            <img src={singer.img} alt=""/>
                            <h6 className="ps-1 pt-1">{singer.name}</h6>
                        </div>
                        <div>
                            <i className="fas fa-trash btn-outline-danger"></i>
                        </div>
                    </div>
                ))
            }
            <h5>Total Net-Worth: {totalNetWorth}</h5>
            <div className="text-center">
                <button className="btn btn-outline-success my-2">Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;
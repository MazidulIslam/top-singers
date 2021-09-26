import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers';
import './Networth.css'

const Networth = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, []);

    const handleAddToCart = (singer) => {
        const newCart = [...cart, singer];
        setCart(newCart);
    };
    return (
        <>
            <div className="w-75 mx-auto d-flex mt-3">
                <div className="row row-cols-3 row-cols-md-3 g-3 w-75">
                    {
                        singers.map(singer => <Singers
                        key={singer.id}
                            singer={singer}
                            handleAddToCart={handleAddToCart}
                        ></Singers>)
                    }
                </div>
                <div className="w-25 cart-container ms-3">
                    <Cart
                        cart={cart}
                        
                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default Networth;
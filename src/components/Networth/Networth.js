import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers';
import './Networth.css'

const Networth = () => {
    const [singers, setSingers] = useState([]);

    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, []);

    const handleAddToCart = (singer) => {
        console.log('clicked')
    };
    return (
        <>
            {/* <div>
                <Header></Header>
            </div> */}
            <div className="w-75 mx-auto d-flex mt-3">
                <div className="row row-cols-3 row-cols-md-3 g-4 w-75">
                    {
                        singers.map(singer => <Singers
                        key={singer.id}
                            singer={singer}
                            handleAddToCart={handleAddToCart}
                        ></Singers>)
                    }
                </div>
                <div className="cart-container ms-3">
                    <Cart></Cart>
                </div>
            </div>
        </>
    );
};

export default Networth;
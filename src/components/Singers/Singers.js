import React from 'react';
import './Singers.css';

const Singers = (props) => {
    const { name, country, genre, img, netWorth,born} = props.singer;
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 grid g-4">
                <div className="col">
                    {/* Single Singers Container */}
                    <div className="card h-100 singer-container">
                        <img src={img} className="card-img-top rounded-circle mx-auto my-3" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title">Name: { name}</h4>
                            <h6 className="card-title">Country: { country}</h6>
                            <h6 className="card-title">Genre: { genre}</h6>
                            <h6 className="card-title">Born: { born}</h6>
                            <h6 className="card-title">Net Worth: ${netWorth} million</h6>
                            <button className="bg-dark text-info p-1 m-2 px-3 fw-bold">Add to Cart</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            
    );
};

export default Singers;
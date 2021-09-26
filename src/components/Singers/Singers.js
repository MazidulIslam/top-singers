import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Singers.css';

const Singers = (props) => {
    const { name, country, genre, img, netWorth,born} = props.singer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}/>
    return (
        <div className="">
            <div className="col">
            <div className="card h-100 bg-light bg-opacity-75 shadow-lg singer-container">
                    <img src={img} className="card-img-top rounded-circle mx-auto mt-3" alt="..." />
                    
                <div className="card-body body-height">
                    <h4 className="card-title">{ name}</h4>
                    <h6 className="card-title">Country: { country}</h6>        
                    <h6 className="card-title">Genre: { genre}</h6>        
                    <h6 className="card-title">Born: { born}</h6>
                    <h6 className="card-title">Net Worth: ${netWorth} million</h6>                        
                </div>                
                <div className="card-footer text-center bg-dark">
                    <div>
                        <button onClick={() => props.handleAddToCart(props.singer)} type="button" className="btn btn-outline-success mx-auto p-1 m-2 px-3 fw-bold">{cartIcon} Add to Cart</button>
                    </div>
                    <div className="card-footer text-center bg-dark d-flex  justify-content-between">
                        <button className="btn btn-outline-success mx-auto fw-bold"><i className="fab fa-facebook"></i></button>
                        <button className="btn btn-outline-success mx-auto fw-bold "><i className="fab fa-github"></i></button>
                    </div> 
                </div>                               
            </div>
        </div>
        </div>
            
    );
};

export default Singers;
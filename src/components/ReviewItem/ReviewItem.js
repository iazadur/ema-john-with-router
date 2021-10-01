import React from 'react';

const ReviewItem = ({ product, handleRemove }) => {
    const { name, price, quantity, img, key } = product
    return (
        <div className="product">
            <div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;
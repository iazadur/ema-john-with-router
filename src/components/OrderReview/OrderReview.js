import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteFromDb } from '../../utilities/fakedb'
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const history = useHistory()
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        deleteFromDb(key)
    }
    const handleOrder = () => {
        history.push('/order')
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    />)
                }
            </div>
            <div className="cart-container">

                <Cart cart={cart}>
                    <button onClick={handleOrder} className="btn-regular"> Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;
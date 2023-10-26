


export const CartWidget = () =>{
    return (
        <div className="cart-container">
            <div>
            <div>Items in cart:</div>
            <div>Total: 0 $</div>
            <button onClick={() => console.log(cart)}>Checkout</button>
            </div>
        </div>
        );
}
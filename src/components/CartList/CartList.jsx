import CartItem from "../CartItem/CartItem"
import { useCartContext } from "../../context/CartContext"

const CartList = () => {

    const {cartList} = useCartContext() //Import state (array) from cart context
    
    return (
        <>
            {cartList.map( item => <CartItem key={item.id} item={item}/>)}
        </>
    )}

export default CartList
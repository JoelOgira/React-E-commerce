import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';


const CartItem = ({ item, removeFromCart, addToCart, decreaseAmount }) => {
    const { id, title, image, price, amount } = item;

    return (
        <div className="flex space-x-4 py-2 border-b border-gray-200 w-full font-light text-gray-500 lg:px-6">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                <Link to={`/product/${id}`}>
                    <img className="max-w-[80px]" src={image} alt="nice images" />
                </Link>
                <div className="w-full flex flex-col">
                    <div className="flex justify-between mb-2">
                        <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] hover:underline text-gray-800">
                            {title}
                        </Link>
                        <div onClick={() => removeFromCart(id) } className="text-xl cursor-pointer">
                            <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                        </div>
                    </div>
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-gray-800 font-medium">
                            <div onClick={() => decreaseAmount(item, id)} className="flex-1 flex justify-center items-center cursor-pointer">
                                <IoMdRemove />
                            </div>
                            <div className="flex justify-center items-center h-full px-2">{amount}</div>
                            <div onClick={() => addToCart(item, id)} className="flex-1 flex justify-center items-center cursor-pointer">
                                <IoMdAdd />
                            </div>
                        </div>

                        <div className="flex flex-1 items-center justify-around">$ {price}</div>
                        
                        <div className="flex flex-1 items-center justify-end font-medium text-gray-800">
                            {`$ ${parseFloat(price * amount).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
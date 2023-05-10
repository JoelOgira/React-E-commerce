import { useContext } from 'react'
import { Link } from "react-router-dom";
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from "./CartItem";
import SidebarContext from "../contexts/SidebarContext";
import CartContext from '../contexts/CartContext';

const Sidebar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, removeFromCart, addToCart, clearCart, decreaseAmount } = useContext(CartContext);

    return (
        <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35dvw] xl:max-w-[30dvw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                    <IoMdArrowForward className='text-2xl' />
                </div>
            </div>
            <div>
                {(cart || [])?.map((item =>
                    <CartItem
                        item={item}
                        removeFromCart={removeFromCart}
                        addToCart={addToCart}
                        decreaseAmount={decreaseAmount}
                        key={item?.id}
                    />
                ))}
            </div>
            <div className='flex flex-col gap-y-3 py-4 mt-4'>
                <div className='flex w-full justify-between items-center'>
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:$ 1000</span>
                    </div>
                    <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center'>
                        <FiTrash2 className='text-xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
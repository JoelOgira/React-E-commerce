import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';
import Items from '../Components/Items';

const Product = () => {

    const { searchResults:products, isLoading, error } = useContext(ProductContext);

    const filteredProducts = products.filter((product) => (product?.category === "men's clothing") || (product?.category === "women's clothing"))

    return (
        <div>
            {isLoading && <p className='container mx-auto'>Your Products Loading... </p>}
            {!isLoading && error && <p className='container mx-auto'>There was an Error: {error.message}</p>}
            {!isLoading && !error && 
                <section className='py-16'>
                    <div className='container mx-auto'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                            {(filteredProducts || [])?.map((product) => 
                               <Items product={product} key={product?.id} /> 
                            )}
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default Product;  
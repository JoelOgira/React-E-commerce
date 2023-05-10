import { useState, useEffect, createContext } from "react";
import useAxiosFetch from "../Hooks/useAxiosFetch";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { data, isLoading, error } = useAxiosFetch('https://fakestoreapi.com/products');

    useEffect(() => {
        setProducts(data)
    }, [data]);

    useEffect(() => {
        const filteredResults = products.filter((product) => (product.title).toLowerCase().includes(search.toLowerCase()));
        setSearchResults(filteredResults);
    }, [products, search]);

    return (
        <ProductContext.Provider value={{
            products, setProducts, searchResults, isLoading, error, search, setSearch, data
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;





















// import { createContext } from "react";
// import { useQuery } from "@tanstack/react-query";
// import * as api from '../api/productsApi';

// const ProductContext = createContext({});

// export const ProductProvider = ({ children }) => {
//     const { data:products, isLoading, isError, error } = useQuery({
//         queryKey: ['products'],
//         queryFn: api.getProducts
//     })

//     console.log(products)

//     return (
//         <ProductContext.Provider value={{
//             products, isLoading, isError, error
//         }}>
//             {children}
//         </ProductContext.Provider>
//     )
// }

// export default ProductContext;
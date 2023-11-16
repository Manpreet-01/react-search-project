import { useSelector } from 'react-redux';
import Product from './Product';


export default function ProductList(){
  const { products, filteredProducts } = useSelector((state) => state.productListReducer);
  
  const resultedProducts = filteredProducts;
  // const resultedProducts = filteredProducts.length === 0 ? products : filteredProducts;
  

  return  (
    <>
      {resultedProducts && resultedProducts.map(obj => (
        <Product key={obj.id} {...obj} />
      ))}
    </>
  );
}
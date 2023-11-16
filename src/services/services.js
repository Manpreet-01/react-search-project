import {
  setProductList,
  setCategories,
  setFiltersOnCategories
} from '../features/products/productListSlice';



export const fetchProducts = (dispatch) => {

  fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(categories => {
      dispatch(setCategories(categories));
    }
  )
  
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
      dispatch(setProductList(products));
    }
  );
  
  
};
import listOrdersSlice from "./ListOrdersSlice";
import reducerLocaltionSlice from "./LocaltionSlice";
import reducerProductsSlice from "./ProductsSlice";
import UserSlice from "./UserSlice";

export const rootReducer = {
  user : UserSlice,
  products: reducerProductsSlice,
  movieVenue : reducerLocaltionSlice,
  listOrders : listOrdersSlice,
}
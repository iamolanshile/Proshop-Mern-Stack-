import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";
<<<<<<< HEAD
import authSliceReducer from "./slices/authSlice";
=======
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
<<<<<<< HEAD
    auth: authSliceReducer,


=======
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;

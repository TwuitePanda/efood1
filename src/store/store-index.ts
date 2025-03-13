import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from '../store/reducers/cart'

//função principal de gerenciamento dos reducers
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

//Exportações
export type RootReducer = ReturnType<typeof store.getState>

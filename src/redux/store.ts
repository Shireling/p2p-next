import { configureStore } from "@reduxjs/toolkit"
import { useSelector, TypedUseSelectorHook } from "react-redux"
import { paymentsApi } from "./queries/payments-queries"
import authReducer from './slices/auth-slice'
import modalsReducer from './slices/modals-slice'

export const store = configureStore({
  reducer: {
    authReducer,
    modalsReducer,
    [paymentsApi.reducerPath]: paymentsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paymentsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: ModalsState
}

type ModalsState = {
  confirmationModal: boolean
}

const initialState = {
  value: {
    confirmationModal: false
  } as ModalsState
} as InitialState

export const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showConfirmationModal: (state, action: PayloadAction<boolean>) => {
      return {
        value: {
          confirmationModal: action.payload
        }
      }
    }
  }
})

export const {showConfirmationModal} = modals.actions
export default modals.reducer

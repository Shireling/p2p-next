import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: SetupState
}

type SetupState = {
  step: string
}

const initialState = {
  value: {
    step: '1'
  } as SetupState
} as InitialState

export const setupFlow = createSlice({
  name: 'setupFlow',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<string>) => {
      return {
        value: {
          step: action.payload
        }
      }
    }
  }
})

export const {setStep} = setupFlow.actions
export default setupFlow.reducer

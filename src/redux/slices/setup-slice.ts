import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: SetupState
}

type SetupState = {
  step: string
  data?: SetupData
}

type SetupData = {
  firstName: string
  lastName: string
  addressLineOne: string
  addressLineTwo: string | undefined
  city: string
  stateProv: string
  zip: string
  phone: string
}

const initialState = {
  value: {
    step: '1',
    data: {
      firstName: '',
      lastName: '',
      addressLineOne: '',
      addressLineTwo: '',
      city: '',
      stateProv: '',
      zip: '',
      phone: ''
    }
  } as SetupState
} as InitialState

export const setupFlow = createSlice({
  name: 'setupFlow',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<string>) => {
      return {
        value: {
          step: action.payload,
          data: state.value.data
        }
      }
    },
    setData: (state, action: PayloadAction<SetupData>) => {
      return {
        value: {
          step: state.value.step,
          data: action.payload
        }
      }
    }
  }
})

export const {setStep, setData} = setupFlow.actions
export default setupFlow.reducer

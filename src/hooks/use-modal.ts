import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { useAppSelector } from "@/redux/store"
import { showConfirmationModal } from '@/redux/slices/modals-slice'

export const useModal = () => {
  const dispatch = useDispatch<AppDispatch>()

  const confirmationModal = {
    show: useAppSelector((state) => state.modalsReducer.value.confirmationModal),
    set: (payload: boolean) => dispatch(showConfirmationModal(payload))
  }

  return (
    confirmationModal
  )
}

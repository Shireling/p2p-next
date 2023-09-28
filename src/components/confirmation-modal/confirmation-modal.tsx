"use-client"

import './confirmation-modal.css'
import { useRef, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useModal } from '@/hooks/use-modal'
import Button from '../form-elements/button/button'

interface Props {
  prompt: string
  confirmation: string
  confirmButton: string
  rejectButton: string
  handleAccept: () => void
}

const ConfirmationModal = ({
  prompt,
  confirmation,
  confirmButton,
  rejectButton,
  handleAccept
}: Props) => {
  const bodyRef = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)
  const confirmationModal = useModal()

  useEffect(() => {
    bodyRef.current = document.querySelector<HTMLBodyElement>('body')
    setMounted(true)
  }, [])

  return (mounted && bodyRef.current) && createPortal(
    <div className="modal-screen">
      <div className="modal-wrap">
        <div className="modal-inner">
          <h2>{prompt}</h2>
          <p>{confirmation}</p>
          <div className="modal-button-wrap">
            <Button handleClick={() => confirmationModal.set(false)} hollow>{rejectButton}</Button>
            <Button handleClick={handleAccept}>{confirmButton}</Button>
          </div>
        </div>
      </div>
    </div>,
    bodyRef.current
  )
}

export default ConfirmationModal

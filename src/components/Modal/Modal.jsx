import { useState } from "react"
import { Button, Container } from "../"
import "./Modal.css"

export const Modal = ({ children, size, isOpenByDefault, handleOpen }) => {
  const [open, setOpen] = useState(isOpenByDefault || false)

  const handleClose = () => setOpen(false)

  return (
    <>
      {open && (
        <div className='modal-container'>
          <Container size={size}>
            {children}
            <div class='modal-button'>
              <Button onClick={handleClose}>Закрыть</Button>
            </div>
          </Container>
        </div>
      )}
    </>
  )
}

export default Modal

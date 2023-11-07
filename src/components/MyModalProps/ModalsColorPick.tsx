import { useState } from "react"
import { Button, Form, Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";

type MyModalProps={
  show:boolean;
  onHide:()=>void;
  handleColorChange:(color:string)=>void;
}

const ModalsColorPick = ({show,onHide,handleColorChange}:MyModalProps) => {

  const[selectedColor,setSelectedColor]=useState("#FFF")
  const handleColorPickerChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSelectedColor(event.target.value);
  }
  const handleAcceptClick=()=>{
    handleColorChange(selectedColor);
    onHide;
  }

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
        <ModalHeader closeButton>
            <ModalTitle>Cambiar Color</ModalTitle>
        </ModalHeader>

        <ModalBody>
            <Form.Label htmlFor="exampleColorInput">Elije un Color</Form.Label>
            <Form.Control type="color" id="exampleColorInput" defaultValue="#FFF" title="Elije tu Color" onChange={handleColorPickerChange}/>
        </ModalBody>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cancelar</Button>
          <Button variant="primary" onClick={handleAcceptClick}>Aceptar</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalsColorPick
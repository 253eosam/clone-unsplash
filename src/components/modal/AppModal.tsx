import useModal from "@/hooks/useModal"
import styled from "styled-components"

interface Props {
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  background-color: #0009;
  cursor: zoom-out;
  
`

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 300px;
  min-height: 300px;
  background: #fff;
  border-radius: 5%;
  cursor: zoom-in;
`

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`

const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 5px;

  border: 0;
  background: 100%;
  padding: 8px 10px;
`

const Content = styled.div`
  position: absolute;
  top: 18px;
  left: 40px;
  right: 15px;

  min-width: 100%;
  min-height: 100%;
`

const AppModal: React.FC<Props> = () => {

  const { isOpenModal, modalComponent , closeModal } = useModal()

  return (
    isOpenModal && 
    <Wrap>
      <Modal>
        <Container>
          <Button onClick={() => closeModal()}>X</Button>
          <Content>
          </Content>
        </Container>
      </Modal>
    </Wrap>
  )
}

export default AppModal

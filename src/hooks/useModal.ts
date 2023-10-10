import { modalState } from "@/atoms"
import { useRecoilState } from "recoil"

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState)
  const openModal = (component: React.Component) => { setModal(() => ({ isModal: true, component })) }
  const closeModal = () => { setModal(() => ({ isModal: false, component: null })) }

  return {
    isOpenModal: modal.isModal,
    modalComponent: modal.component,
    openModal,
    closeModal
  }
}

export default useModal
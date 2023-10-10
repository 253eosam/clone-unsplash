import { IPictureItem } from "@/models/Picture";
import { atom } from "recoil";

export const modalState = atom<{ isModal: boolean, component: React.Component | null }>({
  key: 'modal',
  default: { isModal: false, component: null }
})

export const picturesState = atom<IPictureItem[]>({
  key: 'pictures',
  default: [], 
});
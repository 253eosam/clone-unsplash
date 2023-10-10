import { IPictureItem } from "@/models/Picture";
import { atom } from "recoil";

export const picturesState = atom<IPictureItem[]>({
  key: 'pictures',
  default: [], 
});
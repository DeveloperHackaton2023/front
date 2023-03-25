import { House } from "./house";

export interface Osi {
    id: number;
    title: string;
    info: string;
    houses: House[];
}
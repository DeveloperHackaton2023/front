import { Client } from "./client";
import { ticket } from "./ticket";

export interface House {
    id: number;

    address: string;

    flatNumber: string;

    info: string;

    tickets: ticket[];

    user: Client;
}
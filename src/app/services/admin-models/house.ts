import { Client } from "./client";
import { Ticket } from "./ticket";

export interface House {
    id: number;

    address: string;

    flatNumber: string;

    info: string;

    tickets: Ticket[];

    user: Client;
}
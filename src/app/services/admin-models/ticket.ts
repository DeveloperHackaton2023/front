import { TicketStatus } from "./status";

export interface ticket {
    id: number;
    Subject: string;
    Description: string;
    Created: Date;
    Statuses: TicketStatus[];
    AdminResponse: string;
}
import { TicketStatus } from "./status";

export interface Ticket {
    id: number;
    subject: string;
    description: string;
    created: Date;
    statuses: TicketStatus[];
    adminResponse: string;
}
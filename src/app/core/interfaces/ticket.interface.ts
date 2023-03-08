export interface Ticket {
    id: number;
    assignedBy: string;
    group: string;
    assignedTo: string | Array<string>;
    project: string;
    vertical?: string;
    subVertical?: string;
    ticketStatus?: string
    from?: string;
    to?: string;
    customerNumber: string;
}
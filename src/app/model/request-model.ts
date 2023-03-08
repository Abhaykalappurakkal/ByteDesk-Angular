export class RequestModel {
  requestId!: string;
  requestDate!: Date;
  userId!: string;
  requestedDepartment!: string;
  ticketSummary!: string;
  ticketDescription!: string;
  resolution!: string;
  resolvedDate!: string;
  ticketStatus!: string;
  userRequests!: [];
  totalItems!: number;
}

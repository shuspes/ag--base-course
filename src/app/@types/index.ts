export class Email {
  id: number;
  sender: string;
  date: string;
  subject: string;
  content: string;
  source: string
};

export interface EmailListFilter {
  filterValue: string;
  source: string;
};
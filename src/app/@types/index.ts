export class Email {
  id: number;
  sender: string;
  date: string;
  subject: string;
  content: string;
  source: string
};

export class Contact {
  id: number;
  name: string;
  lastName: string;
};

export interface EmailListFilter {
  filterValue: string;
  source: string;
};
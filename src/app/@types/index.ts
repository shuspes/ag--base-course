export class Email {
  id: number;
  sender: string;
  date: string;
  subject: string;
  content: string;
  source: string
};

export class EmailListFilter {
  filterValue: string;
  source: string;
};
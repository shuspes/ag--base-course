import { Email, Contact } from "Types";

export const EMAILS: Email[] = [
  {
    id: 1,
    sender: "some person",
    date: "21/02/2018",
    subject: "Spring",
    content: "Hello, Harry! How are you?",
    source: "inbox"
  },
  {
    id: 2,
    sender: "another person",
    date: "12/01/2018",
    subject: "Issue",
    content: "We have some issues with Email project.",
    source: "inbox"    
  },
  {
    id: 3,
    sender: "Harry",
    date: "6/03/2018",
    subject: "Congratulations",
    content: "Happy birthday to you, dear Jess!",
    source: "outbox"    
  }
];

export const CONTACTS: Contact[] = [
  {
    id: 1,
    name: "Den",
    lastName: "Pupkin"
  },
  {
    id: 2,
    name: "Sara",
    lastName: "Abramovna"
  }
]
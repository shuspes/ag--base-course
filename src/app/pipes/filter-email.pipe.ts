import { Pipe, PipeTransform } from '@angular/core';
import { Email } from 'Types';

@Pipe({
  name: 'filterEmail'
})
export class FilterEmailPipe implements PipeTransform {

  transform(emails: Array<Email>, filterValue: string): Array<Email> {
    const filterString = filterValue.toLowerCase();
    const result = emails.filter(it => it.subject.toLowerCase().includes(filterString)
            || it.sender.toLowerCase().includes(filterString));    
    return result;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Email, EmailListFilter } from 'Types';

@Pipe({
  name: 'filterEmail'
})
export class FilterEmailPipe implements PipeTransform {

  transform(emails: Array<Email>, filterObject: EmailListFilter): Array<Email> {
    const { filterValue = "" } = filterObject;
    const filterString = filterValue.toLowerCase();
    const result = emails.filter(it => it.subject.toLowerCase().includes(filterString)
            || it.sender.toLowerCase().includes(filterString));    
    return result;
  }
}

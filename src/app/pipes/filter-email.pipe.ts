import { Pipe, PipeTransform } from '@angular/core';
import { Email, EmailListFilter } from 'Types';

@Pipe({
  name: 'filterEmail'
})
export class FilterEmailPipe implements PipeTransform {

  transform(emails: Array<Email>, filterObject: EmailListFilter): Array<Email> {
    const { filterValue = "", source = "" } = filterObject;
    const filterString = filterValue.toLowerCase();
    const result = emails.filter(it => source.length === 0 || it.source === source)
                    .filter(it => it.subject.toLowerCase().includes(filterString)
                                    || it.sender.toLowerCase().includes(filterString));    
    return result;
  }
}

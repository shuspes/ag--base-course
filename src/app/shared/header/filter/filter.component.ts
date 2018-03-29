import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filterValue: string;
  @Output() onFilterChange = new EventEmitter<string>();  

  constructor() { }

  ngOnInit() {
  }

  changeFilterValue(value) {
    this.onFilterChange.emit(value);
  }
}

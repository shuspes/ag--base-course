import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() filterValue: string;
  @Output() onFilterChange = new EventEmitter<string>();  

  constructor() { }

  ngOnInit() {
  }

  changeFilter(value) {
    this.onFilterChange.emit(value);    
  }
}

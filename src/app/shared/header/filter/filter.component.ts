import { Component, OnInit } from '@angular/core';
import { AppService } from "App/services/app.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  protected filterValue: string = "";

  constructor(private appService: AppService) { }

  ngOnInit() {
    console.log("ngOnInit", this.appService.getFilter());
    this.filterValue = this.appService.getFilter();
  }

  changeFilterValue(value: string): void {
    this.appService.setFilter(value);
  }
}

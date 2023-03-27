import { TimelineService } from './../../../services/timeline.service';
import { eOrderType, iMonth } from './../../../interface/interfaces';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'por-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
  @Input() month!: iMonth;

  constructor() { }

  ngOnInit(): void {
  }


}

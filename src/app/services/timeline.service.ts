import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Month } from '../classes/month.class';
import { iMonth } from '../interface/interfaces';
import { MONTH_NAMES } from './readonly.data';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  
  buildOrder$: BehaviorSubject<iMonth[]> = new BehaviorSubject([] as iMonth[]);
  get buildOrder():iMonth[] {
    return this.buildOrder$.getValue();
  }
  set buildOrder(value: iMonth[]) {
    this.buildOrder$.next(value);
  }

  constructor() { 
     // Generate an array of Month objects for a whole year
    for (let i = 0; i < 12; i++) {
      const month: Month = new Month(MONTH_NAMES[i])
      month.number = i + 1;
      month.year = 800;
      if(i < 2) {
        month.activated = false;
      }
      this.buildOrder.push(month);
    }
  }
  
  addMonth(): void {
     // Get the last month from the array
     const lastMonth = this.buildOrder[this.buildOrder.length - 1];

     // Calculate the next month's index and name
     const nextMonthIndex = (lastMonth.number % 12) + 1;
     const nextMonthName = MONTH_NAMES[nextMonthIndex - 1];
     const nextYear = 800 + Math.floor(this.buildOrder.length / 12);
 
     // Create the next month object
     const nextMonth: Month = new Month(nextMonthName);
     nextMonth.number = nextMonthIndex;
     nextMonth.year = nextYear;
 
     // Add the next month to the array
    this.buildOrder.push(nextMonth);
  }
}

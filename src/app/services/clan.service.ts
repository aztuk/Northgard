import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  clan$: BehaviorSubject<string> = new BehaviorSubject('Wolf');
  get clan():string {
    return this.clan$.getValue();
  }
  set clan(value: string) {
    this.clan$.next(value);
  }

  constructor() { }
}

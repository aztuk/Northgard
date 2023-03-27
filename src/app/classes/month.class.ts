import { eOrderType, iMonth, iOrder } from "../interface/interfaces";

export class Month implements iMonth {
  name: string;
  number: number = 0;
  year: number = 0;
  activated: boolean = true;
  orders: iOrder[] = [];
  note: string = '';

  constructor(name: string) {
    this.name = name;
  }
}

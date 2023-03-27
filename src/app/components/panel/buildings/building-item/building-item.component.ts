import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'por-building-item',
  templateUrl: './building-item.component.html',
  styleUrls: ['./building-item.component.scss']
})
export class BuildingItemComponent implements OnInit {
  
@Input() building: any;
@Input() size: string = 'small';


@HostBinding('class')
get hostClasses(): string {
  return this.size;
}
  constructor() { }

  ngOnInit(): void {
    if(this.size !=='') {
      this.size = '_'+this.size;
    }
  }

}

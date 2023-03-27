import { DroppedComponentComponent } from './../components/timeline/dropped-component/dropped-component.component';
import { BuildingItemComponent } from '../components/panel/buildings/building-item/building-item.component';
import { ComponentFactoryService } from './component-factory.service';
import { eOrderType, iOrder } from './../interface/interfaces';
import { ElementRef, Injectable, Component, ViewContainerRef, ComponentRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  draggedData$: BehaviorSubject<any> = new BehaviorSubject(null);
  get draggedData():any {
    return this.draggedData$.getValue();
  }
  set draggedData(value: any) {
    this.draggedData$.next(value);
  }

  snappingValue: number = 20;


  constructor(private cfx: ComponentFactoryService) { }

  moveGhost(event: DragEvent, ghost: ElementRef) {
    ghost.nativeElement.style.transform = `translate(${this.getSnappedPosition(event)}px, 0px)`;
    ghost.nativeElement.classList.remove('hide');
  }


  showGhost(event: DragEvent, ghost: ElementRef) {
    (event.currentTarget as HTMLElement).append(ghost.nativeElement);
    ghost.nativeElement.classList.remove('hide');
  }

  hideGhost(ghost: ElementRef) {
    ghost.nativeElement.classList.add('hide');
  }

  drop(event: DragEvent, component: any, data: iOrder) {
    component.location.nativeElement.style.transform = `translate(${this.getSnappedPosition(event)}px, 0px)`;
    component.instance.entity = data;
  }

  
  private getSnappedPosition(event: DragEvent) {
    const containerRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    let x = event.clientX - containerRect.left;

    if(x < 20) {
      x = 20;
    }

    return Math.round(x / this.snappingValue) * this.snappingValue - this.snappingValue;
  }

}

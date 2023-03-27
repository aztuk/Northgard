import { DroppedComponentComponent } from './dropped-component/dropped-component.component';
import { DragDropService } from './../../services/drag-drop.service';
import { BuildingItemComponent } from '../panel/buildings/building-item/building-item.component';
import { ComponentFactoryService } from './../../services/component-factory.service';
import { TimelineService } from './../../services/timeline.service';
import { Component, HostBinding, Input, OnInit, ViewChild, ElementRef, Renderer2, ViewContainerRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { iMonth } from 'src/app/interface/interfaces';
import * as $ from 'jquery';

@Component({
  selector: 'por-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @ViewChild('dropzoneBuilding', { read: ViewContainerRef }) dropzoneBuildingRef!: ViewContainerRef;
  @ViewChild('ghostContainerRef', { read: ViewContainerRef }) ghostContainerRef!: ViewContainerRef;
  @ViewChild('ghost') ghost!: ElementRef;


  buildOrder: iMonth[] = [];
  buildOrderSubscription: Subscription;

  constructor(private timelineService: TimelineService, private cfx: ComponentFactoryService, private dragService: DragDropService) {
    this.buildOrderSubscription = this.timelineService.buildOrder$.subscribe(v => this.buildOrder = v);
   }

  ngOnInit(): void {
    $(".wrapper").on("wheel", function(event) {
      event.preventDefault();
      var wheelEvent = event.originalEvent as unknown as WheelEvent; // Cast event to WheelEvent
      var scrollAmount = wheelEvent.deltaY;
      $(this).scrollLeft($(this).scrollLeft()! + scrollAmount);
    });
  }

  getValidMonth() {
    return this.buildOrder.filter((m) => m.activated);
  }

  addMonth() {
    this.timelineService.addMonth();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if(this.dragService.draggedData !== null) {
      this.dragService.moveGhost(event, this.ghost);
    }
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    if(this.dragService.draggedData !== null) {
      this.dragService.showGhost(event, this.ghost);
    }
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    if(this.dragService.draggedData !== null) {
      this.dragService.hideGhost(this.ghost);
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();

    if(this.dragService.draggedData !== null) {
      // create a new element and set its position
      const component = this.cfx.createComponent(this.dropzoneBuildingRef, DroppedComponentComponent, false);
  
      this.dragService.drop(event, component, this.dragService.draggedData);
      this.dragService.hideGhost(this.ghost);
      this.dragService.draggedData = null;
    }
  }

}

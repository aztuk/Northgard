import { DragDropService } from './../../../services/drag-drop.service';
import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { eOrderType, iOrder } from 'src/app/interface/interfaces';

@Component({
  selector: 'por-dropped-component',
  templateUrl: './dropped-component.component.html',
  styleUrls: ['./dropped-component.component.scss']
})
export class DroppedComponentComponent implements OnInit {

  // Handle the option frame display
  showOptions: boolean = false;
  @HostListener('click') onMouseClick() {
    this.showOptions = true;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.hovered = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovered = false;
  }

  @Input() entity!: iOrder;


  note: string = '';
  noteToggle: boolean = false;
  hovered: boolean = false;

  upgraded: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private dragService: DragDropService) { }

  ngOnInit(): void {
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showOptions = false;
      this.noteToggle = false;
    }
  }

  openNote() {
    this.noteToggle = true;
  }
  
  destroy() { 
    this.renderer.removeChild(this.elementRef.nativeElement.parentNode, this.elementRef.nativeElement);
  }
  upgrade() { 
    this.upgraded = !this.upgraded 
  }

  onDragStart($event: DragEvent, entity: iOrder) {
    this.dragService.draggedData = entity;
  }

}

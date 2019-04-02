import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { CompDirective } from './../common/comp.directive';
import { CompItem } from './../common/comp-item';
import { DataComp } from './../common/DataComp';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.css']
})
export class CompListComponent implements OnInit {
  //cmpList = ["Header", "Table", "Footer", "Time", "Dropdown", "Spinner", "Textbox", "Button", "Divider", "Mask"];
  @Input() compList: CompItem[];
  currentIndex = 0;
  @ViewChild(CompDirective) cmpDirctv: CompDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let compItem = this.compList[this.currentIndex];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(compItem.component);
    let viewContainerRef = this.cmpDirctv.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<DataComp>componentRef.instance).data = compItem.data;
  }

  compDropped(event: CdkDragDrop<string[]>){
    this.currentIndex = event.previousIndex;
    this.loadComponent();
  }

}

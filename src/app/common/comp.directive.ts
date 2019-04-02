import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[comp-directive]',
})
export class CompDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
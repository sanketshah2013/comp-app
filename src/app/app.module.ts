import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CompDirective } from './common/comp.directive';

import { AppComponent } from './app.component';
import { CompListComponent } from './comp-list/comp-list.component';
import { HeaderComponent } from './common/header/header.component';
import { TableComponent } from './common/table/table.component';
import { FooterComponent } from './common/footer/footer.component';
import { TimeComponent } from './common/time/time.component';
import { DropdownComponent } from './common/dropdown/dropdown.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { TextboxComponent } from './common/textbox/textbox.component';
import { ButtonComponent } from './common/button/button.component';
import { DividerComponent } from './common/divider/divider.component';
import { MaskComponent } from './common/mask/mask.component';

@NgModule({
  declarations: [
    AppComponent,
    CompDirective,
    CompListComponent,
    HeaderComponent,
    TableComponent,
    FooterComponent,
    TimeComponent,
    DropdownComponent,
    SpinnerComponent,
    TextboxComponent,
    ButtonComponent,
    DividerComponent,
    MaskComponent
  ],
  entryComponents: [ 
    HeaderComponent,
    TableComponent,
    FooterComponent,
    TimeComponent,
    DropdownComponent,
    SpinnerComponent,
    TextboxComponent,
    ButtonComponent,
    DividerComponent,
    MaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

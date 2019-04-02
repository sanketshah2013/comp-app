import { Injectable } from '@angular/core';

import { HeaderComponent } from './../common/header/header.component';
import { TableComponent } from './../common/table/table.component';
import { FooterComponent } from './../common/footer/footer.component';
import { TimeComponent } from './../common/time/time.component';
import { DropdownComponent } from './../common/dropdown/dropdown.component';
import { SpinnerComponent } from './../common/spinner/spinner.component';
import { TextboxComponent } from './../common/textbox/textbox.component';
import { ButtonComponent } from './../common/button/button.component';
import { DividerComponent } from './../common/divider/divider.component';
import { MaskComponent } from './../common/mask/mask.component';
import { CompItem } from './../common/comp-item';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getCompList() {
    return [
      new CompItem(HeaderComponent, {
        name: 'Header'
      }),

      new CompItem(TableComponent, {
        name: 'Table'
      }),

      new CompItem(FooterComponent, {
        name: 'Footer'
      }),

      new CompItem(TimeComponent, {
        name: 'Time'
      }),
      new CompItem(DropdownComponent, {
        name: 'Dropdown'
      }),

      new CompItem(SpinnerComponent, {
        name: 'Spinner'
      }),

      new CompItem(TextboxComponent, {
        name: 'Textbox'
      }),

      new CompItem(ButtonComponent, {
        name: 'Button'
      }),
      new CompItem(DividerComponent, {
        name: 'Divider'
      }),

      new CompItem(MaskComponent, {
        name: 'Mask'
      })
    ];
  }
}

import { Component, OnInit } from '@angular/core';

import { CommonService } from './services/common.service';
import { CompItem } from './common/comp-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'main-app';
  compList: CompItem[];

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.compList = this.commonService.getCompList();
  }
}

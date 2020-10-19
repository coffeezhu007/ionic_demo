import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danger-page',
  templateUrl: './danger-page.page.html',
  styleUrls: ['./danger-page.page.scss'],
})
export class DangerPagePage implements OnInit {

  public datalist:any = [];

  constructor() { }

  ngOnInit() {
    this.datalist.push({'name':'张三',"sex":"男","job":"software"});
  }

}

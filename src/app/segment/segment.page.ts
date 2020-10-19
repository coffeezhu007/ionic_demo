import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  public tab:string = 'enemies';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(e){
    console.log(e.detail);
    console.log(e.detail.value);
  }

}

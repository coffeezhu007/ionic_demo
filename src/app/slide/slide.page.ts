import { Component, OnInit,ViewChild  } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  // 前台页面的第一个轮播图对象
  @ViewChild("slide01") slide01;
  // 前台页面的第二个轮播图对象
  @ViewChild("slide02") slide02;

  slideOpts = {
    effect:'flip',
    autoplay:{
      delay:1000
    },
    loop:true
  }

  constructor() { }

  ngOnInit() {
  }

  // 手动干涉后，让自动再轮播
  autoplay(){
    console.log('手动干涉了')
    this.slide01.startAutoplay()
  }


  // 上一张的轮播图的事件
  slidePrev(){
    this.slide02.slidePrev();
  }

  // 下一张的轮播图的事件
  slideNext(){
    this.slide02.slideNext();
  }

  slideUpdate(){
    //请求数据完成后如果轮播图工作异常 这时调用这句话 更新轮播图
    this.slide02.slideUpdate();
  }



}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public registerInfo:any = {
    username:'',
    password:'',
    rePassword:'',
    sex:false,
    payType:"2",
    hobbyList:[
      {'value':'吃饭',isChecked:false},
      {'value':'睡觉',isChecked:false},
      {'value':'编程',isChecked:true},
    ],
    cityList:[
      '北京',
      '上海',
      '大连'
    ],
    cityValue:'大连',
    birthday:'1984/07/19 11:20'
  };

  constructor() { }

  ngOnInit() {
  }

  getInfo(){
    console.log(this.registerInfo);
  }

}

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public name = 'Arpan';
  public myId = 'testID';
  public successClass = "text-success";
  public haserror = true
  public titlestyle = {color: 'red', fontStyle: 'italic'}
  public greet = "";
  public timeN = new Date;

  public isDisable = true;
  greetUser(){
    return this.name;
  }
  ngOninit(){

  }
  timenow(){
    console.log(this.timeN)
  }

  onClick(){
    console.log("hello")
    this.greet = "Arpan Das"
  }
}

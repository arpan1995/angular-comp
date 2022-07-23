import { Component,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public uname:any = "Arpan";
  public name = 'Arpan';
  public myId = 'testID';
  public successClass = "text-success";
  public haserror = true
  public titlestyle = {color: 'red', fontStyle: 'italic'}
  public greet = "";
  public timeN = new Date;
  public displayName = false;
  public listOf = [{name: 'Arpan', surname:'Das'},
  {name: 'Mau', surname:'Das'}]

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
  value(value: any){
    alert(value)
  }

  constructor(){}
  ngOnInit(){

  }
  getNow(){
    this.displayName = true;
  }
}


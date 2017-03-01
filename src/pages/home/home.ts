import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Validators, FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //public contact: any= {name: '', email:''};
   
  public email: any= "";
  public name: any="";
  public patternEmail: string = "/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i";

  public todo: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.pattern(this.patternEmail), Validators.required]],
    });

    this.name = this.todo.controls['name'];
    this.email = this.todo.controls['email'];
  }

  validate() {
    console.log(this.todo.value)
    
  }

}

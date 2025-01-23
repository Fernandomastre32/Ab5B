import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.page.html',
  styleUrls: ['./registrate.page.scss'],
  standalone: false,
})
export class RegistratePage implements OnInit {
 email: String = '';
 nombre: String = '';
 password: String = '';
 passwordconfirm: String = '';
 numero: String = '';

  constructor(
    private navcontroller: NavController,) { }

  ngOnInit() {
  }
  registrate(form: NgForm) {
    if(form.invalid) {
      this.navcontroller.navigateBack('/home');
    }
  
   

  }


}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";

import { Storage } from '@ionic/storage';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user: User;
  registrationForm: FormGroup;

  constructor(
    private router: Router,
    private storage: Storage,
    private afAuth: AngularFireAuth
    ) { }

  ngOnInit() {
    this.user = new User();
    // this.registrationForm = new FormGroup({
    //   lastname: new FormControl(null),
    //   firstname: new FormControl(null),
    //   email: new FormControl(null),
    //   password: new FormControl(null)
    // });
  }

  async onRegister(user: User) {
    // console.log(this.user);
    // this.storage.set('user', this.user);
    // this.storage.get('user').then(user =>
    //   console.log(user));
    // this.router.navigate(['/login']);
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
}

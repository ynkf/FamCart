import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
    ) { }

  ngOnInit() {
    this.user = new User();
  }

  async login(user: User) {
    try {
      const res = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(res);
      this.router.navigate(['/list']);
    } catch (error) {
      console.error(error);
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
}

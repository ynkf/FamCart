import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  async onRegister(user: User) {
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(res);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }
}

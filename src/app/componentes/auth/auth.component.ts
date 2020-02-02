import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shared/service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formulario: FormGroup;
  email: string;
  senha: string;

  constructor(
    private service: ServiceService,
    private router: Router,
    private auth: AngularFireAuth,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    });
  }


  google() {
   if (this.auth.auth != null) {
     this.service.google();
     this.router.navigate(['']);
   } else {
     this.router.navigate(['/auth']);
   }
  }
  createEmail() {

    console.log(this.formulario.value);
    this.service.create(this.formulario.get('email').value, this.formulario.get('senha').value)
    .then(data => {
      console.log(data);
      this.router.navigate(['']);
    });
  }


}

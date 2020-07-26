import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AutenticacionService } from './../../services/autentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AutenticacionService,
    private route: Router
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      lname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  reg() {
    console.log(this.myForm.value)
    //EJEMPLO CON ERROR EN OBSERVABLE
    this.auth.register(this.myForm.value).subscribe(data => {
      //Salio todo bien
      console.log(data)

      this.route.navigate(['/login'])
    }, err => {
      //En caso de error
      alert(err.error.msg)
    })
  }
  ngOnInit(): void { }
}

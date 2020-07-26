import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../services/autentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AutenticacionService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(8)],
      ],
    });
  }
  login() {
    console.log(this.myForm.value)
    this.auth.login(this.myForm.value).subscribe(data => {
      localStorage.setItem('token', data["token"])
      this.auth.authenticate();
      this._snackBar.open("Bienvenido/a", 'Cerrar', {
        duration: 2000,
        panelClass: ['mat-primary']
      })
      //Metodo para redirigir
      this.router.navigate(['/'])
    })
  }



  ngOnInit(): void { }
}

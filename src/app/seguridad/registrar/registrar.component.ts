import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  registrarUsuario(form: NgForm) {
    console.log(form);
  }
}

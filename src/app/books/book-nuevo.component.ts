import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDatepicker } from "@angular/material/datepicker";

@Component({
  selector: 'app-book-nuevo',
  templateUrl: 'book-nuevo.component.html'
})

// 11/21/2025 US FORMAT
// 21/11/2021 LATIN FORMAT VER App.Module

export class bookNuevoComponent {
  selectAutor: string;
  @ViewChild(MatDatepicker) picker: MatDatepicker<Date>;

  guardarLibro(form: NgForm){

  }
}

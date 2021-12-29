import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro: String;
  @Output() libroClicked = new EventEmitter();

  onClicked() {
    this.libroClicked.emit();
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onMenuToggleDispatch(){
    this.menuToggle.emit();
  }

}

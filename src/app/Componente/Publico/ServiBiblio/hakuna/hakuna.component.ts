import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hakuna',
  templateUrl: './hakuna.component.html',
  styleUrls: ['./hakuna.component.css']
})
export class HakunaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar() {
    this.router.navigate(['/Servicio'])
  }

}

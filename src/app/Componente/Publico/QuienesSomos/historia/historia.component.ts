import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar() {
    this.router.navigate(['/QuienesSomos'])
  }
}

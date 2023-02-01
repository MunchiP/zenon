import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblio-movil',
  templateUrl: './biblio-movil.component.html',
  styleUrls: ['./biblio-movil.component.css']
})
export class BiblioMovilComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  regresar() {
    this.router.navigate(['/QuienesSomos'])
  }
}

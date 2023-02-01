import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  regresar() {
    this.router.navigate(['/QuienesSomos'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate(['Servicio'])
  }
}

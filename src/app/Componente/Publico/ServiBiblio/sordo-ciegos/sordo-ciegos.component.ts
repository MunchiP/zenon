import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sordo-ciegos',
  templateUrl: './sordo-ciegos.component.html',
  styleUrls: ['./sordo-ciegos.component.css']
})
export class SordoCiegosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar(){
  this.router.navigate(['Servicio'])
  }
}

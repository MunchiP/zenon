import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-inicio',
  templateUrl: './usuario-inicio.component.html',
  styleUrls: ['./usuario-inicio.component.css']
})
export class UsuarioInicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate([''])
  }

}

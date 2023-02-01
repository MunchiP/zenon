import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componente/inicio/inicio.component';
import { CatalogoComponent } from './Componente/Publico/catalogo/catalogo.component';
import { CartasComponent } from './Componente/Publico/Juegos/cartas/cartas.component';
import { JuegosComponent } from './Componente/Publico/juegos/juegos.component';
import { PuzzleComponent } from './Componente/Publico/Juegos/puzzle/puzzle.component';
import { ContactanosComponent } from './Componente/Publico/QuienesSomos/contactanos/contactanos.component';
import { HistoriaComponent } from './Componente/Publico/QuienesSomos/historia/historia.component';
import { InformacionComponent } from './Componente/Publico/QuienesSomos/informacion/informacion.component';
import { RedesSocialesComponent } from './Componente/Publico/QuienesSomos/redes-sociales/redes-sociales.component';
import { SomosComponent } from './Componente/Publico/QuienesSomos/somos/somos.component';
import { RedesComponent } from './Componente/Publico/redes/redes.component';
import { OrganizacionesComponent } from './Componente/Publico/redes/RedesAmigos/organizaciones/organizaciones.component';
import { ComunitariasComponent } from './Componente/Publico/Redes/RedesBibio/comunitarias/comunitarias.component';
import { EscolaresComponent } from './Componente/Publico/Redes/RedesBibio/escolares/escolares.component';
import { BiblioMovilComponent } from './Componente/Publico/ServiBiblio/biblio-movil/biblio-movil.component';
import { ConferenciasComponent } from './Componente/Publico/ServiBiblio/conferencias/conferencias.component';
import { HakunaComponent } from './Componente/Publico/ServiBiblio/hakuna/hakuna.component';
import { ServiciosComponent } from './Componente/Publico/ServiBiblio/servicios/servicios.component';
import { SordoCiegosComponent } from './Componente/Publico/ServiBiblio/sordo-ciegos/sordo-ciegos.component';
import { VirtualComponent } from './Componente/Publico/ServiBiblio/virtual/virtual.component';
import { InfoLibrosComponent } from './Componente/Publico/usuario/info-libros/info-libros.component';
import { InfoPersonalComponent } from './Componente/Publico/usuario/info-personal/info-personal.component';
import { LogInComponent } from './Componente/Publico/usuario/log-in/log-in.component';
import { NuevoUsuarioComponent } from './Componente/Publico/usuario/nuevo-usuario/nuevo-usuario.component';
import { UsuarioInicioComponent } from './Componente/Publico/usuario/usuario-inicio/usuario-inicio.component';


const routes: Routes = [
  {path: '' , component: InicioComponent },

  //1 Usuarios Links

  {path: 'Usuario' , component: UsuarioInicioComponent },
  {path: 'Usuario/Informacion' , component: InfoPersonalComponent },
  {path: 'Usuario/Libros' , component: InfoLibrosComponent },
  {path: 'Usuario/Nuevo' , component: NuevoUsuarioComponent },
  {path: 'Usuario/Login' , component: LogInComponent },


  //2 Catalogos Links

  {path: 'Catalogo' , component: CatalogoComponent },

  //3 Servicios Links

  {path: 'Servicio' , component: ServiciosComponent },
  {path: 'Servicio/HakunaMatata' , component: HakunaComponent },
  {path: 'Servicio/BiblioMovil' , component: BiblioMovilComponent },
  {path: 'Servicio/SordoCiegos' , component: SordoCiegosComponent },
  {path: 'Servicio/AulaVirtual' , component: VirtualComponent },
  {path: 'Servicio/Conferencias' , component: ConferenciasComponent },

  // 4 Redes Links

  {path: 'Redes' , component: RedesComponent },
  {path: 'Redes/BiblioEscoalres' , component: EscolaresComponent },
  {path: 'Redes/BiblioComunitarias' , component: ComunitariasComponent },
  {path: 'Redes/Organizaciones' , component: OrganizacionesComponent },

  // 5 Quienes Somos Links

  {path: 'QuienesSomos' , component: SomosComponent },
  {path: 'QuienesSomos/Contacto' , component: ContactanosComponent },
  {path: 'QuienesSomos/Historia' , component: HistoriaComponent },
  {path: 'QuienesSomos/Informacion' , component: InformacionComponent },
  {path: 'QuienesSomos/RedesSociales' , component: RedesSocialesComponent },

  //Juegos
  {path: 'Juegos' , component: JuegosComponent },
  {path: 'Juegos/Cartas' , component: CartasComponent },
  {path: 'Juegos/Puzzle' , component: PuzzleComponent },

  // Redireccion

  {path: '**' , redirectTo: "" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RedesComponent } from './Componente/Publico/redes/redes.component';
import { CatalogoComponent } from './Componente/Publico/catalogo/catalogo.component';
import { PrestamosComponent } from './Componente/Privado/prestamos/prestamos.component';
import { InformacionComponent } from './Componente/Publico/QuienesSomos/informacion/informacion.component';
import { RedesSocialesComponent } from './Componente/Publico/QuienesSomos/redes-sociales/redes-sociales.component';
import { ContactanosComponent } from './Componente/Publico/QuienesSomos/contactanos/contactanos.component';
import { EscolaresComponent } from './Componente/Publico/Redes/RedesBibio/escolares/escolares.component';
import { ComunitariasComponent } from './Componente/Publico/Redes/RedesBibio/comunitarias/comunitarias.component';
import { GABComponent } from './Componente/Publico/Redes/RedesAmigos/gab/gab.component';
import { ONGsComponent } from './Componente/Publico/Redes/RedesAmigos/ongs/ongs.component';
import { HakunaComponent } from './Componente/Publico/ServiBiblio/hakuna/hakuna.component';
import { BiblioMovilComponent } from './Componente/Publico/ServiBiblio/biblio-movil/biblio-movil.component';
import { SordoCiegosComponent } from './Componente/Publico/ServiBiblio/sordo-ciegos/sordo-ciegos.component';
import { VirtualComponent } from './Componente/Publico/ServiBiblio/virtual/virtual.component';
import { ConferenciasComponent } from './Componente/Publico/ServiBiblio/conferencias/conferencias.component';
import { ServiciosComponent } from './Componente/Publico/ServiBiblio/servicios/servicios.component';
import { InfoRedComponent } from './Componente/Publico/Redes/info-red/info-red.component';
import { SomosComponent } from './Componente/Publico/QuienesSomos/somos/somos.component';
import { MenuComponent } from './menu/menu.component';
import { BotonComponent } from './Componente/Servicios/boton/boton.component';
import { ModuloModule } from "./modulo/modulo.module";
import { InicioComponent } from './Componente/inicio/inicio.component';
import { UsuarioInicioComponent } from './Componente/Publico/usuario/usuario-inicio/usuario-inicio.component';
import { FooterComponent } from './footer/footer.component';
import { HistoriaComponent } from './Componente/Publico/QuienesSomos/historia/historia.component';
import { NuevoUsuarioComponent } from './Componente/Publico/usuario/nuevo-usuario/nuevo-usuario.component';
import { LogInComponent } from './Componente/Publico/usuario/log-in/log-in.component';
import { JuegosComponent } from './Componente/Publico/juegos/juegos.component';
import { CartasComponent } from './Componente/Publico/Juegos/cartas/cartas.component';
import { PuzzleComponent } from './Componente/Publico/Juegos/puzzle/puzzle.component';


@NgModule({
  declarations: [
    AppComponent,
    RedesComponent,
    CatalogoComponent,
    PrestamosComponent,
    InformacionComponent,
    RedesSocialesComponent,
    ContactanosComponent,
    EscolaresComponent,
    ComunitariasComponent,
    GABComponent,
    ONGsComponent,
    HakunaComponent,
    BiblioMovilComponent,
    SordoCiegosComponent,
    VirtualComponent,
    ConferenciasComponent,
    ServiciosComponent,
    InfoRedComponent,
    SomosComponent,
    MenuComponent,
    BotonComponent,
    InicioComponent,
    UsuarioInicioComponent,
    FooterComponent,
    HistoriaComponent,
    NuevoUsuarioComponent,
    LogInComponent,
    JuegosComponent,
    CartasComponent,
    PuzzleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModuloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

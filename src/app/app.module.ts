import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// Formularios
import { ReactiveFormsModule } from '@angular/forms';
// Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material
import { MaterialModule } from './material.module';
//Componentes
import { MapaComponent } from './components/mapa/mapa.component';
// Angular Google Maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  entryComponents:[MapaEditarComponent],
  declarations: [
    AppComponent,
    MapaComponent,
    FooterComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
  ],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

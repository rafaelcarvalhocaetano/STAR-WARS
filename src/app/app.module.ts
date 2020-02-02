import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AtoresComponent } from './componentes/atores/atores.component';
import { AuthComponent } from './componentes/auth/auth.component';
import { EspeciesComponent } from './componentes/especies/especies.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { NavesComponent } from './componentes/naves/naves.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { VeiculosComponent } from './componentes/veiculos/veiculos.component';
import { ServiceService } from './shared/service.service';

// import do FIREBASE
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


// configuração do firebase
export const config = {
  apiKey: 'AIzaSyDffubg4sqIadsYT-zkDTPUwynsCLFkVXw',
  authDomain: 'starwars-a64be.firebaseapp.com',
  databaseURL: 'https://starwars-a64be.firebaseio.com',
  projectId: 'starwars-a64be',
  storageBucket: '',
  messagingSenderId: '169982001642'
};

@NgModule({
  declarations: [
    AppComponent,
    AtoresComponent,
    AuthComponent,
    EspeciesComponent,
    FilmesComponent,
    NavesComponent,
    PlanetasComponent,
    VeiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp( config )
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtoresComponent } from './componentes/atores/atores.component';
import { EspeciesComponent } from './componentes/especies/especies.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { NavesComponent } from './componentes/naves/naves.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { VeiculosComponent } from './componentes/veiculos/veiculos.component';
import { AuthComponent } from './componentes/auth/auth.component';

const routes: Routes = [
  {path: 'atores', component: AtoresComponent},
  {path: 'especies', component: EspeciesComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'naves', component: NavesComponent},
  {path: 'planetas', component: PlanetasComponent},
  {path: 'veiculos', component: VeiculosComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

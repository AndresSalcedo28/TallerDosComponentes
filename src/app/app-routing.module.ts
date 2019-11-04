import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitSearchComponent } from './git-search/git-search.component';
import { ResultBusquedaComponent } from './result-busqueda/result-busqueda.component';


const routes: Routes = [
  { path: 'search', redirectTo: '/search/angular', pathMatch: 'full' },
  { path: 'search/:query', component: GitSearchComponent, data:{
    title: 'Page'
  }},
  { path: 'search/:query/:page', component: GitSearchComponent, data:{
    title: 'Page'
  }},
  { path: 'users', redirectTo: '/users/pedro', pathMatch: 'full' },
  { path: 'users/:query', component: ResultBusquedaComponent, data:{
    title: 'Page'
  } },
  { path: 'users/:query/:page', component: ResultBusquedaComponent, data:{
    title: 'Page'
  } },
  { path: '**', component: GitSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
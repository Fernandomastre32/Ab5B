import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrate',
    loadChildren: () => import('./registrate/registrate.module').then( m => m.RegistratePageModule)
  },
  {
    path: 'cartas',
    loadChildren: () => import('./cartas/cartas.module').then( m => m.CartasPageModule)
  },
  {
    path: 'elemento',
    loadChildren: () => import('./elemento/elemento.module').then( m => m.ElementoPageModule)
  },
  {
    path: 'elemento2',
    loadChildren: () => import('./elemento2/elemento2.module').then( m => m.Elemento2PageModule)
  },
  {
    path: 'tiempo',
    loadChildren: () => import('./tiempo/tiempo.module').then( m => m.TiempoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

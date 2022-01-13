import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'platillos',
    children:[
      {
        path: "",
        loadChildren: () => import('./platillos/platillos.module').then(m => m.PlatillosPageModule)
      },
      {
        path: ":id",
        loadChildren: () => import('./platillos/platillo-detalles/platillo-detalles.module').then(m => m.PlatilloDetallesPageModule)
      },
      {
        path: "updatePlatillo/:id",
        loadChildren: () => import('./platillos/update-platillo/update-platillo.module').then(m => m.UpdatePlatilloPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

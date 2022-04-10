import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // TODO: refacto routing, pathing

  {
    path: 'user/:username',
    loadChildren: () =>
      import('./user-infos/user-infos.module').then((m) => m.UserInfosModule),
  },
  {
    path: 'repository/:repo',
    loadChildren: () =>
      import('./repository-details/repository-details.module').then(
        (m) => m.RepositoryDetailsModule
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

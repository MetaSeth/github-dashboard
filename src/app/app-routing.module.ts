import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./search-bar/search-bar.module').then((m) => m.SearchBarModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-infos/user-infos.module').then((m) => m.UserInfosModule),
  },
  {
    path: 'repositoryDetails',
    loadChildren: () =>
      import('./repository-details/repository-details.module').then(
        (m) => m.RepositoryDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

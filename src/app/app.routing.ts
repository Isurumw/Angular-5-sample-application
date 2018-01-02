import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: '/registration/signin', pathMatch: 'full' }
];

export const AppRoutes = RouterModule.forRoot(routes);

import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistrationConfig } from './registration.config';

const routes: Routes = [
  {
    path: RegistrationConfig.ROUTE_PARENT,
    children: [
      { path: RegistrationConfig.ROUTE_CHILDREN_ONE, component: SigninComponent, data: { title: RegistrationConfig.TITLE_CHILDREN_ONE } },
      { path: RegistrationConfig.ROUTE_CHILDREN_TWO, component: SignupComponent, data: { title: RegistrationConfig.TITLE_CHILDREN_TWO} }
    ]
  },
  { path: '', redirectTo: '/' + RegistrationConfig.ROUTE_PARENT + '/' + RegistrationConfig.ROUTE_CHILDREN_ONE, pathMatch: 'full' }
];

export const RegistrationRoutes = RouterModule.forChild(routes);

import { AppConfig } from '../../app.config';

export class RegistrationConfig extends AppConfig {

  // all titles
  static TITLE_CHILDREN_ONE = 'Signin';
  static TITLE_CHILDREN_TWO = 'Signup';

  // All internal routes - registrations
  static ROUTE_PARENT = 'registration';
  static ROUTE_CHILDREN_ONE = 'signin';
  static ROUTE_CHILDREN_TWO = 'signup';

  // All external routes - registrations
  static NOTE = AppConfig.BASE_URL + 'notes';

}

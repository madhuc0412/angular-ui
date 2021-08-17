// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import 'angular-server-side-configuration/process'

export const environment = {
  production: false,
  APIURL:  process.env.NodeAPIURL || 'http://0.0.0.0:4500',
  LoginAPI: process.env.LoginAPI || '/api/Auth/Login',
  SignUpAPI: process.env.SignUpAPI || '/api/Auth/SignUp',
  GetUsersAPI: process.env.GetUsersAPI || '/api/User/GetUsers'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

import 'angular-server-side-configuration/process'

export const environment = {
  production: true,
  APIURL:  process.env.NodeAPIURL || 'http://0.0.0.0:4500',
  LoginAPI: process.env.LoginAPI || '/api/Auth/Login',
  SignUpAPI: process.env.SignUpAPI || '/api/Auth/SignUp',
  GetUsersAPI: process.env.GetUsersAPI || '/api/User/GetUsers'
};

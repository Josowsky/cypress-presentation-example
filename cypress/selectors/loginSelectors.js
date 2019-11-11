import { getByDataId } from '../utils';

export default {
  username: getByDataId('Login:input-username'),
  password: getByDataId('Login:input-password'),
  loginButton: getByDataId('Login:button-submit')
}
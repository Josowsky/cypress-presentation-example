import { getByDataId } from '../utils';

export default {
  header: getByDataId('Form:header'),
  name: getByDataId('Form:input-name'),
  surnameContainer: getByDataId('Form:select-surname'),
  surnameRow: name => getByDataId(`Form:select-row_${name}`),
}

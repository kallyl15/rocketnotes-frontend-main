import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function NoteItem({ onClick, value, isNew = false, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} {...rest} readOnly={!isNew} />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}

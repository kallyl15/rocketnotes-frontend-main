import { Container } from './styles';

import { Tag } from '../Tag';

export function Notes({ note, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <h1>{note.title}</h1>

      {note.tags && (
        <footer>
          {note.tags.map((tag) => (
            <Tag key={String(tag.id)} name={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}

import { Container } from './styles';

export function Button({ title, isLoading = false, ...rest }) {
  return (
    <Container type="button" disabled={isLoading} {...rest}>
      {isLoading ? 'Carregando...' : title}
    </Container>
  );
}

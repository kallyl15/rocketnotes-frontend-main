import { FiPower } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

import { Container, Profile, Logout } from './styles';

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const navigate = useNavigate('');

  function handleSignOut() {
    signOut();
    navigate('/');
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem vindo</span>
          <p>{user.name}</p>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <FiPower />
      </Logout>
    </Container>
  );
}

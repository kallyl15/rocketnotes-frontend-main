import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Container, Background, Form } from './styles';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { signIn } = useAuth();

  async function handleSignUp() {
    if ((!name, !email, !password)) {
      return alert('Preencha todos os campos!');
    }

    try {
      await api.post('/users', { name, email, password });

      alert('Usuário cadastrado com sucesso');
      signIn({email, password})
      navigate('/');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível cadastrar');
      }
    }
  }

  return (
    <Container>
      <Background />

      <div>
        <Form>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
          <h2>Crie sua conta</h2>

          <Input
            type="text"
            icon={FiUser}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            icon={FiMail}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button title="Cadastrar" onClick={handleSignUp} />
          <Link to={-1}>
            <ButtonText title="Voltar para o login" isActive />
          </Link>
        </Form>
      </div>
    </Container>
  );
}

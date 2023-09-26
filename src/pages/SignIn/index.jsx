import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Background, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    if (!email || !password) {
      return alert('Informe todos os dados');
    }
    signIn({ email, password });
  }

  return (
    <Container>
      <div>
        <Form>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
          <h2>Faça seu login</h2>
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

          <Button title="Entrar" onClick={handleSignIn} />

          <Link to="/register">
            <ButtonText title="Criar conta" isActive />
          </Link>
        </Form>
      </div>
      <Background />
    </Container>
  );
}

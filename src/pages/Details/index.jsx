import { FiArrowLeft } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Content, Links } from './styles';

import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';

export function Details() {
  const [note, setNote] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  async function removeNote() {
    const confirmation = confirm('Tem certeza que deseja excluir essa nota?');

    if (confirmation) {
      await api.delete(`/notes/${id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${id}`);
      setNote(response.data);
    }
    fetchNote();
  }, []);
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <div>
            <Link to={-1}>
              <FiArrowLeft />
            </Link>

            <ButtonText title="Excluir a nota" onClick={removeNote} />
          </div>

          <h1>{note.title}</h1>

          <p>{note.description}</p>

          {note.links?.length === 0 ? (
            ''
          ) : (
            <Section title="Links úteis">
              <Links>
                {note.links?.map((link) => (
                  <li key={String(link.id)}>
                    <a href={link.url} target="_blank" rel="external">
                      {link.url}
                    </a>
                  </li>
                ))}
              </Links>
            </Section>
          )}
          {note.tags?.length === 0 ? (
            ''
          ) : (
            <Section title="Marcadores">
              {note.tags?.map((tag) => (
                <Tag key={tag.id} name={tag.name} />
              ))}
            </Section>
          )}
        </Content>
      </main>
    </Container>
  );
}

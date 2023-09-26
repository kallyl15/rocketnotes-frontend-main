import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

import { Container, Form, Textarea } from './styles';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddLink() {
    if (newLink) {
      const isNewLink = !links.includes(newLink);
      if (isNewLink) {
        setLinks((prevState) => [...prevState, newLink]);
      } else {
        alert('Link já adicionado!');
      }
    }
    setNewLink('');
  }

  function handleRemoveLink(linkRemoved) {
    setLinks((prevState) => prevState.filter((link) => link !== linkRemoved));
  }

  function handleAddTag() {
    if (newTag) {
      const isNewTag = !tags.includes(newTag);
      if (isNewTag) {
        setTags((prevState) => [...prevState, newTag]);
      } else {
        alert('Marcador já adicionado!');
      }
    }
    setNewTag('');
  }

  function handleRemoveTag(tagRemoved) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagRemoved));
  }

  async function addNote() {
    if (!title) return alert('Informe o título da nota!');

    if (newLink)
      return alert(
        `Clique no botão + para adicionar o link ${newLink}, ou deixe o campo vazio`
      );
    if (newTag)
      return alert(
        `Clique no botão + para adicionar o marcador ${newTag}, ou deixe o campo vazio`
      );

    await api.post('/notes', { title, description, links, tags });

    alert('Nota criada com sucesso');
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to={-1}>
              <ButtonText title="voltar" />
            </Link>
          </header>
          <Input
            type="text"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Novo marcador"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={(e) => handleAddTag(e.target.value)}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={addNote} />
        </Form>
      </main>
    </Container>
  );
}

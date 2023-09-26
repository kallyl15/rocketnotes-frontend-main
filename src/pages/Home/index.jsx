import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Container, Search, Content, Menu, Brand, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Notes } from '../../components/Notes';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleSelectedTags(tagName) {
    if (tagName == 'All') {
      setSelectedTags([]);
      return;
    }

    const untag = selectedTags.includes(tagName);
    if (untag) {
      const filteredTags = selectedTags.filter((tag) => tag !== tagName);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(noteId) {
    navigate(`/details/${noteId}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${selectedTags}`
      );

      setNotes(response.data);
    }

    fetchNotes();
  }, [selectedTags, search]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');

      setTags(response.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>
          R<span>ocketnotes</span>
        </h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleSelectedTags('All')}
            isActive={selectedTags.length === 0}
          />
        </li>
        {tags.map((tag) => (
          <li key={String(tag.id)}>
            <ButtonText
              title={tag.name}
              onClick={() => handleSelectedTags(tag.name)}
              isActive={selectedTags.includes(tag.name)}
            />
          </li>
        ))}
      </Menu>

      <Search>
        <Input
          type="search"
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map((note) => (
            <Notes
              key={String(note.id)}
              note={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        <span>Criar nota</span>
      </NewNote>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { FaPlus, FaCrown, FaMinus, FaSortAmountUp } from 'react-icons/fa';
import { Container, Form, Button, List } from './styles';
import SortKings from '../../Services/sortKings';

export default function Main() {
  const [kings, setKing] = useState([]);
  const [newKing, setNewKing] = useState([]);
  const [validate, setValid] = useState({ valid: true, msg: '' });

  const newKingValidation = /([A-z])\w (M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$)/gm;

  function handleAdd() {
    const m = newKingValidation.exec(newKing);

    if (m !== null) {
      setKing([...kings, newKing]);
      setNewKing('');
      setValid({
        valid: true,
        msg: '',
      });
    } else {
      setValid({
        valid: false,
        msg: 'Insira um nome de Rei Valido Ex: José IV',
      });
    }
  }
  function handleDelete(king) {
    setKing(kings.filter(k => k !== king));
  }

  function sortKings() {
    setKing(SortKings(kings));
  }

  useEffect(() => {
    setKing([
      'Charles V',
      'Charles VII',
      'Jean II',
      'Charles VI',
      'Philippe VI',
      'Louis XI',
    ]);
    const storageKing = localStorage.getItem('kings');

    if (storageKing) {
      setKing(JSON.parse(storageKing));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kings', JSON.stringify(kings));
  }, [kings]);

  return (
    <Container>
      <h1>
        <FaCrown /> Kings
      </h1>

      <Form>
        <input
          type="text"
          placeholder="Ex: King III"
          value={newKing}
          onChange={e => setNewKing(e.target.value)}
        />

        <Button onClick={handleAdd}>
          <FaPlus />
        </Button>
      </Form>
      <p className="validate">{validate.msg}</p>
      <List>
        {kings.map(king => (
          <li key={king}>
            <span>{king}</span>
            <Button className="delete" onClick={() => handleDelete(king)}>
              <FaMinus />
            </Button>
          </li>
        ))}
      </List>
      <Button className="order" onClick={sortKings}>
        Sort
        <FaSortAmountUp />
      </Button>
    </Container>
  );
}

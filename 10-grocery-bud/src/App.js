import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: ''});

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name) {
      showAlert(true, 'Please enter value', 'danger')
    } else if (name && isEdit) {
      showAlert(true, 'Item edited', 'success')
      // const itemEdit = {id: editID, title: name};
      setList(list.map(item => {
        if (item.id === editID) {
          return {...item, title: name}
        }
        return item;
      }));
      setName('');
      setEditID(null);
      setIsEdit(false)
    } else {
      showAlert(true, 'Item edit', 'success')
      const newItem = {id: uuidv4(), title: name};
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, message="", type = "") => {
    setAlert({show, message, type})
  }

  const deleteAllItems = () => {
    showAlert(true, 'List empty', 'danger')
    setList([]);
  }

  const deleteItem= (id) => {
    showAlert(true, 'Item removed', 'danger')
    const newList = list.filter(item => item.id !== id)
    setList(newList);
  }

  const editItem = (id) => {
    const item = list.find(item => item.id === id);
    setIsEdit(true);
    setEditID(id);
    setName(item.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" value={name} onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className="submit-btn">{isEdit ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {list.length > 0 && <div className="grocery-container">
        <List items={list} deleteItem={deleteItem} editItem={editItem} />
        <button className="clear-btn" onClick={deleteAllItems}>Clear Items</button>
      </div>}
    </section>
  );
}

export default App;

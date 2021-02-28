import React from 'react';
import { FaEdit, FaTrash } from "react-icons/all";

const List = ({items, deleteItem, editItem}) => {
    return (
        <ul className="grocery-list">
            {items.map(item => <li key={item.id} className="grocery-item">
                <p className="title">{item.title}</p>
                <div className="btn-container">
                    <button type="button" className="edit-btn" onClick={() => editItem(item.id)}><FaEdit/> </button>
                    <button type="button" className="delete-btn" onClick={() => deleteItem(item.id)}><FaTrash/></button>
                </div>
            </li>)}
        </ul>
    );
};

export default List;

import React from 'react';

const Categories  = ({filter, categories}) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => <button key={index} className="filter-btn" onClick={() => filter(`${category.toLowerCase()}`)}>{category}</button>)}
        </div>
    );
};

export default Categories;

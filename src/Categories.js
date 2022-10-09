import React from 'react';

const Categories = ({ categories, filterItems }) => {
    return (
        <main className='btn-container'>
            <button className='filter-btn' onClick={() => filterItems('all')}>
                All
            </button>
            {categories.map((ele) => {
                return (
                    <button className='filter-btn' onClick={() => filterItems(ele)}>
                        {ele}
                    </button>
                );
            })}
        </main>
    );
};

export default Categories;

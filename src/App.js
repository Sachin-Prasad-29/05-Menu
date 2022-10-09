import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { useEffect } from 'react';

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);
    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
        } else {
            const newItems = items.filter((item) => {
                return item.category === category;
            });
            setMenuItems(newItems);
        }
    };
    useEffect(() => {
        const set = new Set();
        items.forEach((item) => {
            set.add(item.category);
        });
        setCategories(Array.from(set));
    }, []);
    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>Our Menu</h2>
                    <div className='underline'></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;

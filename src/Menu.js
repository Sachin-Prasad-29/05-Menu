import React from 'react';

const Menu = ({ items }) => {
    return (
        <div className='section-center'>
            {items.map((item) => {
                const { id, title, img, desc, price } = item;
                return (
                    <article key={id} className='menu-item'>
                        <img src={img} alt='' className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h5 className='price'>Rs. {price}</h5>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu;

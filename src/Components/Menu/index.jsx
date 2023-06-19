import React from 'react';
import MegaMenu from './MegaMenu';
import TopManu from './TopManu';
import Location from './Location';

const Menu = () => {
    return (
        <div className='flex mt-3 shadow-md shadow-zinc-400 py-2 z-50'>
            < MegaMenu />
            < TopManu />
            < Location />
        </div>
    );
};

export default Menu;
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-2'>
                <li className='bg-green-300 px-3 py-2 rounded'><Link href='/'>Home</Link></li>
                <li className='bg-red-300 px-3 py-2 rounded'><Link href='/blog'>Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
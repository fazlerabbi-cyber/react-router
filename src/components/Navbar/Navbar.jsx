import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-orange-500 p-3'>
       

        <ul className='flex justify-center gap-5'>
        <Link to={'/home'}>Home</Link>
        <Link to={'/product'}>Products</Link>
        <Link to={'/Blogs'}>Blogs</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Contact'}>Contact Us</Link>
         
        </ul>
    </div>
  )
}

export default Navbar
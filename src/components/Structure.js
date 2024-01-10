import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Structure = () => {
  return (
    <Fragment>
        <header className='p-[20px] bg-green-700 text-zinc-50'>
            <nav className='flex justify-between items-center'>
                <h2 className='text-3xl hover:scale-105 hover:text-red-700'>
                    <Link to={'/'}>Shopping Cart</Link>
                </h2>
                <ul className='flex gap-3 text-lg'>
                    <li className='hover:scale-105 hover:text-red-700'><Link to={'/'}>Home</Link></li>
                    <li className='hover:scale-105 hover:text-red-700'><Link to={'/cart'}>Cart</Link></li>
                </ul>
            </nav>
        </header>
        <Outlet/>
    </Fragment>
  )
}

export default Structure
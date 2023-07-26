import React from 'react'
import { useAuth } from '@/context/auth'

function Header() {
  const {logout} = useAuth()
  // function logoutHandler(){
  //   logout()
  // }
    return (
      <header className="flex items-center justify-between p-8 font-serif text-4xl bg-green-500 text-black-500">
        <h1>Cookie Stand Admin</h1>
        <button className='p-2 text-lg font-sans rounded-md shadow-2xl text-black-500 hover:bg-green-700' onClick={()=>logout()}>logout</button>
      </header>
    );
  }

  export default Header;  
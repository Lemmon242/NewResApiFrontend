import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../assets/goal on.jpg';
import navImg from '../assets/man red.jpg';
const Navbar = () => {
  return (
    <nav className='my-5 '>
        <div className='container d-flex align-items-center justify-content-between '>
            <div>
                <Link to="/" className='text-decoration-none'>
                    <img src={navLogo} alt="navLogo" className='img-fluid bounce' />
                
                </Link>
                </div>
                <div>
        
        <ul className='d-flex align-items-center gap-5 list-unstyled '>
            

            <li>
                <Link to='/AllUsers'
                               className='text-decoration-none'

                >All Users</Link>
            </li>

            <li>
               <Link to='/NewUser'
               className='text-decoration-none'
               >New User</Link>
            </li>

            <li>
                <img src={navImg} alt="navImg" className='d-none d-lg-block img-fluid'/>
            </li>
        </ul>
        </div>
        </div>
        <hr />
    </nav>
  )
}

export default Navbar


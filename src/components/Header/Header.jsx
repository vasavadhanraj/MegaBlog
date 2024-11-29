import React from 'react'
import {Container, Logo , LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        <header className='border border-b-2 border-black py-3 shadow bg-purple-700 rounded-lg font-semibold'>
            <Container>
                <nav className='flex'>
                    <div className='mr-6'>
                        <Link to='/'>
                            <div className="hover:bg-black rounded-full ">
                                <Logo width='70px' />
                            </div>
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name} className=' px-1'>
                                    <button onClick={() => navigate(item.slug)}
                                        className='hover:text-white inline-block px-6 py-4 duration-200 hover:bg-black rounded-full'>
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
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
        <header className='py-3 shadow bg-gray-500 rounded-lg font-semibold'>
            <Container>
                <nav className='flex'>
                    <div className='mr-6 mt-1 '>
                        <Link to='/'>
                            <div className="hover:text-red-700 hover:bg-white px-2 py-1 rounded-full ">
                                <Logo width='70px' />
                            </div>
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <button onClick={() => navigate(item.slug)}
                                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
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
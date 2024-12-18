import React from 'react'
import { useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button className="hover:text-white inline-block px-6 py-4 duration-200 hover:bg-black rounded-full" onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn

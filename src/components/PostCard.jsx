import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full h-full bg-gray-100 rounded-xl p-4 border border-black">
                <div className="w-full justify-center mb-2">
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard

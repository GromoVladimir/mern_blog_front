import React from 'react'
import { Link } from 'react-router-dom';

export const CommentItem = ({cmt}) => {
    let avatar;
    if (cmt?.user?.avatarUrl) {
        avatar = <img src={`process.env.REACT_APP_API_URL${cmt?.user.avatarUrl}`} alt="avatar" className="rounded-full w-10 h-10" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
    } else {
        const initials = cmt?.user?.name?.trim().toUpperCase().split(' ').map(word => word[0]).join('');
        avatar = <div className="flex items-center justify-center rounded-full w-10 h-10 bg-blue-300 text-s">{initials}</div>;
    }

    return (
        <Link to={`/user/${cmt.user?._id}`}>
        <div className='flex items-center gap-3 py-2'>
            <div className="flex items-center justify-center shrink-0 rounded-full w-10 h-10 bg-blue-300 text-s">
                {avatar}
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-gray-300">{cmt?.user?.name}</div>
                <div className="text-gray-300 text-[17px]">{cmt?.text}</div>
            </div>
        </div>
        </Link>
    );
}

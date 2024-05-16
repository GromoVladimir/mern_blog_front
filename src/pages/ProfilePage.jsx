import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import axios from '../utils/axios';
import { checkIsAuth } from '../redux/features/auth/authSlice'
import {useNavigate} from 'react-router-dom'

export const ProfilePage = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate()
    const isAuth = useSelector(checkIsAuth)
  
    if (!window.localStorage.getItem('token') && !isAuth) {
      navigate('/autn/not')
    }

    const fetchUserData = useCallback(async() => {
        try {
            const {data} = await axios.get('/auth/profile')
            setUser(data)
        } catch (error) {
            console.error(error)
        }
    }, []);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    // const user = {
    //     name: 'Author',
    //     email: 'test@gmail.com',
    //     password: 12345,
    //     imageUrl: 'https://www.garant.ru/files/5/0/1461605/200x200.jpg',
    // }

    return (
        <div className='ml-10 flex gap-10 py-8 justify-center'>
            <div className='border p-4'> 
                <h1 className='text-lg text-white text-center'>Информация о пользователе</h1>
                <div className='mt-4'>
                    <div className='border p-2 text-white'>
                        <p>Имя пользователя:</p>
                        <p>{user?.name}</p>
                    </div>
                    <div className='border p-2 mt-4 text-white'>
                        <p>Статус:</p>
                        <p>{user?.status}</p>
                    </div>
                    <div className='border p-2 mt-4 text-white'>
                        <p>Электронная почта:</p>
                        <p>{user?.email}</p>
                    </div>
                    {/* <div className='border p-2 mt-4 text-white'>
                        <p>Пароль:</p>
                        <p>{user.password}</p>
                    </div> */}
                    <div className='border p-2 mt-4 text-white'>
                        <p>Аватарка:</p>
                        {user?.avatarUrl && <img src={`${process.env.REACT_APP_API_URL}${user?.avatarUrl}`} alt={user?.name} className='w-40 h-40 rounded-full' />}
                    </div>
                </div>
            </div>
        </div>
    );

};


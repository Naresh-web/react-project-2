import React, { useEffect, useState } from 'react'
import Layout from '../layout';
import { Api } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUser] = useState([]);
    const router = useNavigate();
    const fetchUsersdata = async () => {
        const data = await Api('https://api.escuelajs.co/api/v1/users');
        if(data){
            setUser(data)
        }
    }
    const fetchUserDetailsById = async (id)=> {
        router(`/userDetails/${id}`)
    }
    useEffect(() => {
        fetchUsersdata();
    }, [])
  return (
    <>
        <Layout>
        <div className='usersArea'>
            <ul>
                {
                    users.length === 0 ? (<p>Loading...</p>) : (
                        users.map((item) => {
                           const {id, name} = item;
                        return <>
                        <li key={id} onClick={() => fetchUserDetailsById(id)}>
                            <img src={item.avatar} alt="" />
                            <p>{name}</p>
                        </li>
                        </>
                })
                )}
            </ul>
        </div>
        </Layout>
    </>
  )
}

export default Users;
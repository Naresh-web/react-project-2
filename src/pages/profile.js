import React, { useEffect, useState } from 'react'
import Layout from '../layout';
import UserImg from '../assets/user.png'
import { fetchProfile } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const router = useNavigate()
    const [profileData, setProfileData] = useState({})
    
    const fetchProfileData = async () => {
        const myToken = localStorage.getItem('token')
        const resp = await fetchProfile(myToken);
        if(resp){
            setProfileData(resp)
        }
    }
    const logout = () => {
        localStorage.removeItem('token');
        router('/')
    }
    useEffect(() =>{
        fetchProfileData();
    }, [])
  return (
    <>
        <Layout>
        {profileData.length === 0 ? (<p>Loading...</p>) : (
            <div className="profilecard">
            <div className="topArea">Welcome <b>{profileData.name}</b></div>
            <div className="pDetails">
                {profileData.length === 0 ? (<img src={UserImg} alt="User Image" />) : (<img src={profileData.avatar} alt="User Image" />)}
                <div className="detailsArea">
                    <p>Name: {profileData.name}</p>
                    <p>Email: {profileData.email}</p>
                    <p>Role: {profileData.role}</p>
                </div>
                <div className="logout">
                    <button type='button' onClick={() => logout()}>Logout</button>
                </div>
            </div>
        </div>
        )}
        </Layout>
    </>
  )
}

export default Profile;
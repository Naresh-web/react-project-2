import React, { useEffect, useState } from 'react'
import Layout from '../layout';
import UserImg from '../assets/user.png'
import { fetchProfile } from '../services/api';

const Profile = () => {
    const [profileData, setProfileData] = useState({})
    
    const fetchProfileData = async () => {
        const myToken = localStorage.getItem('token')
        const resp = await fetchProfile(myToken);
        if(resp){
            setProfileData(resp)
        }
    }
    useEffect(() =>{
        fetchProfileData();
    }, [])
  return (
    <>
        <Layout>
        <div className="profilecard">
            <div className="topArea">Welcome <b>{profileData.name}</b></div>
            <div className="pDetails">
                <img src={profileData.avatar} alt="User Image" />
                <div className="detailsArea">
                    <p>Name: {profileData.name}</p>
                    <p>Email: {profileData.email}</p>
                    <p>Role: {profileData.role}</p>
                </div>
            </div>
        </div>
        </Layout>
    </>
  )
}

export default Profile;
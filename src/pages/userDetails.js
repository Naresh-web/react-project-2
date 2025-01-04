import React, { useEffect, useState } from 'react'
import { detailsById } from '../services/api';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const [userDetails, setUserDetials] = useState({});
    const params = useParams();

    const fetchDetailsById = async () => {
        const data = await detailsById(params.id);
        if(data){
            console.log(data);
            setUserDetials(data)
        }
    }
    useEffect(() => {
        fetchDetailsById()
    }, [])
  return (
    <>
        <div className="userDetails">
                <img src={userDetails.avatar} alt="" />
                {userDetails.email}
                {userDetails.name}
        </div>
    </>
  )
}

export default UserDetails;
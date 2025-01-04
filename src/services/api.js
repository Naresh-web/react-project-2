import React from 'react'

/** Global API */
export const Api = async (URL) => {
  try{
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
  catch (err){
    console.log(err);
  }
}
/** Global API END */

/** Details fetching by ID */
export const detailsById = async (id)=> {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
/** Details fetching by ID END*/
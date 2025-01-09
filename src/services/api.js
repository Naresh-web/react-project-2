
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

/** Post API for Login */
export const LoginUser = async(x, y) => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        email:x,
        password:y
      })
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
/** Post API for Login END */

export const fetchProfile = async (token) => {
  try {
    const resp = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
      headers: {
        'Content-Type': 'application/json',  
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

/** Fetch Product details by ID **/
export const fetchProductDetailsById = async (id) => {
  try {
    const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
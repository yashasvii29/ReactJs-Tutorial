import React , { useState , useEffect}from 'react'

const GithubUser = (props) => {
  let [user,setUser] = useState({
    imgUrl:"",
    followers:0,
    following:0
  })
  // followers and following ko fetch krne ke liye we will use fetch() and inside this fetch method we pass the string....fetch() returns a promise and promise ko handle krne krne ke liye await krenge and await ka use async fun ke andar krte hai toh fun ko async declare krenge
// fetch se incomplete data aata hai toh uss data ko json m convert krna padta hai and it also returns a promise toh promise ko handle krne ke liye await krenge and await keyword ka use async fun ke andar krte hai

  useEffect(()=>{
     async function getUser(username){
     const response = await fetch(`https://api.github.com/users/${username}`);
     const data= await response.json();
     const {avatar_url,followers,following}=data;
     setUser(()=>{
      return {
        imgUrl:avatar_url,
        followers:followers,
        following:following
      }
     })
     console.log(data);
     }
     getUser(props.username);
    
  },[])
  return (
    <div>
    <figure>
      <img src= {user.imgUrl} alt="profile pic" />
      <figcaption>
        <p>Username: {props.username}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </figcaption>
    </figure>
    </div>
  )
}

export default GithubUser

// mongoose ke methods promise return krte hai and promise ko handle krne ke liye await krenge and fun ko async declare krenge
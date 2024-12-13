import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'

const useAuth = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        onAuthStateChanged(auth)
    })

  return (
    <div>useAuth</div>
  )
}

export default useAuth
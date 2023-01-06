import { Button, Container } from '@mui/material'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../components/auth/login'
import { verificationRequest } from '../components/auth/requests'
import { ADD_DATA } from '../store/reducers/signin'

export default function Home() {
  const user = useSelector(state => state.user.username)
  const dispatch = useDispatch()
  useEffect(() => {
    const tokenVerify = async () => {
          const verification = await verificationRequest()
          if (verification.access) {
            dispatch(ADD_DATA({ username: verification.username }))
          }
      }
    tokenVerify()
    },[])
  return (
  <Container maxWidth='lg'>
    { !user? <Login />: <div>
      <Button 
      variant='contained'
    onClick={() => {
      dispatch(ADD_DATA({ username: '' }))
      localStorage.removeItem('token')
    }}>Logout</Button>
    </div>  }
  </Container>
  )
}

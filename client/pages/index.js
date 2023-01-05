import { Container } from '@mui/material'
import Head from 'next/head'
import { Login } from '../components/auth/login'

export default function Home() {
  return (
  <Container maxWidth='lg' sx={{ minHeight: '100vh' }}>
    <Login />
  </Container>
  )
}

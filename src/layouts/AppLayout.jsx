import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Header />
    <main className='min-h-screen mt-[76px] max-w-[1200px] mx-auto p-4'><Outlet/></main>
    <Footer />
    </>
  )
}

export default AppLayout
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './layout/UI/Loading'

const Applayout = () => {

  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading/>;
  console.log(navigation);

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout;
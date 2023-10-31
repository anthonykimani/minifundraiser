import React from 'react'
import AppBar from '../../shared/AppBar'
import Search from '@/shared/Search'
import Featured from '@/shared/Featured'

const Home = () => {
  return (
    <div>
        <AppBar />
        <Search />
        <Featured />
    </div>
  )
}

export default Home
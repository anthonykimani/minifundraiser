import React from 'react'
import AppBar from '../../shared/AppBar'
import Search from '@/shared/Search'
import Featured from '@/shared/Featured'
import Categories from './components/Categories'

const Home = () => {
  return (
    <div className='overflow-auto'>
        <AppBar />
        <Search />
        <Featured />
        <Categories />
    </div>
  )
}

export default Home

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import {  Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import  Publish  from './pages/Publish'
import { Home } from './pages/Home'
import Bookmarks from './pages/Bookmarks'
import User from './pages/User'
import Edit from './pages/Edit'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/blog/:id" element={<Blog />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/publish" element={<Publish />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/bookmarks" element={<Bookmarks />}/>
        <Route path="/:id" element={<User />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/profile/:id" element={<User />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

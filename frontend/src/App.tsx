
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const Signup = lazy(() => import('./pages/Signup'));
const Signin = lazy(() => import('./pages/Signin'));
const Blog = lazy(() => import('./pages/Blog'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Publish = lazy(() => import('./pages/Publish'));
const Edit = lazy(() => import('./pages/Edit'));
const Bookmarks = lazy(() => import('./pages/Bookmarks'));
const User = lazy(() => import('./pages/User'));
const Home = lazy(() => import('./pages/Home'));

function App() {

  return (
    <>
      <BrowserRouter>
      <Suspense>
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
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

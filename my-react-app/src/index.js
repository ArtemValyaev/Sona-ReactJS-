/* eslint-disable */
import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import Footer from "./components/Footer"
import About from './pages/about'
import Rooms from './pages/rooms'
import Blog from './pages/blog'
import Contact from './pages/contact'
import notFoundPage from './pages/notFoundPage'

import './css/owl.carousel.min.css'
import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/flaticon.css'
import './css/font-awesome.min.css'
import './css/magnific-popup.css'
import './css/nice-select.css'
import './css/slicknav.min.css'
import './css/jquery-ui.min.css'
import './css/style.css'


import './js/main'


const elements = (<BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/rooms" element={<Rooms />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<notFoundPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    
)
const app = ReactDOMClient.createRoot(document.getElementById("root"))
app.render(elements)
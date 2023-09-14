import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Favs, Detail, Contact } from '../pages'

export default function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="home" element={<Home />} />
                </Route>
                <Route path='/dentist/:id' element={<Detail />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/favs' element={<Favs />} />
            </Routes>
        </>
    )
}

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import PhotoAlbum from './PhotoAlbum'
import PhotoDetail from './PhotoDetail'
import axios from 'axios'
  
export default () => {
    useEffect(()  => {
        axios.get('http://localhost:3001/happiness').then(resp => {
            console.log(resp.data)
        })
    }, [])
    return (
        <Router>
            <Route path="/" exact component={PhotoAlbum} />
            <Route path="/happiness/:id" component={PhotoDetail} />
        </Router>
    
    )
    
}

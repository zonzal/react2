import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../views/Main';
import ArticleList from "../views/ArticleList";
import Article from "../views/Article";
import Post from "../views/Post";
import Control from "../views/Control";


function Routess() {
    return (  
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/board/:boardId' element={<ArticleList/>}/>
                    <Route path='/article/:articleId' element={<Article/>}/>
                    <Route path='/insert' element={<Post/>}/>
                    <Route path='/update/:articleId' element={<Post/>}/>
                    <Route path='/control' element={<Control/>}/>
                    <Route path='/*' element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Routess;
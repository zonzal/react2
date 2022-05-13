import React from 'react';
import Board from "./views/Board";
import Routess from "./routes/Routes";
import "./Views.css";
import { useNavigate } from 'react-router-dom';

function Views() {
    const Navigate = useNavigate();

    function onClickNewPostButton() {
        Navigate("/insert");
    }

    function onClickControlButton() {
        Navigate("/control");
    }

    return (
        <div >
            <div id="header" className="header">
                <div >
                    <h3>Board CRUD</h3>
                </div>
                <div>
                    <div>
                        <button onClick={onClickNewPostButton}>새글</button>
                    </div>
                    <div>
                        <button onClick={onClickControlButton}>설정</button>
                    </div>
                </div>
            </div>
            <div id="sidebar" className="sidebar">
                <Board />
            </div>
            <div id="content" className="content">
                <Routess />
            </div>
        </div>
    );
}

export default Views;
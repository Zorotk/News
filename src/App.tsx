import React from 'react';
import './App.css';
import './assets/font/font.css'
import Layout from "./view/containers/layout/layout";
import Homepage from "./view/pages/Homepage";
import Login from "./view/pages/Login";
import News from "./view/pages/News";
import Profile from "./view/pages/Profile";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./view/components/Header/Header";
import NotPage from "./view/pages/notPage";
import SingleNews from "./view/components/SingleNews";
import EditNews from "./view/pages/EditNews";
import ProvideAuth from "./view/containers/ProvideAuth";


function App() {

    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Homepage/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="news/:id" element={<SingleNews/>}/>
                        <Route path="news/:id/edit" element={<EditNews/>}/>
                        <Route path="profile" element={
                            <ProvideAuth>
                                <Profile/>
                            </ProvideAuth>
                        }/>
                        <Route path="*" element={<NotPage/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;


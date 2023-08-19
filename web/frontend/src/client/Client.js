const React = require('react');
const { Outlet  } = require('react-router-dom');

const Login = require('./pages/Login');
const Main = require('./pages/Main');

const Layout = () => {
    return (
        <>
            
            <Outlet />
        </>
    );
};

module.exports = {
    Layout,
    Login,
    Main
};
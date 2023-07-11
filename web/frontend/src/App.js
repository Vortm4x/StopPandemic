const React = require('react');
const { Route, Routes, } = require('react-router-dom');

const Admin = require('./admin/Admin');
const Client = require('./client/Client');

const App = () => {
  return (
    <>
      <Routes>
        <Route path='admin' element={<Admin.Layout />} >
          <Route path='login' element={<Admin.Login />} />
          <Route path='main' element={<Admin.Main />} />
        </Route>
        <Route path="client" element={<Client.Layout />}>
          <Route path='login' element={<Client.Login />} />
          <Route path='main' element={<Client.Main />} />
        </Route>
      </Routes>
    </>
  );
};

module.exports = App;

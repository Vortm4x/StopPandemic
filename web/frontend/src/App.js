const React = require('react');
const { BrowserRouter, Route, Routes, Link } = require('react-router-dom');

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" component={<Home/>} />
          <Route path="/about" component={<About/>} />
          <Route path="/contact" component={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

module.exports = App;

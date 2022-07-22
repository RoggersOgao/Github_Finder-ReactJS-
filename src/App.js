import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import NotFound from "./components/pages/notFound/NotFound";
import { UserProvider } from './components/contexts/UserContext';

import { AlertProvider } from "./components/contexts/alerts/AlertContext";
import Profile from "./components/pages/singleProfile/Profile";


function App() {
  return (
<UserProvider>
  <AlertProvider>
    <Router>
    <div className="App">
      <header className="App-header">
        {/* header */}
        <Header />

        </header>
          <main className="main">
        <Routes>

          {/* home */}
          <Route path="/" element={<Home />}/>
          {/* About */}
          <Route path="/about" element={<About />}/>
        {/* single user page (profile) */}
        <Route path="/users/:login" element={<Profile />} />
        <Route path="/users/:login/repos" element={<Profile />} />
        {/* NotFound */}
        <Route path="/notfound" element={<NotFound />}/>
        <Route path="/*" element={<NotFound />}/>
        </Routes>
          </main>
      
      {/* Footer */}
      <Footer />
    </div>
    </Router>
    </AlertProvider>
    </UserProvider>
  );
}

export default App;

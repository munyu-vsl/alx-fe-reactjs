import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter'; // Import Counter

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Jane Doe" age={28} bio="Avid traveler and food lover." />
      <Counter /> {/* Render Counter */}
      <Footer />
    </div>
  );
}

export default App;
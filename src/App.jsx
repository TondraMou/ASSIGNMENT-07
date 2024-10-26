import { useState } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import MainSection from './Components/MainSection';
import Footer from './Components/Footer';


const App = () => {
  const [coins, setCoins] = useState(0);
  return (
    <div>
      <Navbar coins={coins}></Navbar>
      <Banner coins={coins} setCoins={setCoins}></Banner>
      <MainSection userCoins={coins} setUserCoins={setCoins}></MainSection>
      <Footer></Footer>
    </div>
  );
};

export default App;
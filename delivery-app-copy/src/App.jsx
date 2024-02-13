import { useState, useContext, createContext } from 'react';
import Name from "./Components/Name";
import Address from "./Components/Address";
import CountOfOrder from "./Components/CountOfOrder";
import Total from "./Components/Total";

import './App.css';

export const DeliveryContext = createContext();

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [count, setCount] = useState(null);

  const [activeTab, setActiveTab] = useState('Name');

  const DeliveryProvider = ({ children }) => {
    return (
      <DeliveryContext.Provider value={{ name, setName, address, setAddress, count, setCount }}>
        {children}
      </DeliveryContext.Provider>
    );
  }

  const handleNext = () => {
    if (activeTab === 'Name') setActiveTab('Address');
    else if (activeTab === 'Address') setActiveTab('Count');
  };

  const handlePrevious = () => {
    if (activeTab === 'Total') setActiveTab('Count');
    else if (activeTab === 'Count') setActiveTab('Address');
    else if (activeTab === 'Address') setActiveTab('Name');
  };

  const handleFinish = () => {
    if(activeTab === 'Count') setActiveTab("Total");

  };

  return (
    <>
      <div className='App'>
        <nav className='nav'>
          <ul>
            <li className={activeTab === 'Name' ? 'active' : ''}>Name</li>
            <li className={activeTab === 'Address' ? 'active' : ''}>Address</li>
            <li className={activeTab === 'Count' ? 'active' : ''}>Count</li>
            <li className={activeTab === 'Total' ? 'active' : ''}>Total</li>
          </ul>
        </nav>
        <div className='mainFrame'>
          <DeliveryProvider>
            {activeTab === 'Name' && <Name />}
            {activeTab === 'Address' && <Address />}
            {activeTab === 'Count' && <CountOfOrder />}
            {activeTab === 'Total' && <Total />}
          </DeliveryProvider>

          <div className='navigationButtons'>
            {activeTab !== 'Name' && <button onClick={handlePrevious} style={{border: "1px dashed black", cursor:"pointer"}} >Previous</button>}
            {activeTab !== 'Total' && activeTab !== "Count" && <button onClick={handleNext} style={{border: "1px dashed black",cursor:"pointer"}} >Next</button>}
            {activeTab === 'Count' && <button onClick={handleFinish}  style={{border: "1px dashed black",cursor:"pointer"}} >Finish</button>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

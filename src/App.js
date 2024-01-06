import { useState } from 'react';
import './App.css';
import MessageDisplay from './components/MessageDisplay';
import MessageForm from './components/MessageForm';


function App() {
  const [currentMsg, setCurrentMsg] = useState('There is no new message');

  const youveGotEmail = (newMessage) => {
    setCurrentMsg(newMessage)
  }
  return (
    <div className='App1'>
    <MessageForm  onMessage = {youveGotEmail}/>

    <MessageDisplay  message= {currentMsg}/>
    </div>
  );
}

export default App;

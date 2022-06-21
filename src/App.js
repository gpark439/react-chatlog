import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const countLiked = () => {
    let count = 0;
    for (let message of messages) {
      if (message.liked === true) {
        count += 1;
      }
    }
    console.log(count);
    return count;
  };

  const toggleLiked = (id) => {
    const newMessages = [];
    for (const message of messages) {
      if (message.id === id) {
        message.liked = !message.liked;
      }
      newMessages.push(message);
    }
    setMessages(newMessages);
    console.log('toggleLiked called');
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2> {countLiked()} ❤️s</h2>
      </header>
      <main key={messages.id}>
        {/* Wave 01: Render one ChatEntry component*/}
        {/* <ChatEntry
          sender={senderData}
          body={bodyData}
          timeStamp={timeStampData}
        ></ChatEntry> */}
        {/* Wave 02: Render ChatLog component */}
        <ChatLog entries={messages} likedCallback={toggleLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;

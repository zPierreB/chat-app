import React from 'react';
import Contact from "./components/Contact";

const Owen = {
  name : 'Owen Kennedy',
  avatar : "https://randomuser.me/api/portraits/men/81.jpg",
  online : true
}

const Addison = {
  name : 'Addison Hall',
  avatar : "https://randomuser.me/api/portraits/women/29.jpg",
  online : false
}
const Earl = {
  name : 'Earl Wilson',
  avatar : "https://randomuser.me/api/portraits/men/20.jpg",
  online : true
}

function App() {
  return (
    <div className="App">
      <Contact {...Owen}/>
      <Contact {...Addison}/>
      <Contact {...Earl}/>
    </div>
  );
}

export default App;

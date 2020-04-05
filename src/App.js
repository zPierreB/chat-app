import React from 'react';
import ContactList from './components/ContactList';
import './components/Contact.css';

const users = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
    },
    {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
    },
    {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
    },
    {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
    },
    {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
    }
];

// function App() {
//   return (
//     <div className="App">
//       <ContactList {...users[0]}/>
//       <ContactList {...users[1]}/>
//       <ContactList {...users[2]}/>
//       <ContactList {...users[3]}/>
//       <ContactList {...users[4]}/>
//     </div>
//   );
// }

function App() {
    return users.map(user => (
      <ContactList name={user.name} avatar={user.avatar} online={user.online}/>
    ))};

export default App;

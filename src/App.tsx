import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';

const INITIAL_STATE = [{
    nick: 'Jorge',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=jorgee',
    description: 'Jorge hace de encargado'
  },
  {
    nick: 'Juan',
    subMonths: 2,
    avatar: 'https://i.pravatar.cc/150?u=juan',
  }
]


interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [ subs, setSubs] = useState<AppState['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])


  const handleNewSubs = (newSubs: Sub): void => {
    setSubs(subs => [...subs, newSubs])
  }
  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs} />
      <Form onNewSubs={handleNewSubs}/>
    </div>
  );
}

export default App;

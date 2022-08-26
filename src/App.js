import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { Item } from './components/Item'
import VirtualScroll from './components/VirtualScroll'

function App() {
    return (
        <div className="App">
            <h1>Tickets List</h1>
            <VirtualScroll itemCount={10000} height={500} childHeight={50} Item={Item} />
        </div>
    )
}

export default App

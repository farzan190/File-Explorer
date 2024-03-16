
import './App.css';
import { useState } from 'react';
import data from './Data/FolderData.js'
import Folder from './Components/Folder.js'



function App() {

const [explorerData,setExplorerData] =useState(data);

return <Folder explorer={explorerData}/>;




}

export default App;

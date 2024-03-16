import { useState } from "react";

export default  function Folder ({explorer}){
const [expand,setExpand]= useState(false);
if(explorer.isFolder)
return (
 <div> 
  <div onClick={()=>setExpand(!expand)}>📁{explorer.name}</div>

 <div style={{display: expand?"block" :"none", paddingLeft:25}}>{explorer.items.map((obj)=>{return <Folder explorer={obj}/>})}</div>;
</div>

)
else{
   return <div>📄{explorer.name}</div>
}

}


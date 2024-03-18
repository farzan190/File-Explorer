const useTraverseTree =()=>{

const insertNode= function (tree,folderId,item,isFolder){

    if(tree.id===folderId && isFolder){

       tree.items.unshift({
        id: new Date().getTime(),
        name: item ,
        isFolder:isFolder,
        items:[]
    })

    }
return tree;

let latestNode=[];

  latestNode= tree.items.map((item)=>{ return insertNode(item,folderId,item.isFolder)}); 
    
 return {...tree , items:latestNode};
}


}

 export default useTraverseTree;
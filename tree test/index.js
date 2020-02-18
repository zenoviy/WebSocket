const obj = document.querySelector("#main-menu");
var searchedObject = "C";

function treeReview(data, callback){
		function deepIterator(nextObjects, deepDive){
    		for(let i in nextObjects){
          try {
            nextObjects[i].length
          }
          catch(error){
            console.log('Error hasOccured' + error)
            throw Error(error)
          }
          finally {
            callback({objectValue: (nextObjects[i])?nextObjects[i]:'no data', name: i}, searchedObject)
            if(!nextObjects[i]){
              continue
            }else if(nextObjects[i].length && nextObjects[i].length>0 && deepDive>0){
              deepIterator(nextObjects[i])
            }
          }
        }
    }
    deepIterator(data, 1)
}
treeReview(obj, function(data, searchedObject){
      console.log(data.name, " || ",data.objectValue)
      if(data.objectValue == searchedObject){
        //alert('find')
        console.log(`object you search is:(${searchedObject}) and we fide: (${data.name})`);
      }else{
        //console.log(data.name)
      }
})

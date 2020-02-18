console.log('server-side')
async function getData(dataObject){
    if(!dataObject) throw Error("Cant get data")
    const response = await fetch(dataObject.url).then(data =>{
        return data.json()
    });
    return response
}
async function postData(dataObject){
    if(!dataObject) throw Error("noData")
    const response = await fetch(dataObject.url, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObject.data)
    }).then(function(response) {
        return response.json();
      }).then(function(data) {
          return data
      });
    return response
}




const fetchTotal = (todo) => {
    const todoData= (todo)
    fetch(url, {
        method: "GET",
        body: todoData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
        .then((data) => {
                showTotal(data)
         
        }).catch((error)=>{console.log(error)})
}
 
fetchTotal()




const showTotal = (todo) => {
    total.innerHTML=todo
}





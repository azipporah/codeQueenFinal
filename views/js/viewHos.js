// link = "http://localhost:4040/hospital"

//fetching all the todos
const fetchAllTodos = (todo) => {
    const todoData = JSON.stringify(todo);
    fetch("http://localhost:4040/hospital", {
        method: "GET",
        body: todoData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            data.forEach((todo) => {
                addTodoElement(todo)
            })
        })
        .catch((error) => { console.log(error) })

}
fetchAllTodos();//invoking the fetchAllTodos funtion

const tableBody = document.getElementById('tableBody');

// creat a function 'addTodoElement' so that we can reuse the tableRow and todoTd
const addTodoElement = (newhos) => {
    const { hospitalName, hospitalEmail, hospitalDistrict, hospitalCapacity, hospitalStatus} = newhos
    const tableRow = document.createElement("tr");

    const hospitalNameTd = document.createElement("td");
    hospitalNameTd.innerHTML = hospitalName;
    tableRow.appendChild(hospitalNameTd)

    const hospitalEmailTd = document.createElement("td");
    hospitalEmailTd.innerHTML = hospitalEmail;
    tableRow.appendChild(hospitalEmailTd)

    const hospitalDistrictTd = document.createElement("td");
    hospitalDistrictTd.innerHTML = hospitalDistrict;
    tableRow.appendChild(hospitalDistrictTd)

    const hospitalCapacityTd = document.createElement("td");
    hospitalCapacityTd.innerHTML = hospitalCapacity;
    tableRow.appendChild(hospitalCapacityTd)

    const hospitalStatusTd = document.createElement("td");
    hospitalStatusTd.innerHTML = hospitalStatus;
    tableRow.appendChild(hospitalStatusTd)


    tableBody.appendChild(tableRow);

}

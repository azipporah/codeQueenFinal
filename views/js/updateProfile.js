link = "http://localhost:4040/hospital"


//create a todo
const createTodo = (todo) => {
    const todoData = JSON.stringify(todo)
    fetch(link, {
        method: "POST",
        body: todoData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            // addTodoElement(data)

        }).catch((error) => { console.log(error) })
}



//fetching all the todos
const fetchAllTodos = (todo) => {
    const todoData = JSON.stringify(todo);
    fetch(link, {
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


const hospitalName = document.getElementById('hname');
const hospitalEmail = document.getElementById('hemail');
const hospitalCapacity = document.getElementById('hcapacity');
const hospitalStatus = document.getElementById('hstatus');
const hospitalDistrict = document.getElementById('hdistrict');
const hospitalDirections = document.getElementById('dir');

const save = document.getElementById('hsave');



const tableBody = document.getElementById('tableBody');

// creat a function 'addTodoElement' so that we can reuse the tableRow and todoTd
const addTodoElement = (newhos) => {
    const { hospitalName, hospitalEmail, hospitalDistrict, hospitalCapacity, hospitalStatus, directions} = newhos
    const tableRow = document.createElement("tr");

    const hospitalNameTd = document.createElement("td");
    hospitalNameTd.innerHTML = hospitalName;
    tableRow.appendChild(hospitalNameTd)

    const hospitalEmailTd = document.createElement("td");
    hospitalEmailTd.innerHTML = hospitalEmail;
    tableRow.appendChild(hospitalEmailTd)

    const hospitalCapacityTd = document.createElement("td");
    hospitalCapacityTd.innerHTML = hospitalCapacity;
    tableRow.appendChild(hospitalCapacityTd)

    const hospitalStatusTd = document.createElement("td");
    hospitalStatusTd.innerHTML = hospitalStatus;
    tableRow.appendChild(hospitalStatusTd)

    const hospitalDistrictTd = document.createElement("td");
    hospitalDistrictTd.innerHTML = hospitalDistrict;
    tableRow.appendChild(hospitalDistrictTd)

    const hospitalDirectionsTd = document.createElement("td");
    hospitalDirectionsTd.innerHTML = directions;
    tableRow.appendChild(hospitalDirectionsTd)


    tableBody.appendChild(tableRow);

}

//pick values to given element
// const getElementValue = (element) => {
//     return element.value;
// }

const getElementValue = (element) => {
    return element.value
}

// on button click
save.addEventListener("click", (event) => {
    event.preventDefault();

    // picks the value of the first name
    const hName = getElementValue(hospitalName)
    const hEmail = getElementValue(hospitalEmail)
    const hDistrict = getElementValue(hospitalDistrict)
    const hCapacity = getElementValue(hospitalCapacity)
    const hStatus = getElementValue(hospitalStatus)
    const hDirections = getElementValue(hospitalDirections)

    // const todoValue = getElementValue({ username, email, role, password });
    const todo = { hospitalName: hName, hospitalEmail: hEmail, hospitalDistrict: hDistrict, hospitalCapacity: hCapacity, hospitalStatus: hStatus, directions: hDirections }
    console.log(todo);
    createTodo(todo)// invokes the createTodo function
    // location.replace('login')

    // if (createTodo(todo)) {
    //     res.redirect('/login')
    //     // window.location.href = 'http://localhost:4040/adminPage';
    // }
    // else {
    //     res.redirect('/publicPage');
    //     // window.location.href = 'http://localhost:4040/publicPage';
    // }


})

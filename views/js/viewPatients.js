// link = "http://localhost:4040/confirmedCase"
url = "http://localhost:4040/countDocuments"

//fetching all the todos
const fetchAllTodos = (todo) => {
    const todoData = JSON.stringify(todo);
    fetch("http://localhost:4040/confirmedCase", {
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

// counting the number of patients
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

const tableBody = document.getElementById('tableBody');

const showTotal = (todo) => {
    total.innerHTML=todo
}

// creat a function 'addTodoElement' so that we can reuse the tableRow and todoTd
const addTodoElement = (newCase) => {
    const { patientName, age, district, dateOfEntry, patientContact, nextOfKin, nextOfKinContact, description } = newCase
    const tableRow = document.createElement("tr");

    const PatientnameTd = document.createElement("td");
    PatientnameTd.innerHTML = patientName;
    tableRow.appendChild(PatientnameTd)

    const PatientageTd = document.createElement("td");
    PatientageTd.innerHTML = age;
    tableRow.appendChild(PatientageTd)

    const PatientdistrictTd = document.createElement("td");
    PatientdistrictTd.innerHTML = district;
    tableRow.appendChild(PatientdistrictTd)

    const PatientdoeTd = document.createElement("td");
    PatientdoeTd.innerHTML = dateOfEntry;
    tableRow.appendChild(PatientdoeTd)

    const PatientcontactTd = document.createElement("td");
    PatientcontactTd.innerHTML = patientContact;
    tableRow.appendChild(PatientcontactTd)

    const PatientnokTd = document.createElement("td");
    PatientnokTd.innerHTML = nextOfKin;
    tableRow.appendChild(PatientnokTd)

    const PatientnokcTd = document.createElement("td");
    PatientnokcTd.innerHTML = nextOfKinContact;
    tableRow.appendChild(PatientnokcTd)

    const PatientdescTd = document.createElement("td");
    PatientdescTd.innerHTML = description;
    tableRow.appendChild(PatientdescTd)


    tableBody.appendChild(tableRow);

}

// link = "http://localhost:4040/caseReport"


//create a todo
const createTodo = (todo) => {
    const todoData = JSON.stringify(todo)
    fetch("http://localhost:4040/caseReport", {
        method: "POST",
        body: todoData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            addTodoElement(data)

        }).catch((error) => { console.log(error) })
}

const pName = document.getElementById('p_name');
const pAge = document.getElementById('p_age');
const pContact = document.getElementById('pcontact');
const pDistrict = document.getElementById('rdistrict');
const rContact = document.getElementById('rcontact');
const rDesc = document.getElementById('rdesc');
const rDate = document.getElementById('dor');

const save = document.getElementById('report');



//pick values to given element
const getElementValue = (element) => {
    return element.value
}

// on button click
save.addEventListener("click", (event) => {
    event.preventDefault();

    // picks the value of the first name
    const p_name = getElementValue(pName)
    const p_age = getElementValue(pAge)
    const p_contact = getElementValue(pContact)
    const p_district = getElementValue(pDistrict)
    const r_contact = getElementValue(rContact)
    const r_desc = getElementValue(rDesc)
    const r_date = getElementValue(rDate)

    // const todoValue = getElementValue({ username, email, role, password });
    const todo = { personName: p_name, age: p_age, personContact: p_contact, district: p_district, reporterContact: r_contact, description: r_desc, dateOfReport: r_date }
    console.log(todo);
    createTodo(todo)// invokes the createTodo function
    // location.reload()


})

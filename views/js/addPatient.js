link = "http://localhost:4040/confirmedCase"
// url = "http://localhost:4040/countDocuments"


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


const Patientname = document.getElementById('pname');
const Patientage = document.getElementById('pAge');
const Patientdistrict = document.getElementById('pdistrict');
const Patientdoe = document.getElementById('doe');
const Patientcontact = document.getElementById('pcontact');
const Patientnok = document.getElementById('kin');
const Patientnokc = document.getElementById('kcontact');
const Patientdesc = document.getElementById('pdesc');
const total = document.getElementById('total');

const save = document.getElementById('psave');



//pick values to given element
const getElementValue = (element) => {
    return element.value
}

// on button click
save.addEventListener("click", (event) => {
    event.preventDefault();

    // picks the value of the first name
    const Pname = getElementValue(Patientname)
    const Page = getElementValue(Patientage)
    const Pdistrict = getElementValue(Patientdistrict)
    const Pdoe = getElementValue(Patientdoe)
    const Pcontact = getElementValue(Patientcontact)
    const Pnok = getElementValue(Patientnok)
    const Pnokc = getElementValue(Patientnokc)
    const Pdesc = getElementValue(Patientdesc)

    // const todoValue = getElementValue({ username, email, role, password });
    const todo = { patientName: Pname, age: Page, district: Pdistrict, dateOfEntry: Pdoe, patientContact: Pcontact, nextOfKin: Pnok, nextOfKinContact: Pnokc, description: Pdesc }
    console.log(todo);
    createTodo(todo)// invokes the createTodo function
    location.reload()


})
let existingItems = []; // An array in which all the items we get from localstorage to be set in it.


/*        Function to 'get' items from local storage        */
const getUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'))
}


const getItems = () => {
    let currentUser = getUser();
    return JSON.parse(localStorage.getItem(currentUser.username));
}

/*        Function to 'set' items in local storage        */

const setItem = () => {
    let currentUser = getUser();
    return localStorage.setItem(currentUser.username, JSON.stringify(existingItems));
}

let counter = 0; // counter to set different ids and parameters passed.

/*        Function to get items from local storage and show them on page        */

const localStorageItems = () => {

    let getItem = getItems();

    if (getItem) {

        existingItems = getItem; //setting localstorage getitem to existingItems 
        existingItems.forEach((element) => {

            //creating li and p elements and appending the existing localstorage values into them

            let p = document.createElement('p'); //creating p
            let ul = document.getElementById('list'); //getting ul by id
            let li = document.createElement('li'); //creating li
            let addTxt = document.createTextNode(element.value); //creating text and declaring it the value of existing element
            let editItemInput = document.createElement('input'); //creating input element to edit items

            //creating an input field to edit text we want to.

            //creating an input field to edit text we want to.
            editItemInput.setAttribute('type', 'text'); //setting 'type' attribute 'text' so that the input field 'type' must be 'text' 
            editItemInput.id = `editItemInput${element.key}`; //adding id to edit item input with element.key so every time the input is created the id is the existing key
            editItemInput.style.display = "none"; //displaying edit item input none so it won't show until the edit button is clicked
            editItemInput.className = "editItemInput"; //adding class to edit item input 


            p.className = "para"; //appending addtext value into p
            p.id = "para" + (element.key); //adding id to p with element.key so every time the button is created the id is existing key.
            p.appendChild(addTxt); //appending existing item text



            li.setAttribute("onclick", `check(${element.key})`); //setting onclick attribute on li and declaring function and element.key as parameter so every time the li is created existing function(parameter) is created
            li.id = "li" + (element.key); //adding id to li with element.key so every time the li is created the id is unique
            li.appendChild(editItemInput); //appending edit item input to li
            li.appendChild(p); //appending p to li

            ul.appendChild(li); //appending li to ul


            //creating delete button

            let btn = document.createElement("i"); //creating an I
            let btnTxt = document.createTextNode(""); //creating I text and declaring it empty
            btn.className = "fa fa-trash delete"; // adding icon and manual class to editbtn 
            btn.setAttribute("onclick", `deleteLi(${element.key})`); //setting onclick attribute on delete button and declaring function and element.key as parameter so every time the button is created existing function(parameter) is created
            btn.appendChild(btnTxt); //appending text
            li.appendChild(btn); //appending delete button into li



            //creating edit button

            let editBtn = document.createElement("i"); //creating an I
            let editBtnTxt = document.createTextNode(""); //creating I text and declaring it empty
            editBtn.className = "fa fa-pencil edit"; // adding icon and manual class to editbtn 
            editBtn.setAttribute("onclick", `editLi(${element.key})`); //setting onclick attribute on edit button and declaring function and element.key as parameter so every time the button is created existing function(parameter) is created
            editBtn.appendChild(editBtnTxt); //appending text
            li.appendChild(editBtn); //appending edit button into li

        });
    }
}
localStorageItems(); //calling function to show all the items when the page is loaded.



/*        Add Item on "Enter" when you type something in input.       */

document.getElementById('txtInput').addEventListener('keypress', (ev) => {
    if (ev.key === "Enter") {
        document.getElementById('addBtn').click();
    }
});


/*       A Function to add new item to webpage and localstorage       */

function add() {

    let addItemInput = document.getElementById('txtInput');

    if (!addItemInput.value) {
        alert("Please Write Something");
    } else {
        counter++ //incrementing counter to create new ID or parameter on every click

        //creating object with unique 'key' and 'value' to store in localstorage 
        let obj = {
            key: counter, //setting counter to key so that the key shoud be unique on every time the obj is created
            value: `${addItemInput.value}` //setting the add item input value to value
        }

        existingItems.push(obj); //pushing object into the localstorage array
        setItem(); //calling the function to add item in localstorage



        //creating li and p elements and appending the input into them
        let p = document.createElement('p'); //creating p
        let ul = document.getElementById('list'); //getting ul by id
        let li = document.createElement('li'); //creating li
        let addTxt = document.createTextNode(addItemInput.value); //creating text and declaring it the value of add item input
        let editItemInput = document.createElement('input'); //creating input element to edit items

        //creating an input field to edit text we want to.
        editItemInput.setAttribute('type', 'text'); //setting 'type' attribute 'text' so that the input field 'type' must be 'text' 
        editItemInput.id = `editItemInput${counter}`; //adding id to edit item input with counter so every time the button is created the id is unique
        editItemInput.style.display = "none"; //displaying edit item input none so it won't show until the edit buttone is clicked
        editItemInput.className = "editItemInput"; //adding class to edit item input 


        p.className = "para"; //appending addtext value into p
        p.id = "para" + (counter); //adding id to p with counter so every time the button is created the id is unique
        p.appendChild(addTxt); //appending 


        li.setAttribute("onclick", `check(${counter})`); //setting onclick attribute on li and declaring function and counter as parameter so every time the li is created new function(parameter) is created
        li.id = "li" + (counter); //adding id to li with counter so every time the li is created the id is unique
        li.appendChild(editItemInput); //appending edit item input to li
        li.appendChild(p); //appending p to li

        ul.appendChild(li); //appending li to ul


        //creating delete button
        let btn = document.createElement("i"); //creating an I
        let btnTxt = document.createTextNode(""); //creating I text and declaring it empty
        btn.className = "fa fa-trash delete"; // adding icon and manual class to editbtn 
        btn.setAttribute("onclick", `deleteLi(${counter})`); //setting onclick attribute on delete button and declaring function and counter as parameter so every time the button is created new function(parameter) is created
        btn.appendChild(btnTxt); //appending text
        li.appendChild(btn); //appending delete button into li


        //creating edit button
        let editBtn = document.createElement("i"); //creating an I
        let editBtnTxt = document.createTextNode(""); //creating I text and declaring it empty
        editBtn.className = "fa fa-pencil edit"; // adding icon and manual class to editbtn 
        editBtn.setAttribute("onclick", `editLi(${counter})`); //setting onclick attribute on edit button and declaring function and counter as parameter so every time the button is created new function(parameter) is created
        editBtn.appendChild(editBtnTxt); //appending text
        li.appendChild(editBtn); //appending edit button into li


    }

    //resetting the input field
    addItemInput.value = "";

}

/*        a function to delete the item when the "Delete" button is clicked      */

function deleteLi(value) {
    document.getElementById('li' + value).remove(); //it will delete the item

    // deleting the item from localstorage
    existingItems = getItems();
    existingItems.forEach((element, index, array) => { //applying foreach loop to existing Item Array so that we can get it's element(obj) index and whole array.
        if (element.key === value) { //condition to check if item key is equals to the parameter(value)
            array.splice(index, 1); //then splicing the object (key and value) from localstorage ----- it's like deleting it
        }
    });
    let currentUser = getUser();
    localStorage.setItem(currentUser.username, JSON.stringify(existingItems)); //setting the new values in localstorage array



}

/*        A function to clear all items from Webpage and localstorage when "Clear All" button is clicked    */

function clearAll() {
    let currentUser = getUser();
    localStorage.clear(currentUser.username); //clearing localstorage
    document.getElementById('list').innerHTML = ''; //clearing all items
}

/*        A function to edit the item on webpage and localstorage when "Edit" button Icon is clicked   */

function editLi(value) {

    let item = document.getElementById('para' + value);
    item.style.display = "none"; //getting item and displaying it none.

    let editItemInput = document.getElementById('editItemInput' + value);
    editItemInput.style.display = "block"; //getting edit input and displaying it block
    editItemInput.value = item.innerText; //setting item value into edit input value
    editItemInput.focus(); //focusing on edit input when button is clicked

    //adding event listner blur so when you click out of the input field the values changed stays
    editItemInput.addEventListener('blur', function () {
        item.innerText = editItemInput.value; //setting item to new edit input value
        existingItems = getItems(); //getting items from localstorage
        existingItems.forEach((element) => { //applying foreach loop to existing Item Array so that we can get it's element(obj) index and whole array.
            if (element.key === value) { //checking if item key is equals to the parameter(value) called.
                element.value = editItemInput.value; //editing the localstorage item value to new edit input value 
            }
        });
        let currentUser = getUser();
        localStorage.setItem(currentUser.username, JSON.stringify(existingItems)); //setting new item in localstorage
        editItemInput.style.display = "none"; //displaying edit input none
        item.style.display = "block"; //displaying edited item block
    })

}


// adding done style to list

function check(value) {
    //need to add a function for when we click on "Edit" button it should not toggle class "checked" to list.

    let li = document.getElementById('li' + value);
    li.classList.toggle('checked');

    existingItems.forEach((element) => { //applying foreach loop to existing Item Array so that we can get it's element(obj) index and whole array.
        if (element.key === value) { //checking if item key is equals to the parameter(value) called.
            //editing the localstorage item value to new edit input value 
        }
    });

}
var form = document.getElementById("myform");
var myinput = document.getElementById("myinput");
var UL = document.getElementById("UL");

form.addEventListener("submit", function (event) {

    event.preventDefault()

    createitem(myinput.value)
})

function createitem(inputitems) {
    var items = `<li>${inputitems}<button onclick="deleteElement(this)">Delete</button></li>`



    UL.insertAdjacentHTML("beforeend", items)
    myinput.value = ""
    myinput.focus()
}
function deleteElement(ElementToDelete) {
    ElementToDelete.parentElement.remove()
}
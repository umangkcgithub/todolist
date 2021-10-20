function getupdate() {
    todo = document.getElementById('todolist').value;
    desc = document.getElementById('Discriptionid').value;
    console.log("updating");
    if (localStorage.getItem("itemsJson") == null) {
        itemJsonArray = [];
        itemJsonArray.push([todo, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
        todo.value = "";
        desc.value = "";
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([todo, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
        todo.value = "";
        desc.value = "";
    }
    update();

}
function update() {
    if (localStorage.getItem("itemsJson") == null) {
        itemJsonArray = [];

        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);

    }
    let tablebody = document.getElementById("tablecont");
    str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td> <button type="submit" class="btn btn-primary " onclick="deleted(${index})">Delete</button> </td>
            </tr>`;

    });
    tablebody.innerHTML = str;

}
addlist = document.getElementById('addbtn');
addlist.addEventListener("click", getupdate);
update();


function deleted(itemIndex) {
    console.log("deleting")
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    update();
}
function clearstr() {


    var conf = confirm("Do you want to clear the list")

    if (conf == true) {
        localStorage.clear();
        console.log("clearing");
    }
    else {
        return false;
    }
    update();
}

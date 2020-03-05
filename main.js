var totalOfItems = 0;

function updateItemstatus(){
    var chId = this.id.replace('cb_', '');
    var itemText = document.getElementById('item_' + chId);

    if(this.checked){
        itemText.className = 'checked';
    } else {
        itemText.className = '';
    }
}

function renameItem(){
    //this === span
    var newText = prompt("항목을 수정하시겠습니까?");
    if(!newText || newText === "" || newText === " ")return false; // blank 방지
    var spanId = this.Id.replace('pencilIcon_', '');
    var span = document.getElementById('item_' + spnaId);

    span.innerText = newText;
}


var donelist = document.getElementById('donelist');
function moveItem(){
    //this === span
    var listItemId = this.id.replace('li_', '');
    var listItem = document.getElementById('li_' + listItemId);
    var listItemParentId = listItem.parentElement;
    //console.log(listItemParentId);
    if(listItemParentId == donelist){
        todolist.appendChild(listItem);
    } else {
        donelist.appendChild(listItem);
    }
}

function deleteItem(donelist){
    //this === li
    var listItemId = this.id.replace('minusIcon_', '');
    document.getElementById('li_' + listItemId).style.display = "none";
}

function mouseover(){
    //this === li
    var pencilIconId = this.id.replace('li_', '');
    var pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
    var minusIcon = document.getElementById('minusIcon_' + pencilIconId);

    pencilIcon.style.visibility = 'visible';
    minusIcon.style.visibility = 'visible';
}

function mouseout(){
    //this === li
    var pencilIconId = this.id.replace('li_', '');
    var pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
    var minusIcon = document.getElementById('minusIcon_' + pencilIconId);

    pencilIcon.style.visibility = 'hidden';
    minusIcon.style.visibility = 'hidden';
}

function addNewItem(list, itemText){
    totalOfItems++;

    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = moveItem;
    listItem.addEventListener('mouseover', mouseover);
    listItem.addEventListener('mouseout', mouseout);

    var span = document.createElement('span');
    span.id = 'item_' + id;
    span.innerText = itemText;

    var pencilIcon = document.createElement('i');
    pencilIcon.className = 'fas fa-edit';
    pencilIcon.id = 'pencilIcon_' + id;
    pencilIcon.onclick = renameItem;

    var minusIcon = document.createElement('i');
    minusIcon.className = 'fas fa-minus';
    minusIcon.id = 'minusIcon_' + id;
    minusIcon.onclick = deleteItem;


    listItem.appendChild(span);
    listItem.appendChild(minusIcon);
    listItem.appendChild(pencilIcon);
    list.appendChild(listItem);
}

var inputText = document.getElementById('inputText');
inputText.focus( );

inputText.onkeyup = function(event){
    //Event.which (13) === 엔터키
    if(event.which === 13){
        var itemText = inputText.value;
        if(!itemText || itemText === "" || itemText === " ") return false; //blank 방지
        addNewItem(document.getElementById('todolist'), itemText);
        inputText.focus();
        inputText.Select();
    }
};

var btnNew = document.getElementById('btnAdd');
btnNew.onclick = addNewItem;

var totalItems = 0;

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

    this.innerText = newText;
}

function removeItem(){
    //this === span
    var listItemId = this.id.replace('li_', '');
    document.getElementById('li_' + listItemId).style.display = "none";
}

function addNewItem(list, itemText){

    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    totalItems++;

    var listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = removeItem;

    var checkBox = document.createElement('input');
    checkBox.type = 'checkBox';
    checkBox.id = 'cb_' + totalItems;
    checkBox.onclick = updateItemstatus;

    var span = document.createElement('span');
    span.id = 'item_' + id;
    span.innerText = itemText;
    span.onclick = renameItem;


    listItem.appendChild(checkBox);
    listItem.appendChild(span);
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

var btnNew = document.getElementById('btnAdd');

btnNew.onclick = function(){
    var inputText = document.getElementById('inputText');
    var itemText = inputText.Value;

    if(!itemText || itemText === "" || itemText ===" ") return false; // blank 방지


    addNewItem(document.getElementById('todolist'), itemText);

};

    var list = document.getElementById('todolist');
    list.appendChild(listItem);

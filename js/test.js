// 代入する
// 入力する場所はinputに 後々変更するからletにする
let inputValue = document.querySelector('.input');
// 登録ボタン
const add = document.querySelector('.add');
// 入力した項目を表示する場所
const container = document.querySelector('.container');

if(localStorage.getItem("todos") == undefined){
     let todos = [];
     localStorage.setItem("todos", JSON.stringify(todos));
}

let todosEX = localStorage.getItem("todos");
let todos = JSON.parse(todosEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	let itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

        // 文章を編集することができる
    	let edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "編集";
    	edit.addEventListener('click', () => this.edit(input, name));

        // 文章を削除することができる
    	let remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "削除";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


for (let v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}

// 初期設定で例題として表示することができる
new item("商品販売"); 
new item("特許出願"); 
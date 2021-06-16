'use strict'
{
    const now = new Date();
    const min = String(now.getMinutes()).padStart(2, '0');
    const hour = now.getHours();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const output = `${year}/${month}/${day} ${hour}:${min}`;
    const toDos = document.getElementById('todos');
    let returnKey;
    let returnTask;
    let submit = document.getElementById("submit");
    let add = document.getElementById('add-form');
    let submit = document.getElementById('submit');
    
// todo取り出し
    function b() {
      for(let i = 0; i < localStorage.length; i++) {
        returnTask =  localStorage.getItem(i);
        let firstLi1 = `<li class = "dotask"><span class="time">${output}</span><span class="tasks" id = ${i}>${returnTask}</span><i class="fas fa-trash-alt fa-fw fa-2x delete faa-shake animated-hover" id="fonta"></i></li>`;
        Up(firstLi1);
      }
    }
// todo表示関数。
    function Up(firstLi) {
      toDos.insertAdjacentHTML('beforeend', firstLi);
    }
    b();
   
// todo入力、保存
  submit.addEventListener('click', e => {
    let form = document.forms[0].elements[0];
    let word = form.value;
    if(word === ""){
      alert("タスクを入力してください。");
    }else{
      e.preventDefault();
      let i = localStorage.length;
      returnTask = word;
      let firstLi2 = `<li class = "dotask"><span class="time">${output}</span><span class="tasks" id = ${i}>${returnTask}</span><i class="fas fa-trash-alt fa-fw fa-2x delete faa-shake animated-hover" id="fonta"></i></li>`;
      localStorage.setItem(`${i}`,`${returnTask}`);
      Up(firstLi2);
      form.value = "";
    }
  }); 

  // todo削除
  // const list = document.getElementById('todos');
  toDos.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
      const del = e.target.previousElementSibling.id
      // console.log(del.id);
      localStorage.removeItem(del);
    };
  });
}

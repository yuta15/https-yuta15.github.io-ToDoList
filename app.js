'use strict'
{
  const now = new Date();
    const min = String(now.getMinutes()).padStart(2, '0');
    const hour = now.getHours();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const output = `${year}/${month}/${day} ${hour}:${min}`;




  //localstrage出力
  function local() {
    for(let key in localStorage) {
      if(localStorage.hasOwnProperty(key)){
        // console.log(key);
        const firstli = `<li class = "dotask"><span class="time">${output}</span><span class="tasks" id = ${key}>
        ${key}</span><i class="fas fa-trash-alt fa-fw fa-2x delete faa-shake animated-hover" id="fonta"></i></li>`;
        document.getElementById('todos').insertAdjacentHTML('beforeend', firstli);
      };
    };
    // localStorage 
  };
  local();
 
  
  
  // フォーム入力、todo追加、
  document.getElementById('add-form').onsubmit = function(event) {
    let todoText = document.getElementById("todotext");
    if(todoText.value === ""){
      alert("タスクを入力してください。");
      
    }else{
      event.preventDefault();
      const li = `<li class = "dotask"><span class="time">${output}</span><span class="tasks" id = ${newTask}>${newTask}</span><i class="fas fa-trash-alt fa-fw fa-2x delete faa-shake animated-hover" id="fonta"></i></li>`;
      document.getElementById('todos').insertAdjacentHTML('beforeend', li);
      localStorage.setItem(`${newTask}`,`${li}`);
    }
   
    
    // 追加したTODOを配列化
    const newTask = document.getElementById('add-form').add.value;
    // let todo = [];
    // todo.push(newTask);
    // for(let item of todo) {
    //   console.log(item);
    // }
    
    // リスト追加
     // lacalstrage保存
    //  console.log(localStorage.getItem(`${newTask}`));



    // フォーム初期化
    function crearText() {
      let textForm = document.getElementById('todotext').value = '';
    }
    crearText();

  }

  // todo削除
  const list = document.getElementById('todos');
  list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
      const del = e.target.previousElementSibling.id
      // console.log(del.id);
      localStorage.removeItem(del);
    };
  });
}

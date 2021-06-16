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
    let add = document.getElementById('add-form');
    let submit = document.getElementById('submit');
    
    // キーとLengthを受け取れば中身全部とってきてくれる関数。
    

    function b() {
      for(let i = 0; i < localStorage.length; i++) {
        let returnDataList =  JSON.parse(localStorage.getItem(i));
        console.log(returnDataList);
        let firstLi1 = `<li class = "dotask"><span class="time">${returnDataList.time}</span><span class="tasks" id = ${i}>${returnDataList.value}</span><i class="fas fa-trash-alt fa-fw fa-2x delete faa-shake animated-hover" id="fonta"></i></li>`;
        Up(firstLi1);
      }
    }
    

    function Up(firstLi) {
      toDos.insertAdjacentHTML('beforeend', firstLi);
    }
    b();

  
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
      let dataList =  {
        value: returnTask,
        time: output,
      }
      localStorage.setItem(i, JSON.stringify(dataList));
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

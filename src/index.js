document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('Create New Task', (e) =>{
    e.preventDefault();
toDO(e.target.new_todo.value)
  })
});

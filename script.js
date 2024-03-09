function adicionartarefa(){
    let ulTarefas = document.getElementById('listaTarefas')

    let task = window.prompt("Digite sua tarefa")
    let taskItem = document.createElement('li')
    let taskLabel =  document.createElement('label')
    let taskButton = document.createElement('button')
    taskLabel.innerHTML = task
    taskButton.innerHTML = "excluir"

    taskButton.addEventListener('click', function() {
        taskItem.remove();
    });

    taskItem.appendChild(taskLabel)
    taskItem.appendChild(taskButton)
    ulTarefas.appendChild(taskItem)
}
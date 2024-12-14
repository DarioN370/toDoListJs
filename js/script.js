function adicionarTarefa(){
    let mensagem = "Tarefa adicionada com sucesso !!!";  // definindo a variavel mensagem com a mensagem que eu quero 
   

    let inputTarefa = document.getElementById("inputTarefa"); //aqui eu coloco que o inpuTarefa vai pegar o valor do input
    let tarefa = inputTarefa.value; //aqui eu pego o que o user digitou no meu input e atribuo ele na variavel tarefa 
    document.getElementById("mensagem").textContent = mensagem; //aqui eu estou exibindo a tarefa que o user digitou

    let listaTarefas = document.getElementById("listaTarefas") //aqui ele pega o elemento com o id listaTarefas e armazena na var listaTarefas
    let novaTarefa = document.createElement("li") //vou criar o elemento que esta entre parenteses

    novaTarefa.textContent = tarefa //aqui eu pego o novaTarefa e peço pra ele escrever com o textContent a variavel tarefa, assim ele vai listar certo

    listaTarefas.appendChild(novaTarefa) //aqui eu peço para que o elemento pai no caso a UL, crie elementos filhos, que são as LI




    inputTarefa.value = ""; //aqui eu peço para depois que user digitar, e dps que o codigo rodar, eu mando ele esvaziar o campo de input
} 
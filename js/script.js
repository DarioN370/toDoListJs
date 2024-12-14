function adicionarTarefa(){

    const inputTarefa = document.getElementById("inputTarefa"); //aqui eu coloco que o inpuTarefa vai pegar o valor do input
    let tarefa = inputTarefa.value.trim(); // o trim retira espaços em branco no inicio e fim do texto, aqui eu pego o que o user digitou no meu input e atribuo ele na variavel tarefa 
    
    const mensagem = document.getElementById("mensagem");
    

    // se o valor do input for vazio, então mostre uma mensagem de erro para o user 
    if (tarefa == ""){// duas aspas é considerado vazio  -  Sinal de dois iguais é pra comparar igualdade
        let mensagemErro = "Digite uma tarefa para adiciona-la !!!!!!";  // definindo a variavel mensagem com a mensagem que eu quero 
        mensagem.textContent = mensagemErro  //aqui eu estou exibindo que a tarefa precisa ser adicionada
        mensagem.style.color = "#a34743"
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso.";  // definindo a variavel mensagem com a mensagem que eu quero 
        mensagem.textContent = mensagemSucesso; //aqui eu estou exibindo que a tarefa foi adicionada
        mensagem.style.color = "#28a745" 

        const listaTarefas = document.getElementById("listaTarefas"); //aqui ele pega o elemento com o id listaTarefas e armazena na var listaTarefas
        let novaTarefa = document.createElement("li"); //vou criar o elemento que esta entre parenteses
        novaTarefa.textContent = tarefa; //aqui eu pego o novaTarefa e peço pra ele escrever com o textContent a variavel tarefa, assim ele vai listar certo
        listaTarefas.appendChild(novaTarefa); //aqui eu peço para que o elemento pai no caso a UL, crie elementos filhos, que são as LI
    }


    


    





    inputTarefa.value = ""; //aqui eu peço para depois que user digitar, e dps que o codigo rodar, eu mando ele esvaziar o campo de input
};
let valorInput = document.getElementById("inputTarefa");
let valorSelect = document.getElementById("tipoMetaInput");
let botaoAdc = document.getElementById("btnAdc");
let warnerSpan = document.getElementById("warnerSpan");
let contador = 0;

botaoAdc.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(valorInput.value + " " + valorSelect.value);
  ++contador;

  if (valorSelect.value == "tipo") {
    warnerSpan.innerHTML = "Escolha um tipo de Meta!";
  } else if (valorInput.value == "") {
    warnerSpan.innerHTML = "Escreva uma Meta!";
  } else {
    warnerSpan.innerHTML = "";

    let novoItem = `<div class="tarefaBox" id="t${contador}">
          <span class="material-symbols-outlined" class="checkIcon" id="icon${contador}" onclick="marcarTarefa(${contador})">
              radio_button_unchecked
          </span>
          <p class="nomeTarefa" onclick="marcarTarefa(${contador})">${valorInput.value}</p>
          <button id="deleteBtn${contador}" onclick="deletar(${contador})">
              <span class="material-symbols-outlined deleteIcon">
              delete
              </span>
          </button>
      </div>`;

    function containerTarefas(idContainer) {
      let containerTaf = document.getElementById(`${idContainer}`);
      return containerTaf;
    }

    containerTarefas(valorSelect.value).innerHTML += novoItem;
    valorInput.value = "";
    valorInput.focus();
  }
});

function deletar(id) {
  var tarefa = document.getElementById(`t${id}`);
  tarefa.remove();
  console.log(tarefa);
}

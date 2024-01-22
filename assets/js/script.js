let contador = 0;

function saveToLocalStorage() {
    // Salvar informações relevantes no localStorage
    localStorage.setItem("contador", contador);

    // Salvar o conteúdo do containerTarefas no localStorage
    localStorage.setItem("ct1", document.getElementById("ct1").innerHTML);
    localStorage.setItem("ct2", document.getElementById("ct2").innerHTML);
    localStorage.setItem("ct3", document.getElementById("ct3").innerHTML);
  }

  function loadFromLocalStorage() {
    // Carregar informações relevantes do localStorage
    contador = parseInt(localStorage.getItem("contador")) || 0;

    // Carregar o conteúdo do containerTarefas do localStorage
    document.getElementById("ct1").innerHTML = localStorage.getItem("ct1") || "";
    document.getElementById("ct2").innerHTML = localStorage.getItem("ct2") || "";
    document.getElementById("ct3").innerHTML = localStorage.getItem("ct3") || "";
  }

function deletar(id) {
  var tarefa = document.getElementById(`t${id}`);
  tarefa.remove();

  // Salvar no localStorage após excluir uma tarefa
  saveToLocalStorage();

//   console.log(tarefa);
}

function marcarTarefa(id) {
  var tarefa = document.getElementById(`t${id}`);
  var icon = document.getElementById(`icon${id}`);
  var classe = tarefa.getAttribute("class");
  if (classe == "tarefaBox") {
    tarefa.classList.add("clicado");
    icon.innerHTML = "task_alt";
    tarefa.parentNode.appendChild(tarefa);
  } else {
    tarefa.classList.remove("clicado");
    icon.innerHTML = "radio_button_unchecked";
  }

  // Salvar no localStorage após marcar uma tarefa
  saveToLocalStorage();
}

document.addEventListener("DOMContentLoaded", function () {
  let valorInput = document.getElementById("inputTarefa");
  let valorSelect = document.getElementById("tipoMetaInput");
  let botaoAdc = document.getElementById("btnAdc");
  let warnerSpan = document.getElementById("warnerSpan");

  // Carregar dados do localStorage ao carregar a página
  loadFromLocalStorage();

  botaoAdc.addEventListener("click", function (e) {
    e.preventDefault();
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

      // Salvar no localStorage após adicionar uma tarefa
      saveToLocalStorage();

      valorInput.value = "";
      valorInput.focus();
    }
  });


});

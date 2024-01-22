export function adcTarefas() {
    let valorInput = document.getElementById('inputTarefa');
    let valorSelect = document.getElementById('tipoMetaInput');
    let botaoAdc = document.getElementById('btnAdc');

    botaoAdc.addEventListener('click', function(e){
        e.preventDefault();
        console.log(valorInput.value + " " + valorSelect.value);
        let novoItem = `<div class="tarefaBox">
        <span class="material-symbols-outlined" class="checkIcon">
            radio_button_unchecked
        </span>
        <p class="nomeTarefa">${valorInput.value}</p>
        <button>
            <span class="material-symbols-outlined deleteIcon">
            delete
            </span>
        </button>
    </div>`;

        function containerTarefas(idContainer) {
            let containerTaf = document.getElementById(`${idContainer}`)
            return containerTaf;
        }

        containerTarefas(valorSelect.value).innerHTML = novoItem;

        
    });
};
import { NovoItemLista } from "./editarLista.js";
const novoItem = new NovoItemLista();
const ulLista = document.querySelector('.ulDaLista');
const botaoAdiciona = document.querySelector('.adicionaItem');
botaoAdiciona.addEventListener('click', () => {
    novoItem.criarItem();
    novoItem.LimpaInputFocus();
});
ulLista.addEventListener('mousedown', (botaoExcluir) => {
    novoItem.removerItem(botaoExcluir, ulLista);
});
// ------------------------------------------------------------
const areaInserirNome = document.querySelector('.insertName');
const inputNomeDaLista = document.querySelector('#ListName');
const botaoCriaNomeLista = document.querySelector('.criarNome');
const nomeDaLista = document.querySelector('.ListNameHeader');
const botaoEditaNomeLista = document.querySelector('.bxs-pencil');
if (localStorage.ListName == 'undefined') {
    areaInserirNome.style.display = 'flex';
}
botaoCriaNomeLista.addEventListener('click', () => {
    localStorage.ListName = inputNomeDaLista.value;
    nomeDaLista.textContent = inputNomeDaLista.value;
    areaInserirNome.style.transition = '.3s';
    areaInserirNome.style.opacity = '0';
    setTimeout(() => {
        areaInserirNome.style.display = 'none';
    }, 300);
});
nomeDaLista.textContent = localStorage.ListName;
botaoEditaNomeLista.addEventListener('click', () => {
    setTimeout(() => {
        areaInserirNome.style.display = 'flex';
        inputNomeDaLista.focus();
    }, 300);
    areaInserirNome.style.opacity = '1';
});

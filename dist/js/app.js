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

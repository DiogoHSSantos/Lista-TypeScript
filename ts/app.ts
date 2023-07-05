
import { NovoItemLista } from "./editarLista.js";

const novoItem = new NovoItemLista();
const ulLista:HTMLElement = document.querySelector('.ulDaLista');
const botaoAdiciona:HTMLElement = document.querySelector('.adicionaItem');

botaoAdiciona.addEventListener('click', ()=>{
    novoItem.criarItem();
    novoItem.LimpaInputFocus()
});

ulLista.addEventListener('mousedown', (botaoExcluir:Event) =>{
    novoItem.removerItem(botaoExcluir, ulLista)
})
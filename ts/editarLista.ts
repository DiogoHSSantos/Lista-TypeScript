export class NovoItemLista{
    private _item:HTMLInputElement
    
    constructor(){
        this._item = document.querySelector('#ItemLista');
    }
   
    criarItem(){
        const UlList:HTMLElement = document.querySelector('.ulDaLista')


        const newLi:HTMLElement = document.createElement('li');
        const trashIcon:HTMLElement = document.createElement('i');

        newLi.classList.add('liDaLista');

        trashIcon.classList.add('bx');
        trashIcon.classList.add('bxs-trash-alt');

        newLi.textContent = this._item.value
        newLi.appendChild(trashIcon);

        UlList.appendChild(newLi);


    }

    removerItem(botaoExcluir:Event, ulLista:HTMLElement){
        let _botaoExcluir:any = ulLista.querySelectorAll('.bxs-trash-alt');
        for(let i = 0 ; i < _botaoExcluir.length ; i++){
            botaoExcluir = _botaoExcluir[i];

            let liLista = _botaoExcluir[i].parentNode;

            _botaoExcluir[i].addEventListener('click', ()=>{
                liLista.remove()
            })
        }
    }

    LimpaInputFocus(){
        this._item.value = '';
        this._item.focus();
    }
}

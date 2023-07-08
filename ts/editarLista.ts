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

            let liLista:HTMLElement = _botaoExcluir[i].parentNode;

            _botaoExcluir[i].addEventListener('click', ()=>{
                liLista.style.transition = '.4s';
                liLista.style.opacity = '0'
                liLista.style.transform = 'translateX(-120px)';
                setTimeout(() => {
                    liLista.remove()
                }, 300);
                
            })
        }
    }

    LimpaInputFocus(){
        this._item.value = '';
        this._item.focus();
    }

}

export default class YouTube { // основной класс
    
    constructor(
        private appElement: HTMLElement | null
    ){
        if(!appElement){
          this.appElement = document.createElement('div')  
        }        
    }

    init(){}
    showContent(){}
    showMenu(){}
    render(){
        this.showContent()
        this.showMenu()
    }
}
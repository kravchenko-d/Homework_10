import Menu from "./Menu"

export default class YouTube { // основной класс
    
    constructor(
        private readonly appElement: HTMLElement | null,
        private readonly menu = new Menu(),
        private readonly menuElement = document.createElement('div')
    ){
        if(!appElement){
          this.appElement = document.createElement('div')  
        }
        this.init()
    }

    init(){
        //style
        this.appElement?.classList.add('youtube')
        this.menu.element.classList.add('menu-content')
        this.menuElement.classList.add('menu')

        //mount
        this.appElement?.appendChild(this.menu.element)
        this.appElement?.appendChild(this.menuElement)

        //mock
        this.menu.mocker()

        this.render()
    }
    showContent(){}
    showMenu(){}
    render(){
        this.showContent()
        this.showMenu()

        this.menu.render()
    }
}
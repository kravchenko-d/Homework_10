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
        // this.init() - создает второй span, либо можно отключить youtube.init() в main.ts
    }

    init(){
        //style
        this.appElement?.classList.add('youtube')
        this.menu.element.classList.add('menu')
        this.menuElement.classList.add('menu-content')

        //mount
        this.appElement?.appendChild(this.menu.element)
        this.appElement?.appendChild(this.menuElement)

        //mock
        this.menu.mocker()

        this.render()
    }
    private showContent(){
        const video = this.menu.activeContent
        const videos = video?.videoList ?? []

        const allVideos = document.createElement('div')

        for(let video of videos){
            video.render()
            allVideos.appendChild(video.element)            
        }

        this.menuElement.appendChild(allVideos)
    }
    showMenu(){}
    render(){
        this.showContent()
        this.showMenu()

        this.menu.render()
    }
}
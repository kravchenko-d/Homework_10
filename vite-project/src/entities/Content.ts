import Video from "./Video";

export default class Content { //поле с подборкой видео
    constructor(
        private videos: Video[] = [],
        private isActive: boolean = false, // выбранная категория
        private readonly el: HTMLDivElement = document.createElement('div')
    ){}

    get element(){
        return this.el
    }

    set active(val: boolean){
        this.isActive = val
    }

    init(){}
    render(){
        this.el.classList.add('category')

        const icon = document.createElement('div')
        const name = document.createElement('div')

        this.el.appendChild(icon)
        this.el.appendChild(name)
    }
}
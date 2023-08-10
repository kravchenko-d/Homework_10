import Video from "./Video";

export default class Content { //поле с подборкой видео
    constructor(
        private el: HTMLDivElement = document.createElement('div'),
        private videos: Video[] = [],
        private isActive: boolean = false
    ){}

    set active(val: boolean){
        this.isActive = val
    }

    init(){}
    render(){}
}
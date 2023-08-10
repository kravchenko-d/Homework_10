export default class Menu {
    constructor(
        private el: HTMLDivElement = document.createElement('div'),
        private list: any[] = [],
        private active: boolean
    ){}

    set activeTheme(val: boolean){
        this.active = val
    }

    init(){}
    render(){}
}
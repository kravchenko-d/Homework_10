import Content from "./Content"
import Video from "./Video"

export default class Menu {
    constructor(
        private readonly el: HTMLDivElement = document.createElement('div'),
        private list: Content [] = [],
        private active: Content | null = null
        
    ){}

    get element(){
        return this.el
    }

    get activeContent(): Content | null {
        return this.active
    }

    set activeTheme(val: Content){
        this.active = val
    }

    set menu(val: Content[]){
        this.list = val
    }

    init(){}
    render(){
        for(let content of this.list){
            this.el.appendChild(content.element)
            content.render()
        }
    }

    mocker(){
        const videos: Video [] = []
        const previews = ['https://i.ytimg.com/vi/teGzrclRBBA/hq720.jpg',
         'https://i.ytimg.com/vi/oDLWt1xQ1pA/hq720_live.jpg']

        const titles = ['Life Reset Episode 2',
        'SHISEIDO Tahiti Pro pres by Outerknown 2023 - Day 2']

        const channels = ['Paul Rodriguez',
        'World Surf League']

        const lengths = ['25:49', '59:59']

        const links = ['https://www.youtube.com/watch?v=teGzrclRBBA',
        'https://www.youtube.com/watch?v=oDLWt1xQ1pA']

        const views = [58370, 3915]

        const dates = ['2023/08/14', '2023/08/15']


        for(let i = 0; i < 2; i++){
            const video = new Video(
                null,
                previews[i],
                titles[i],
                channels[i],
                lengths[i],
                links[i],
                views[i],
                dates[i],
                i
            )
            videos.push(video)
            debugger
        }        

        const content = new Content(videos)
        this.list.push(content)
    }
}
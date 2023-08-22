import Content from "./Content";

export default class Video {
    constructor(
        private content: Content | null = null,
        private preview: string, // ссылка на картинку
        private title: string,
        private channel: string,
        private length: string,
        private link: string, // ссылка на видео
        private views: number,
        private date: string,
        private id: number = -1
    ){}

    render(){}
}








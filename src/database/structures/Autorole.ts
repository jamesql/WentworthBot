export default class Autorole {
    id: string;
    text: string;
    constructor(d: any) {
        this.id = d.id;
        this.text = d.text;
    }
}

export {Autorole};
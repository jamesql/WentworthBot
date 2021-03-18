export default class Birthday {
    id: string;
    uid: string;
    day: Number;
    month: Number;
    year: Number;
    constructor(d: any) {
        this.id = d.id;
        this.uid = d.uid;
        this.day = d.day;
        this.month = d.month;
        this.year = d.year;
    }

    checkIfBday() {

    }
}

export {Birthday};
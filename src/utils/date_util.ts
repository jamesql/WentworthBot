
Object.defineProperty(Date.prototype, "toYMD", {
    async value(this: Date) {
        // get vars as strings
        let y: String = String(this.getFullYear()), 
        m: String = String(this.getMonth() + 1), 
        d: String = String(this.getDate());

        // Convert to double digits
        m.length == 1 ? m=`0${m}` : m=m;
        d.length == 1 ? d=`0${d}` : d=d;

        // Return YYYY-MM-DD
        return `${y}-${m}-${d}`;
    }
});

export default null;
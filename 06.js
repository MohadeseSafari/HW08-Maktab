//1

function Site(siteName, bookName) {
    this.siteName = siteName,
    this.bookName = bookName
};
Site.prototype = {
    get fullName() {
        return `Welcome to ${this.siteName},${this.bookName}`;
    },
    set fullName(name) {
        let names = name.split(" ");
        this.siteName = names[0];
        this.bookName = names[1];
    }
};
let example1 = new Site();
example1.fullName = "W3Docs JavascriptBook";

console.log(example1.fullName);



//2
let site = {
    siteName: "W3Docs",
    bookName: "Javascript book",
    get fullName() {
        return `Welcome to ${this.siteName},${this.bookName}`;
    }
};
console.log(site.fullName);




function Site(siteName, bookName) {
    this.siteName = siteName,
        this.bookName = bookName

    Object.defineProperty(this, "fullName", {
        set: function (value) {
            [
                this.siteName,
                this.bookName,
            ] = value.split(" ");
        },
        get: function () {
            return `${this.siteName} ${this.bookName}`;
        },
    });
}

let example2 = new Site();
example2.fullName = "W3Docs Javascript book";
console.log(example2.fullName);




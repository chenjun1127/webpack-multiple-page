export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return (`My name is ${this.name},my age is ${this.age}!`);
    }
}

export function sum(x, y) {
    return x + y;
}
export var PI = 3.1415926;

const menu = [{
    name: '首页',
    linkUrl: 'index.html'
}, {
    name: '公司简介',
    linkUrl: 'home.html'
}, {
    name: '关于我们',
    linkUrl: 'about.html'
}]

export const createMenu = () => {
    if (menu && menu.length > 0) {
        var html = ''
        menu.map((item, index) => {
            html += `<li class='item-${index}'><a href=${item.linkUrl}>${item.name}</a></li>`;
        })
        return html;
    }
}
 
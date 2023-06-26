/*
    4. Tạo đối tượng menu gồm các thuộc tính width, height và title. 
    Xây dựng hàm nhân 2 giá trị các thuộc tính có giá trị là number
*/
function Menu (title, width, height) {
    this.title = title;
    this.width = width;
    this.height = height;
}

Menu.prototype.display = function () {
    console.log("Title is : ", this.title);
    console.log("Width is : ", this.width);
    console.log("Height is : ", this.height);
}
function CalculateMulti () {
    this.array = [];
    this.addNumber = function (size) {
        this.array.push (size);
    }
    this.calculate = function () {
        let multi = 0;
        for (let i=0; i<this.array.length; i++) {
            multi = this.array[i].width*this.array[i].height;
        }
        return multi;
        }
}
let menu1 = new Menu ("rectangle",300,200);
menu1.display();

let calculateMulti = new CalculateMulti;
calculateMulti.addNumber(menu1);

// let menu2 = new Menu ("coffee", 100,150);
// menu2.display();
// calculateMulti.addNumber(menu2);

let result = calculateMulti.calculate();
console.log("Giá trị của width và height sau khi nhân : ", result);

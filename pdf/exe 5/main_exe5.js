/*
    Tạo đối tượng máy tính gồm 3 phương thức
        a. Read(): nhận hai giá trị và lưu chúng dưới dạng thuộc tính đối tượng
        b. Sum(): trả về tổng giá trị đã lưu
        c. Mul(): trả về tích các giá trị đã lưu
*/
 
var Calculator = {
    number1 : 0,
    number2 : 0,
    Read: function (value1, value2) {
        this.number1 = value1;
        this.number2 = value2;
    }, 
    Sum : function () {
        return this.number1 + this.number2;
    },
    Mul : function () {
        return this.number1*this.number2;
    }
}
Calculator.Read (2,5);
console.log("Tổng của 2 số là : ", Calculator.Sum());
console.log("Tích của 2 số là : ", Calculator.Mul());

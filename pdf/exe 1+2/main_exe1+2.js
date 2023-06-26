/*
    1. Tạo đối tượng person rỗng
    a. Thêm thuộc tính firstName và lastName với giá trị là “Nguyễn Văn”
    và “Bình”
    b. Thay đổi giá trị lastName là “Hòa”
    c. Xóa thuộc tính lastName khỏi đối tượng
*/

var person = {};
person.firstName = "Nguyễn Văn";
person.lastName = "Bình";
person.lastName = "Hoà"
delete person.lastName;
console.log(person);

/*
    Viết hàm checkEmpty kiểm tra đối tượng có thuộc tính không?
     Có thì trả về true, ngược lại trả về false
*/
var checkEmpty = "lastName" in person;
console.log("Kiểm tra person có thuộc tính lastName không?",checkEmpty);
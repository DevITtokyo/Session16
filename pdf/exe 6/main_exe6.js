/*
    6. Xây dựng đối tượng book gồm các thuộc tính và phương thức sau:
        a. bookId: mã sách
        b. bookName: tên sách
        c. price: giá sách
        d. author: Các tác giả sách
        e. bookStatus: trạng thái sách
        f. inputData: cho phép nhập thông tin sách
        g. displayData: cho phép hiển thị các thông tin sách
*/

const Book = {
    bookId : "",
    bookName : "",
    author : "",
    price : "",
    bookStatus : "",
    // inputData: cho phép nhập thông tin sách
    inputData : function() {
        this.bookId = prompt("Enter book id");
        this.bookName = prompt("Enter book name");
        this.price = prompt("Enter book price");
        this.author = prompt("Enter book author");
        this.bookStatus = prompt("Enter book status");
    },
    // displayData: cho phép hiển thị các thông tin sách
    displayData : function() {
        console.log("Mã sách: " + this.bookId);
        console.log("Tên sách: " + this.bookName);
        console.log("Giá sách: " + this.price);
        console.log("Tác giả: " + this.author);
        console.log("Trạng thái sách: " + this.bookStatus);
  }
}   
Book.inputData();
Book.displayData();


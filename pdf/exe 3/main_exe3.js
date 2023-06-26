/*
   3. Xây dựng đối tượng chứa tiền lương của các nhân viên trong phòng. 
   Viết hàm tính tổng lương của các nhân viên trong phòng
*/
// Function Constructor
function Employee (name, salary) {
    this.name = name;
    this.salary = salary;
}
Employee.prototype.display= function () {
    console.log("Tên của nhân viên là : ", this.name);
    console.log("Lương của nhân viên là : ", this.salary);
}
function SystermEmployee () {
    // mảng chứa các nhân viên
    this.array = [];
    // đưa các nhân viên vào hàm
    this.addEmployee = function (employees) {
        this.array.push (employees);
    }
    this.calculatetSalary = function () {
        let totalSalary = 0;
        for (let i=0; i<this.array.length; i++) {
            totalSalary += this.array[i].salary;
        }
        return totalSalary;
    };
}
let systerm = new SystermEmployee ();
// tạo các nhân viên vào hệ thống
let employee1 = new Employee ("Jully", 2000);
employee1.display();

let employee2 = new Employee ("Karik", 1000);
employee2.display();
systerm.addEmployee(employee1);
systerm.addEmployee(employee2);
// tính tổng lương
let totalSalary = systerm.calculatetSalary();
console.log("Tổng lương là : ",totalSalary);

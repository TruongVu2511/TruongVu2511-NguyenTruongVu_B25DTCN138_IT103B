const prompt = require("prompt-sync")();

let students = [];

function createStudent() {
    const id = Number(prompt("ID: "));
    const name = prompt("Name: ");
    const age = Number(prompt("Age: "));
    const gpa = Number(prompt("GPA: "));
    const status = prompt("Status (active/inactive): ");

    students.push({ id, name, age, gpa, status });
    console.log("Thêm sinh viên thành công.");
}

function readAll() {
    if (students.length === 0) {
        console.log("Danh sách rỗng.");
        return;
    }

    students.forEach(s =>
        console.log(`${s.id} | ${s.name} | ${s.age} | ${s.gpa} | ${s.status}`)
    );
}

function filterScholarship() {
    const result = students.filter(s => s.gpa > 8.0);

    if (result.length === 0) {
        console.log("Không có sinh viên đạt học bổng.");
        return;
    }

    result.forEach(s =>
        console.log(`${s.name} - GPA: ${s.gpa}`)
    );
}

function updateProfile() {
    const id = Number(prompt("Nhập ID cần cập nhật: "));
    const student = students.find(s => s.id === id);

    if (!student) {
        console.log("Không tìm thấy ID.");
        return;
    }

    student.name = prompt("Tên mới: ");
    student.gpa = Number(prompt("GPA mới: "));
    console.log("Cập nhật thành công.");
}

function deleteRecord() {
    const id = Number(prompt("Nhập ID cần xóa: "));
    const before = students.length;

    students = students.filter(s => s.id !== id);

    console.log(before === students.length ? "Không tìm thấy ID." : "Xóa thành công.");
}

function complianceVerify() {
    const hasMinor = students.some(s => s.age < 18);
    const allActive = students.every(s => s.status === "active");

    console.log("Có sinh viên <18 tuổi:", hasMinor);
    console.log("Tất cả đều active:", allActive);
}

function academicStats() {
    if (students.length === 0) {
        console.log("Danh sách rỗng.");
        return;
    }

    const total = students.reduce((sum, s) => sum + s.gpa, 0);
    const avg = total / students.length;

    console.log("GPA trung bình:", avg.toFixed(2));
}

function dataNormalization() {
    const normalized = students.map(s => s.name.toUpperCase());
    console.log("Tên sau chuẩn hóa:");
    console.log(normalized);
}

let choice;

do {
    choice = prompt(`
--- STUDENT MANAGEMENT SYSTEM ---
1. Create Student
2. Read All Students
3. Filter Scholarship
4. Update Student
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit
`);

    switch (choice) {
        case "1":
            createStudent();
            break;
        case "2":
            readAll();
            break;
        case "3":
            filterScholarship();
            break;
        case "4":
            updateProfile();
            break;
        case "5":
            deleteRecord();
            break;
        case "6":
            complianceVerify();
            break;
        case "7":
            academicStats();
            break;
        case "8":
            dataNormalization();
            break;
        case "0":
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }

} while (choice !== "0");
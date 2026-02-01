let nameBook = prompt ("Nhập tên sách:");
let authorBook = prompt ("Nhập tên tác giả:");
let yearBook = prompt ("Nhập năm xuất bản:");
if(yearBook == 2026){
    console.log(`Đây là sách mới!`);
}else if(yearBook >= 2021 && yearBook < 2026){
    console.log(`Sách khá mới`);
}else{
    console.log(`Sách đã cũ`);
}
let nameBook = prompt ("Nhập tên sách:");
let statusBook = prompt ("Nhập tình trạng sách(có sẵn hay đã mượn) :");
let yearBook = prompt ("Nhập năm xuất bản:");
if(statusBook === "có sẵn" && yearBook >= 2021 && yearBook <= 2026){
    console.log("Sách này mới và có sẵn để mượn");
}else if(statusBook === "đã mượn" && yearBook >= 2016 && yearBook <= 2026){
    console.log("Sách này đã mượn nhưng khá mới , có thể mượn lại sau");
}else if(statusBook === "đã mượn" && yearBook < 2016){
    console.log("Sách này đã mượn và khá cũ");
}else if(statusBook === "có sẵn" && yearBook < 2021){
    console.log("Sách này có sẵn nhưng đã lâu năm");
}
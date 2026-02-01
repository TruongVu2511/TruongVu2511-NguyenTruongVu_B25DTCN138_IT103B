let nameBook = prompt ("Nhập tên sách:");
let typeBook = prompt ("Nhập thể loại sách:");
let statusBook = prompt ("Nhập tình trạng sách(có sẵn hay đã mượn) :");
if(typeBook === "Khoa học" || typeBook === "Lịch sử"){
    if(statusBook === "có sẵn"){
        console.log("Sách này có sắn trong thư viện");
    }else{
        console.log("Sách đã được mượn");
    }
}else if(typeBook === "Văn học" || typeBook === "Truyện"){
    console.log("Sách này có thể đọc giải trí");
}
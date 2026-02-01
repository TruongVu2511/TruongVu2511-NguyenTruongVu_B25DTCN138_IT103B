let nameBook = prompt ("Nhập tên sách:");
let borBook = prompt ("Nhập tên người mượn sách:");
let statusBook = prompt ("Nhập tình trạng sách(có sẵn hay đã mượn, không có sẵn) :");
let borDay = prompt ("Nhập số ngày mượn sách:");
let carLib = prompt ("Bạn có thẻ thư viện không ? (có/không) :");
if(statusBook === "có sẵn" && carLib === "có"){
    console.log("Chúc mừng, bạn có thể mượn sách này");
}else if(statusBook === "đã mượn" && borDay < 30){
    if(carLib === "có"){
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    }else{
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
}else if(statusBook === "không có sẵn"){
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
}else{
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}



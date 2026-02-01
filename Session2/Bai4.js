let nameBook = prompt ("Nhập tên sách:");
let borBook = prompt ("Nhập tên người mượn sách:");
let loveBook = prompt ("Nhập mức độ yêu thích sách (1-5):");
if(loveBook == 5 || loveBook == 4){
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
}else if(loveBook == 3){
    console.log("Sách này khá ổn có thể mượn");
}else if(loveBook == 2 || loveBook == 1){
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
}
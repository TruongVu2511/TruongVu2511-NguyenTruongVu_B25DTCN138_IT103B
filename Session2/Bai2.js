let numberBook = prompt ("Nhập số lượng sách:");
if(numberBook < 10){
    console.log(`Thư viện có ít sách`);
}else if(numberBook >= 10 && numberBook <= 20){
    console.log(`Thư viện có số lượng sách vừa đủ`);
}else{
    console.log(`Thư viện có nhiều sách`);
}
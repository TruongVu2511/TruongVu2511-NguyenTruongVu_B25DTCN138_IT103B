
let extSuccess = 0;
let extFail = 0;
do{
    let requestExten = prompt ("Có yêu cầu gia hạn mới không ? (có/không) :");
if(requestExten === "không"){
    break;
}
    let nameReader = prompt ("Nhập tên bạn đọc :");
    let nameBook = prompt ("Nhập tên sách:");
    let currentDay = +prompt ("Nhập số ngày mượn hiện tại (số nguyên >= 1):");
    let extDay = +prompt ("Nhập số ngày muốn gia hạn thêm (số nguyên >= 1):");
    let totalDay = currentDay + extDay;
if(totalDay > 60){
        console.log(`Bạn đọc ${nameReader} : Không được gia hạn : Tổng thời gian vượt quá 60 ngày tối đa `);
        extFail++;
}else if(currentDay > 45){
        console.log(`Bạn đọc ${nameReader} : Không được gia hạn : Đã mượn quá lâu.`);
        extFail++;
}else{
        console.log(`Bạn đọc ${nameReader} : Gia hạn thành công.`);
        extSuccess++;
}

}while(true);
console.log(`Số lần gia hạn thành công : ${extSuccess}`);
console.log(`Số lần gia hạn thất bại : ${extFail}`);

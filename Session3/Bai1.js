let borBook = +prompt ("Hôm nay có bao nhiêu lượt mượn sách :");
for( let i = 1; i <= borBook; i++){
    let borrowerBook = prompt ("Nhập tên người mượn sách :");
    let nameBook = prompt ("Nhập tên sách:");
    let borDay = +prompt ("Nhập số ngày mượn sách (từ 1 đến 30 ngày) :");
    if(borDay > 14){
        console.log(`Người mượn ${borrowerBook} : cảnh báo : Thời gian mượn vượt quy định ( tối đa 14 ngày)`);
    }else{
        console.log(`Người mượn ${borrowerBook} : mượn thành công`);
    }
}
console.log(`Tổng số lượt mượn là : ${borBook}`);
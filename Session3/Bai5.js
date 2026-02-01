let totalRequest = 0;
let successRequest = 0;
let rejectRequest = 0;
let pendingRequest = 0;
do{
    let reserveAdvance = prompt("Có yêu cầu đặt mượn trước mới không ? (có/không) :");
    if(reserveAdvance === "không"){
        break;
    }
    totalRequest++;
    let nameReader = prompt("Nhập tên bạn đọc :");
    let idBook = +prompt("Nhập mã sách muốn đặt trước :");
    let nameBook = prompt("Nhập tên sách :");
    let availableDay = +prompt("Số ngày dự kiến chờ (số nguyên >= 1) :");
    let priorityNumber = +prompt("Nhập số ưu tiên (1-Sinh viên bình thường , 2-Giảng viên/Nghiên cứu sinh, 3-Nhân viên thư viện/đặc cách) :");
    if(availableDay > 45){
        console.log(`Bạn đọc ${nameReader} : Từ chối, thời gian chờ quá lâu.`);
        rejectRequest++;
    }else if(priorityNumber === 3){
        console.log(`Bạn đọc ${nameReader} : Đặt trước thành công- Ưu tiên đặc cách cao nhất.`);
        successRequest++;
    }else if(priorityNumber === 2 && availableDay <=30){
        console.log(`Bạn đọc ${nameReader} : Đặt trước thành công- Ưu tiên Giảng viên/Nghiên cứu.`);
        successRequest++;
    }else if(priorityNumber === 1 && availableDay <=21){
        console.log(`Bạn đọc ${nameReader} : Đặt trước thành công.`);
        successRequest++;
    }else{
        console.log(`Bạn đọc ${nameReader} : Đặt trước tạm thời- Chờ xét duyệt thêm.`);
        pendingRequest++;
    }

}while(true);
console.log(`Tổng số yêu cầu đặt mượn trước : ${totalRequest}`);
console.log(`Số yêu cầu đặt mượn trước thành công : ${successRequest}`);
console.log(`Số yêu cầu đặt mượn trước bị từ chối : ${rejectRequest}`);
console.log(`Số yêu cầu đặt mượn trước tạm thời chờ xét duyệt thêm : ${pendingRequest}`);

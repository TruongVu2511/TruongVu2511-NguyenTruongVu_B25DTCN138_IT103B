let totalFeedback = 0;
let complaintSerious = 0;
let complaintAverage = 0;
let complaintLow = 0;
let levelSerious;

do{
    let complaintFeedback = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không ? (có/không) :");
    if(complaintFeedback === "không"){
        break;
    }
    let nameReader = prompt("Nhập tên bạn đọc:");
    if(nameReader === ""){
        alert("Tên bạn đọc không được để trống. Vui lòng nhập lại.");
        continue;
    }
    totalFeedback++;
    let idCard = +prompt("Nhập mã thẻ bạn đọc :");
    let typeFeedback= +prompt("Nhập loại hồi (1-Phàn nàn/Khiếu nại,2-Đề xuất cải thiện, 3-Phản hồi tich cực/ Khen ngợi.");
    if(typeFeedback === 1){
        let levelSerious = +prompt("Nhập mức độ nghiêm trọng (1-Nhẹ, 2-Trung bình, 3-Nghiêm trọng):");
    }else if(typeFeedback === 1 && levelSerious === 3){
        console.log(`Bạn đọc ${nameReader} : Chuyển ngay lãnh đạo- Khiếu nại nghiêm trọng.`);
        complaintSerious++;
    }else if(typeFeedback === 1 && levelSerious === 2){
        console.log(`Bạn đọc ${nameReader} : Ghi nhận sẽ xử lí trong ngày- Khiếu nại trung bình.`);
        complaintAverage++;
    }else if(typeFeedback === 1 && levelSerious === 1){
        console.log(`Bạn đọc ${nameReader} : Xử lí ngay tại quầy- khiếu nại nhẹ.`);
        complaintLow++;
    }else if(typeFeedback === 2){
        console.log(`Bạn đọc ${nameReader} : Cảm ơn!Đề xuất đã được ghi nhận.`);
    }else if(typeFeedback === 3){
        console.log(`Bạn đọc ${nameReader} : Cảm ơn bạn đã phản hổi tích cực.`);
    }

}while(true);
console.log(`Tổng số phản hồi: ${totalFeedback}`);
console.log(`Khiếu nại nghiêm trọng: ${complaintSerious}`);
console.log(`Khiếu nại trung bình: ${complaintAverage}`);
console.log(`Khiếu nại nhẹ: ${complaintLow}`);
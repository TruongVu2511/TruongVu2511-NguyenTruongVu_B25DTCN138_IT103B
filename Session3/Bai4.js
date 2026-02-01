let totalBook = 0;
let lostBook = 0;
let outOfStockBook = 0;
do{
    let inventoryBook = prompt ("Tiếp tục kiểm kê sách tiếp theo ? (có/không) :");
    if(inventoryBook === "không"){
        break;
    }
    let idBook = prompt ("Nhập mã sách:");
    if(idBook ===""){
        alert(`Mã sách không được để trống, vui lòng nhập lại`);
        continue;
    }
    totalBook++;
    let nameBook = prompt ("Nhập tên sách:");
    let quantityBook = +prompt ("Nhập số lượng thực tế đang có trong kho (số nguyên >= 0):");
    let statusBook = +prompt ("Nhập tình trạng sách (1-Bình thường/ 2-Mất) :");
    if(statusBook === "2"){
        console.log(`Tăng số sách mất`);
        lostBook++;
    }else if(statusBook === "1" && quantityBook === 0){
        console.log("Tăng số sách hết hàng.");
        outOfStockBook++;
    }else if(statusBook === "1" && quantityBook >= 10){
        console.log("Tăng số sách tồn kho nhiều.");
    }else if(statusBook === "1" && quantityBook >= 1 && quantityBook <= 9){
        console.log("Tăng số sách tồn kho bình thường.");
    }
        
}while(true);
console.log(`Tổng số sách đã kiểm kê : ${totalBook}`);
console.log(`Tổng số sách mất : ${lostBook}`);
console.log(`Tổng số sách hết hàng : ${outOfStockBook}`);
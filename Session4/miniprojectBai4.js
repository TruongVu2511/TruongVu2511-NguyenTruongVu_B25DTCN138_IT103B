let failCount = 0;
while(failCount < 3){
    let account = prompt("Nhập tài khoản :");
    let password = prompt("Nhập mật khẩu :");
    if(account === "admin" && password === "12345"){
        alert("Đăng nhập thành công");
        break;
    }else if(account !== "admin" && password === "12345"){
        failCount++;
        alert(`Sai tài khoản ! Bạn còn ${3 - failCount} lần thử. `);
    }else if(account === "admin" && password !== "12345"){
        failCount++;
        alert(`Sai mật khẩu ! Bạn còn ${3 - failCount} lần thử.`);
    }else{
        failCount++;
        alert(`Sai tài khoản và mật khẩu ! Bạn còn ${3 - failCount} lần thử.`);
    }
}
 if(failCount === 3){
        alert("Tài khoản đã bị khóa !");
    }else{
        let choice;
        do{
            choice = +prompt(`
                ---HỆ THỐNG QUẢN TRỊ THƯ VIỆN---
                1.Phân loại mã số sách (Chẵn/Lẻ)
                2.Thiết kế sơ đồ kho sách (Dạng lưới)
                3.Dự toán phí bảo trì sách theo năm
                4.Tìm mã số sách may mắn
                5.Thoát
                Vui lòng nhập lựa chọn của bạn (1-5) :
                                `);
        switch(choice){
            case 1:
                let total = 0;
                let even = 0;
                let odd = 0;
                while(true){
                    alert("Nhập mã số sách ( nhập 0 để dừng)");
                    let idBook = +prompt("Nhập mã số sách :");
                    if(idBook === 0){
                        break;
                    }
                    total++;
                    if(idBook % 2 == 0){
                        even++;
                    }else{
                        odd++;
                    }
                }
                console.log(`Tổng số lượng mã sách đã nhập : ${total}`);
                console.log(`Số lượng sách khoa học : ${even}`);
                console.log(`Số lượng sách nghệ thuật : ${odd}`);
                alert("Đã phân loại xong! Xem kết quả tại Console (F12).");
                break;
           case 2:
                let rows = +prompt("Nhập số lượng Hàng:");
                let cols = +prompt("Nhập số lượng Cột:");

                for (let i = 1; i <= rows; i++) {
                    for (let j = 1; j <= cols; j++) {
                        if (i === j) {
                            console.log(`[${i}-${j}] (Kệ ưu tiên)`);
                        } else {
                            console.log(`[${i}-${j}]`);
                        }
                    }
                }

                alert("Đã vẽ xong sơ đồ kho!");
                break;

            case 3:
                let bookCount = +prompt("Nhập số lượng sách hiện tại:");
                let baseCost = +prompt("Nhập phí bảo trì gốc cho 1 cuốn:");
                let years = +prompt("Nhập số năm dự toán:");

                let costPerBook = baseCost;

                for (let year = 1; year <= years; year++) {
                    let totalCost = bookCount * costPerBook;
                    console.log(`Năm ${year}: ${totalCost.toFixed(2)} VND`);
                    costPerBook *= 1.1;
                }

                alert("Đã tính xong chi phí bảo trì!");
                break;

            case 4:
                let N = +prompt("Nhập số giới hạn N:");
                let count = 0;

                for (let i = 1; i <= N; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        console.log(i);
                        count++;
                    }
                }

                console.log(`Tổng số mã may mắn: ${count}`);
                alert("Đã tìm xong mã may mắn!");
                break;

            case 5:
                alert("Hệ thống đang đăng xuất...");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 5);
    }




let names = ["Laptop", "Phone", "Tablet", "Camera", "Headphone"];
let prices = [1200, 800, 450, 600, 150];
let stocks = [5, 0, 10, 3, 8];

let choice;

do {

    choice = prompt(
        "===== MENU =====\n" +
        "1. Lọc sản phẩm giá > 500\n" +
        "2. Kiểm định dữ liệu\n" +
        "3. Phân tích vốn hóa\n" +
        "4. Giảm giá 10%\n" +
        "5. Tìm sản phẩm theo từ khóa\n" +
        "6. Báo cáo tồn kho\n" +
        "7. Thoát\n" +
        "Chọn (1-7):"
    );

    switch (choice) {

        case "1":
            let highEnd = names.filter(function(name, index) {
                return prices[index] > 500;
            });
            alert(highEnd.join("\n"));
            break;

        case "2":
            let hasOutOfStock = stocks.some(function(stock) {
                return stock === 0;
            });

            let allAbove100 = prices.every(function(price) {
                return price > 100;
            });

            alert(
                "Có sản phẩm hết hàng: " + hasOutOfStock +
                "\nTất cả giá > 100: " + allAbove100
            );
            break;

        case "3":
            let total = prices.reduce(function(sum, price, index) {
                return sum + price * stocks[index];
            }, 0);

            alert("Tổng giá trị kho: " + total);
            break;

        case "4":
            prices.forEach(function(price, index) {
                prices[index] = price * 0.9;
            });
            alert("Đã giảm giá 10%.");
            break;

        case "5":
            let keyword = prompt("Nhập từ khóa:").toLowerCase();
            let results = [];

            names.forEach(function(name, index) {
                if (name.toLowerCase().includes(keyword)) {
                    results.push(
                        name + " - Giá: " + prices[index] +
                        " - Số lượng: " + stocks[index]
                    );
                }
            });

            if (results.length > 0) {
                alert(results.join("\n"));
            } else {
                alert("Không tìm thấy.");
            }
            break;

        case "6":
            let report = names.map(function(name, index) {
                if (stocks[index] > 0) {
                    return name + " - Còn hàng";
                } else {
                    return name + " - Hết hàng";
                }
            });

            alert(report.join("\n"));
            break;

        case "7":
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ.");
    }

} while (choice !== "7");
// Duyệt lần lượt các phần tử trong mảng
// Chỉ duyệt
function testForEach() {
    let num = [1, 2, 3, 4, 5, 6]
    num.forEach((i, index) => {
        console.log(`${index}: ${i} binh phuong bang: `, i * 2)
    });
}

// Chuyển array này thành array khác với các phần tử được thay đổi trong return hàm
// Tạo giá array mới (cần đc gán)
function testMap() {
    let lst = [2, 3, 4, 5, 6]
    let double = lst.map(n => n * 2)
    double.forEach(i => console.log(i))
    lst.forEach(i => console.log(i))
}

function isSNT(x) {
    let dem = 0;
    for (let i = 2; i < x; i++) if (x % i == 0) dem += 1;
    if (dem == 0 && x != 1) return true
    else return false
}

// lọc phần tử nếu nó thỏa điều kiện true/false (được return trong hàm)
// Tạo array với các pt đã đc lọc (cần gán)
function testFilter() {
    let lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let snt_lst = lst.filter(snt => (isSNT(snt)))
    snt_lst.forEach(n => console.log(n))
}

// chuyển array nhiều chiều thành 1 chiều
// Tạo array một chiều (cần gán)
function testFlatMap() {
    let matrix = [[1, 2, 3], [4, 5, 6]]
    let lst1d = matrix.flatMap(i => i)
    lst1d.forEach(i => console.log(i))
    console.log(lst1d)
}

// duyệt các phần tử trong mảng và đem các phần tử đó thực hiện phép tính đồn cho accumulation (s)
// Trả về giá trị accumuation (cần gán)
function testReduce() {
    let lst = [1, 2, 3, 4, 5]
    let sum = lst.reduce((s, i) => s + i * i, 0/*<--giá trị ban đầu của s, nếu ko thì s = lst[0]*/)
    console.log(sum)
}

// từ phải --> trái ngược với Reduce là trái sang phải
function testReduceRight() {
    let lst = ["1", "2", "3", "4", "5"]
    let sum = lst.reduceRight((s, i) => s + i)
    console.log(sum)
}

// Xem mọi phần tử có thỏa đk hay ko (với mọi)
// Trả về kiểu bool (cần gán)
function testEvery() {
    let lst = [2, 3, 5, 7, 11]
    let dk = lst.every(n => isSNT(n))
    if (dk) console.log("Tat ca cac phan tu la snt")
    else console.log("Co phan tu khong phai la snt")
}

// Xem có bất kì phần thử nào thỏa đk hay không (tồn tại)
// // Trả về kiểu bool (cần gán)
function testSome() {
    let lst = [1, 4, 6, 8, 9]
    let dk = lst.some(n => isSNT(n))
    if (dk) console.log("Co ton tai so ngto trong mang")
    else console.log("Khong ton tai bat ki so ngto trong mang")
}

// Chuyển array-like hoặc iterable (đối tượng có thể duyệt, trùng lặp...) thành array
function testFrom() {
    let like_lst = "213214" //còn nhiều cái ngoài string như map, set
    let lst = Array.from(like_lst, s => Number(s) * Number(s))
    console.log(lst)
}

// Trả về mang(Array) các vị trí của Iterator trong array
function testKeys() {
    let lst = [1, 2, 3, 4, 5]
    ar_keys = lst.keys()
    console.log(ar_keys)
    console.log(Array.from(ar_keys))
}

testKeys()
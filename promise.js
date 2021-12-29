//Type 1
var promise = new Promise(
    (resolve, reject) => {
        //logic
        //Success --> resolve(data)
        //failure --> reject(error)
        resolve('successful')
    }
)

promise
    .then((data) => {
        //thành công thì vào đây - giá trị resolve nhận về = data
        console.log(data);
        return 1
    })
    .then((data) => {
        console.log(data); //print '1'
    })
    .catch((error) => {
        //thất bại thì vào đây - giá trị reject nhận về = error
    })
    .finally(() => {
        //chạy xong hết thì vào đây
    })
//todo --> Có thể có nhiều thằng .then, và thằng phía sau sẽ
//todo |    nhận giá trị return của thằng trước đó


//Type 2 -> return 1 Promise
promise
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('3000')
            }, 3000)
        })
    })
    .then((data) => {
        console.log(data); //sẽ in ra sau 3s
    })

//? Another type of 2
const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('ok')
        }, ms)
    })
}

sleep(1000)
    .then(() => {
        console.log(1);
        return sleep(1000)
    })
    .then(() => {
        console.log(2);
    })
//! Có thể làm tiếp tục bao nhiêu lần cũng đc
//Nếu giữa đường có 1 promise bị reject -> nó sẽ nhảy thẳng vào thằng .catch

//Type 3
var promise3 = new Promise.resolve('Success!')
//! -> Khởi tạo 1 promise auto Thành công
//? Ngược lại thì Promise.reject luôn

// todo Chạy nhiều thằng song song mà ko phụ thuộc nhau

var pro1 = new Promise(
    () => {
        setTimeout((resolve, reject) => {
            resolve('1')
        }, 5000)
    }
)
var pro2 = new Promise(
    () => {
        setTimeout((resolve, reject) => {
            resolve('2')
        }, 2000)
    }
)

// nó sẽ nhận vào 1 cái array, chứa những promise muốn thực thi cùng lúc
Promise.all([pro1, pro2])
    //? Có thể trả về cái array như vầy [pro1,pro2]-> lấy ra xài luôn .then(( [pro1, pro2] ) => {})
    .then((result) => {
        console.log(result[0]);
        console.log(result[1]);
        //! Sẽ in ra kết quả của mỗi thằng = mảng
    })


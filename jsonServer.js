import fetch from 'node-fetch'
var urlAPI = 'http://localhost:3000/posts'

// fetch(urlAPI)
//     .then((res) => {
//     return res.json()
//     })
//     .then((res) => {
//     console.log(res);
// })

//Thêm sửa xóa đọc --> CRUD
/**
 * read -> GET method 
 * create -> POST method + body (chứa data)
 * update -> PUT/PATCH method -> URL/id
 * delete -> DELETE method -> URL/id
 */

//! Cách triển khai API fetch với callbacks

//Example
function getCourses(callback) {
    var c = fetch(urlAPI)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            return callback(res)
        })
    return c.then((res) => {
        return res
    })
}

//Tạo ra hàm để sử dụng trong getCourses callback
function printOut(data) {
    return data;
}

//Gọi ra hàm getCourses
var haha = Promise.resolve(getCourses(printOut))


haha.then((res) => {
    //console.log(res);
    //console.log('done')
})


//Code theo F8
function getCoursess(callback) {
    fetch(urlAPI)
        .then((res) => {
            return res.json();
        })
        .then(callback)
}

function renderCode(courses) {
    console.log(courses);
}

function start() {
    // getCoursess((courses) => {
    //     renderCode(courses);
    // })
    //Viết gọn lại của thằng trên
    getCoursess(renderCode)
}

start()
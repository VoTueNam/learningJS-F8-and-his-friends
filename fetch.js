//https://jsonplaceholder.typicode.com/ --> trang này dùng để test fetch API
//todo # test API ở trang này

import fetch from "node-fetch";

var postAPI= 'https://jsonplaceholder.typicode.com/posts'


//Stream
fetch(postAPI)
    .then((res) => {
        //không được xử lý ở đây, phải đợi nó xong rồi return xuống dưới mới xử lý. Nếu xử lý ở đây Promise sẽ trả về undefined
        //phương thức json là cái resolve của fetch và nó chuyển thành JSON.parse luôn
        return res.json();
        //JSON.parse: JSON --> JS type
    })
    .then((post) => {
    console.log(post);
})
    .catch((err) => {
    console.log('Co loi');
})
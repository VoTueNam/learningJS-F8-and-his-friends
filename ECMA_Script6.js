/**
 * todo # 1. Let, const
 *  -> var ngoài block () thì vẫn truy cập đc
 *  -> let và const thì ko làm đc
 *
 * ? -> var có hỗ trợ hosting , 2 thằng kia thì ko tức là có thể xài trước rồi khai báo sau
 *
 * ! const có thể ko thể gán lại, nhưng có thể thay đổi thuộc tính của nó
 *
 * todo Ví dụ:
 * const a ={
 *  name: 'JS'
 * }
 *
 * a = {'PHP'} --> KO được
 * a.name = 'PHP' --> Được
 */

/**
 * todo # 2. Arrow function
 *
 * Có thể viết gọn hơn hoặc gọn hơn nữa
 *
 * const sum = (a,b) => a+b; --> Sau mũi tên thì nó tự hiểu là return luôn
 * ! Không có {} thì nó sẽ hiểu là cần return
 *
 * ? return Object thì sao
 */
const sum = (a, b) => ({ a: 1, b: 2 }); //--> thêm dấu hoặc tròn là đc

/**
 * todo Nếu chỉ có 1 tham số đầu vào thì viết gọn luôn
 */
const logger = (log) => console.log(log);
/** --> in ra tham số log được truyền vào luôn
 *
 * Arrow function sẽ ko có xài đc "this"
 * Và cũng ko làm constructor function luôn
 */

//Ví dụ constructor function
const Course = function (name, age) {
    this.name = name;
    this.age = age;
};

const courses = new Course("Java", 18);
//! Arrow function sẽ không làm đc như vầy

/**
 * todo # 3. Temple String - Template literals
 * Cái dấu `` này nè
 *
 * Và cũng có thể dùng cái dấu như kiểu \n \t luôn
 */

const name = "JS";
const name2 = `Course name: ${name}`;
//console.log(name2);

/**
 * todo # 4. Multi-line String
 */

const line = `line1
line2
line3`;

//? viết vầy là nó tự hiểu xuống hàng luôn, ghê ghê

/**
 * todo # 5. Class
 *
 * tương tự constructor function
 */

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }
}

/**
 * todo # 6. Enhanced Object literal
 *
 * Object có key và value cùng tên thì chỉ cần thi 1 cái cho gọn luôn
 */
var name = "JSON";
var price = 1000;

var course = {
    name,
    price,
};

// Có thể khai báo key = biến luôn

var name = "fiend name";
var price = "gia";
var course = {
    [name]: "JS",
    [price]: "1000",
};

/**
 * todo # 7. Default parameters values
 *
 * Gán giá trị mặc định khi hàm ko truyền tham số - undefined
 */

var logger = (log = "Gia tri mac định") => {
    console.log(log);
};

logger(); //ko truyền thì in giá trị mặc định -- ngược lại thì in giá trị truyền vào

/**
 * todo # 8. Destructuring
 *
 * Lấy trực tiếp giá trị bên trong Array, và Object
 */

var array = ["JS", "PHP", "Java"];
var [a, , c] = array;
//Chỉ lấy ra thằng 1 và 3

var [a, ...rest] = array;
//rest mình muốn đặt gì cũng đc --> nó sẽ lấy những phần tử còn lại
//-> rest sẽ nhận 2 thằng 2 và 3 ---> Nó là 1 cái mảng

var obj = {
    name: "JS",
    price: 1000,
    children: {
        name: "ReactJS",
    },
};

//Khác array thì object phải chỉ định đúng key --> nó cũng dùng đc ...rest
var { name, price } = obj;

// Lấy object trong object
var {
    name: parentName,
    children: { name },
} = obj;

//! cái dấu : đó dùng để đặt lại tên cho key object khi lấy ra, tránh bị trùng tên với key khác của children sẽ bị ghi đè

//? Nếu lấy ra mà ko có trong object thì có thể gán đc default value tương tự như ở trên
var { name, description = "gia tri mac định" } = obj;

/**
 * todo # 9. Rest parameters
 *
 * Nó sẽ lấy những phần tử còn lại, và nhận về dưới dạng mảng
 */

function logger({ a, b, ...params }) {
    console.log(a);
    console.log(b);
    console.log(params); //=> nó sẽ in ra các phần tử trong object theo đúng thứ tự
}

logger({
    name: "JS",
    price: 1000,
    description: "description content",
});

/**
 * todo # 10. Spread
 *
 * khi để ... trước array hay object thì nó sẽ bỏ dấu ngoặc của chúng nó
 * --> khi này thì những giá trị đó đc gọi là Spread
 */

var array1 = ["js", "java"];
var array2 = ["react", "node"];

var array3 = [...array1, ...array2];

var obj1 = {
    name: "JS",
};
var obj2 = {
    description: "java",
};

// --> như vầy sẽ nối 2 object lại với nhau
var obj3 = {
    ...obj1,
    ...obj2,
}; //-> Key trùng name nhau thì sẽ lấy thằng khai báo sau

/**
 * todo # 11. Tagged template literals
 *
 * Nhìn giống sai cú pháp nhưng ko phải đâu
 */

//Ví dụ Thôi - không hiểu gì luôn
function highlight([first, ...string], ...rest) {
    return values
        .reduce(
            (acc, curr) => [...acc, `<span>${curr}</span>`, string.shift()],
            [first]
        )
        .join("");
}

var brand = "F8";
var course = "JavaScript";

const html = highlight`Học lập trình ${course} tại ${brand}`;

/**
 * todo # 12. Modules
 *
 * Import và Export thôi
 *
 *
 * import logger from './logger.js'
 *
 * --> Nếu import vào js của html thì thẻ script thêm type ="module"
 *
 *
 * export default logger
 *
 * Nếu export ra ko phải default (1 module chỉ export default 1 cái thôi)
 *
 * import logger, {những thằng ko export default để đây} from './logger'
 *
 *
 * ? import * as constants from './constants.js'
 * --> thì biến constants sẽ là 1 object và nó nhận toàn bộ những cái export trong module kia
 *
 *
 * ! export { default } from './logger';
 *
 * export nhiều module thông qua 1 module chuyên export
 */

/**
 * todo # 13. optional chaining (?.)
 *
 * Xử lý dữ liệu nhận từ API mà ko biết nó có chứa gì
 *
 * Nghi ngờ thằng nào ko tồn tại thì ?. trước nó
 * ! Dùng được cho Obj, array, function
 */

var meow = {
    name: "meow",
    cat: {
        cat1: {
            cat2: {
                cat3: {
                    name: "meow",
                },
            },
        },
    },
};

//Nghi ngờ thằng nào thì ? chỗ đó ==> nó sẽ ko bị báo lỗi
if (meow.cat?.cat1?.cat2?.cat3) {
    console.log(meow.cat?.cat1?.cat2?.cat3.name);
}

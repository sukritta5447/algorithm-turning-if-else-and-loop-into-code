/* 
ให้เขียน Function ที่ชื่อว่า countNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers เป็น Array ที่บรรจุข้อมูลตัวเลข
    - Function นี้จะตรวจสอบตัวเลขแต่ละตัวใน numbers เพื่อนับจำนวนของตัวเลขที่มีค่าเป็นบวก, เป็นลบ และเป็นศูนย์ แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง        
*/

/* 
Operation ที่ใช้
    1. การเปรียบเทียบ
    2. if else
    3. loop
    4. การแสดงผล
    
1. ประกาศฟังก์ชั่น countNumbers(array) แล้วสร้าง var เปล่าไว้เก็บผลลัพธ์ 3 อัน ไว้เก็บแยก positive negative zero
2. สร้างลูปใน func ขึ้นมาตรวจสอบเลขใน array 
3. สร้างเงื่อนไข if-else ว่า ถ้าเลขที่รันว่ามีค่าบวก ลบ หรือศูนย์
4. return เป็น positive:, negative:, zero:
*/

// Start coding here
function countNumbers(array){
    let resultPositive = 0;
    let resultNegative = 0;
    let resultZero = 0;
    for (let i=0 ; i < array.length ; i++){
        if (array[i] > 0){
            resultPositive += 1
        } else if (array[i] < 0){
            resultNegative += 1
        } else {
            resultZero += 1
        }
    }
    return `positive: ${resultPositive}, negative: ${resultNegative}, zero: ${resultZero} }` //ต้องแสดงเป็นเลขจำนวนที่นับได้ออกมา
}

const numbers1 = [3, -5, 0, 12, -7, 0, 8, 0, 1];
console.log(countNumbers(numbers1)); // { positive: 4, negative: 2, zero: 3 }

const number2 = [0, -4, -1, -5, 6, 0];
console.log(countNumbers(number2)); // { positive: 1, negative: 3, zero: 2 }

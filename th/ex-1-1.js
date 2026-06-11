/* 
ให้เขียน Function ที่ชื่อว่า sumPositiveNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers ซึ่งเป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำเฉพาะตัวเลขที่มีค่าเป็นบวกมารวมกัน แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

// Start coding here
//list operation
//เขียนอธิบายสเต็ป
//เขียนโค้ด

/* 
Operation ที่ใช้
    1. การบวก ลบ คูน หาร 
    2. if else
    3. loop
    
1. ประกาศฟังก์ชั่น sumPositiveNumbers(array) แล้วสร้าง var เปล่าไว้เก็บผลลัพธ์
2. สร้างลูปใน func ขึ้นมาให้รันเลขใน array
3. สร้างเงื่อนไข if-else ว่า ถ้าเลขที่รันต้อง > 0 ถ้าน้อยกว่าหรือติดลบก็ข้ามไป
4. return ใน func
*/

function sumPositiveNumbers(array){
    let total = 0;
    for (let i=0 ; i < array.length ; i++){
        if (array[i] > 0) {
            // console.log(array[i]) ลองดูว่าตัวเลขออกไหม ==> ออกปกติ
            total = total + array[i];
            // console.log("totalหลังบวก = " + total)
        }
    }
    return total
}

const numbers1 = [3, -5, 10, 12, -7, 0, 8, 2];
console.log(sumPositiveNumbers(numbers1)); // 35

const number2 = [0, -4, -1, -5, 6, 5, 0];
console.log(sumPositiveNumbers(number2)); // 11

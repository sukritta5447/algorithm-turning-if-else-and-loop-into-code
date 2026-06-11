/*
ให้เขียน Function ที่ชื่อว่า calculateAverageScore ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ scores และ classNumber
        1. scores เป็น Array ที่บรรจุข้อมูลคะแนนสอบ
        2. classNumber เป็นข้อมูลประเภท Number ที่เก็บหมายเลขห้องเรียน
    - Function นี้จะนำคะแนนสอบของนักเรียนในห้องที่ระบุมาบวกกัน จากนั้นนำไปหาค่าเฉลี่ย แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/
/* 
List operation
    (a) การแสดงผลลัพธ์
    (b) การกำหนดตคค่า
    (c) การบวก ลบ คูณ หาร
    (d) การเปรียบเทียบ
    (e) การดำเนินการทางตรรกะ
    (f) if-else
    (g) loop

Operation ที่ใช้: b, c, g, f
    
step:
1. สร้าง func calculateAverageScore ให้ para มี num กับ classNum
2. declare totalScore เอาไว้เก็บคะแนน และ studentCount นับจำนวนนักเรียน
3. loop ผ่านแต่ละตัว โดยการลูปแต่ละครั้งใช้ if-else
4. return ค่าเฉลี่ย => totalScore/studentCount
*/

// Start coding here

const scores = [
    { firstname: "Isabel", lastname: "Moore", classNumber: 3, mathScore: 78 },
    { firstname: "Alice", lastname: "Clark", classNumber: 1, mathScore: 80 },
    { firstname: "Charlie", lastname: "Johnson", classNumber: 3, mathScore: 85 },
    { firstname: "Bob", lastname: "Smith", classNumber: 2, mathScore: 75 },
    { firstname: "David", lastname: "Lee", classNumber: 1, mathScore: 90 },
    { firstname: "Eva", lastname: "Davis", classNumber: 2, mathScore: 65 },
    { firstname: "Frank", lastname: "Brown", classNumber: 3, mathScore: 77 },
    { firstname: "Grace", lastname: "Miller", classNumber: 1, mathScore: 95 },
    { firstname: "Jack", lastname: "Taylor", classNumber: 1, mathScore: 82 },
    { firstname: "Henry", lastname: "Wilson", classNumber: 2, mathScore: 88 },
];

function calculateAverageScore(score, student){
    let totalScore = 0;
    let studentCount = 0;
    for (let i=0 ; i<score.length ; i++){
        if (score[i].classNumber === student){
            totalScore = totalScore + score[i].mathScore;
            studentCount++;
        }
    }
    return totalScore/studentCount;
}

console.log(calculateAverageScore(scores, 1)); // 86.75
console.log(calculateAverageScore(scores, 3)); // 80

/*  
ให้เขียน Function ที่ชื่อว่า countDogByBreed ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ breedArray
        1. breedArray เป็น Array ที่บรรจุสายพันธุ์สุนัขที่เข้ารับบริการในร้านตัดขนแห่งหนึ่ง
    - Function นี้จะนับว่าสุนัขแต่ละสายพันธุ์ที่เข้ามาใช้บริการมีจำนวนทั้งหมดกี่ตัว แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

/* 
Operation ที่ใช้
    - กำหนดค่า
    - การบวกลบคูณหาร
    - if else
    - loop
    - แสดงผล
    
1. สร้าง func countDogByBreed(breed) เพื่อคำนวณหาจำนวนครั้งที่น้องๆเข้ามาใช้บริการ
2. declare var เปล่าเอาไว้เก็บข้อมูลเวลา loop
3. ใช้ for of loop เพื่อวนเช็คชื่อพันธุ์ใน array
4. สร้างเงื่อนไข 
  <ถ้าเช็คใน array แล้วเจอ value ที่ execute มา
  ให้จำนวนครั้ง +1>
  <ถ้าไม่เจอ
  ให้เพิ่มขื่อและvalueเข้าไป
5. return ไปที่ var ที่สร้างไว้
*/

// Start coding here
function countDogByBreed(breed){
  let breedCount = {};
  
  for (let dog of breed){
    //console.log(dog); //เช็คว่าพันธุ์จะออกมาไหม
    if (breedCount[dog]){ //เช็คใน array(breedCount) นั้นว่าเจอ value(dog) ไหม
      breedCount[dog]++; //ถ้าเจอให้ +1
    } else {
      breedCount[dog] = 1; //ถ้าไม่เจอจะ add key และ value เข้าไป
    }
  }
  
  return breedCount;
}


const breedArray1 = [
    "Beagle",
    "Labrador Retriever",
    "Golden Retriever",
    "Bulldog",
    "Golden Retriever",
    "Poodle",
    "Beagle",
    "Beagle",
  ];
  
  console.log(countDogByBreed(breedArray1));
  /* 
          {
            Beagle: 3,
            "Labrador Retriever": 1,
            "Golden Retriever": 2,
            Bulldog: 1,
            Poodle: 1
          }
  */
  
  const breedArray2 = [
    "German Shepherd",
    "Siberian Husky",
    "Dachshund",
    "Siberian Husky",
    "Shih Tzu",
  ];
  
  console.log(countDogByBreed(breedArray2));
  /*
          {
            "German Shepherd": 1,
            "Siberian Husky": 2,
            Dachshund: 1,
            "Shih Tzu": 1
          }
  */
  
  // ถ้าเราพยายามเข้าถึง Key ที่ยังไม่มีอยู่ใน Object จะได้ค่ากลับมาเป็น undefined เช่น
  const dogFrequency = {
    "German Shepherd": 10,
  };
  
console.log(dogFrequency["German Shepherd"]); // 10
console.log(dogFrequency["Shih Tzu"]); // undefined
  
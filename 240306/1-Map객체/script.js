// Map 객체
// arr.map()

// 왜 생겨난걸까
// 자바스크립트에는 일반객체와 배열객체를 가지고있다
// 일반객체의 장점은 key와 value값을 갖고 있는 프로퍼티기능이 있다
// 데이터 체계적으로 보관/관리/사용가능하다
// for..in을 사용할 수 있긴하지만 객체 안에 있는 value값 만을 찾아와서 직접적으로 반복문을
// 가져와서 돌릴수는 없다
// 객체안에 구성되어 있는 아이템들은 배열처럼 인덱스번호를 할당받지 못한다
// 컴퓨터가 데이터를 바로 찾아오는 것과 사용자가 호출하여 가져오는 것은 큰 차이가 있다

// 배열객체의 장점은 배열안에 포함되어있는 아이템들이 고유의 인덱스 값을 가지고 있으며
// for문을 활용한 반복문으로 업무의 효율성 극대화
// 객체처럼  key와 value 형태로 구성된 체계적인 데이터 관리가 안된다

// 그래서 솔루션!!
// 일반객체와 배열객체의 장점만 모아서 하나로 만들어주면 어떨까 => Map 객체가 탄생
// key와 value 형태로 구성된 아이템을 가질 수 있다
// 각 아이템별 인덱스 값을 할당
// for의 반복문을 활용해서 언제든지 값을 추출할 수 있다

// const bag = new Map();
// bag.set("color", "red");

// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

myCup.set("type", "mini").set("purpose", "daily");

console.log(myCup.size); //5

console.log(myCup.get("color")); //white

console.log(myCup.has("color")); //true

console.log(myCup.has("variable")); //false

myCup.delete("type"); //"type", "mini" 삭제된다

//myCup.clear(); //모든 객체가 삭제된다

console.log(myCup);

console.log(myCup.keys()); //MapIterator {'color', 'material', 'capacity', 'purpose'}

for (let key of myCup.keys()) {
  console.log(key);
}
//color
//material
//capacity
//purpose

//배열과 같이 내부 아이템을 한 개씩 찾아와서 반복 순회할 수 있도록 해주는 객체
//=> 이터레이터(Iterator) 객체

for (let value of myCup.values()) {
  console.log(value);
}
// white
// ceramic
// 300ml
// daily

for (let value of myCup.entries()) {
  console.log(value);
}
//(2) ['color', 'white']
//(2) ['material', 'ceramic']
//(2) ['capacity', '300ml']
//(2) ['purpose', 'daily']

//하지만 데이터의 중복을 막을 수 없다
//동일한 데이터안 하나의 객체안에 들어오면 안되는 상황
//일반객체+배열객체+Map+데이터 중복이 안되도록 만든 객체가 Set()객체이다

// const numSet1 = new Set();
// numSet1.add("one").add("two"); //체이닝기법으로 추가 가능

// console.log(numSet1);//Set(2) {'one', 'two'}

const numSet2 = new Set([1, 2, 3]);

console.log(numSet2); //Set(3) {1, 2, 3}
console.log(numSet2.has(2));

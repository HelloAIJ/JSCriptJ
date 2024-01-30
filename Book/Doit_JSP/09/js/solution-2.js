class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run = function () {
    alert(`${this.name} is running.`);
  };
}

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }

  viewInfo() {
    alert(`이름 : ${this.name},  품종 : ${this.breed},  색깔 : ${this.color}`);
  }
}

// const cheez = new Pet("치즈", "yellow");
const bori = new Cat("보리", "흰색", "코숏");
bori.viewInfo();


class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  reg() {
    return `${this.color}색 ${this.name}이(가) 등록 되었습니다.`;
  }
}

class PetTotal extends Pet {
  constructor(name, color, age, breed) {
    super(name, color); // Pet에서 상속받는 자료
    this.age = age;
    this.breed = breed;
  }
  info() {
    return `
      이름: ${this.name},
      색상: ${this.color}색,
      나이: ${this.age}세,
      품종: ${this.breed}이(가)
      등록 되었습니다.`;
  }
  msg() {
    return `${super.reg()} 귀엽죠? :)`;
  }
}

const btn = document.querySelector('button');
const result = document.querySelector('#result');

let Petlist = new Array(); // 동물정보를 기록할 배열생성
btn.addEventListener('click', (e) => {
  e.preventDefault(); // 버튼 기본기능 막기

  const petname = document.querySelector('#petname');
  const petcolor = document.querySelector('#petcolor');
  const petage = document.querySelector('#petage');
  const petbreed = document.querySelector('#petbreed');

  const regPet = new PetTotal(petname.value, petcolor.value, petage.value, petbreed.value);
  // 등록결과 메시지 출력
  result.textContent = `${regPet.info()}`;

  // 등록된 동물 배열에 추가 후 리스트 확인 
  Petlist.push(regPet);
  console.log(Petlist);

  // 칸 비우기
  petname.value = '';
  petcolor.value = '';
  petage.value = '';
  petbreed.value = '';

  console.log(`${Petlist[0].reg()} ㅋㅋㅋㅋ`);
  // 프로토타입에서 함수의 실행문에 return값이 있다면 그것을 변수로 받아서 상속인스턴스 객체로 가져와 재구성을 할 수 있다.

  console.log(`${Petlist[0].msg()} ㅎㅎㅎ`);
});

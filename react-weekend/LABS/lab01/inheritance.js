class Component {
  //생성자
  constructor(props) {
    this.props = props; //객체가 가지고 있는 props에 객체 저장
  }
}

const comp1 = new Component({ name: '홍길동', age: 16 }); //전달 되는 게 없어서 undefined가 될 뿐 class는 new를 붙여서 함수처럼 호출함
console.log(comp1.props); //클래스 밖에서는 클래스 멤버에 접근할 때 생성자 이름에서 찾아감
//MyComponent: 하위 클래스, 자식 클래스
//Component: 상위 클래스, 부모 클래스
class MyComponent extends Component {
  constructor(props, enable) {
    super(props);
    this.enable = enable;
    //객체가 가지고 있는 props에 객체 저장
    // 상위 클래스의 생성자를 명시적으로 호출.
  }
  render() {
    return `Hello, ${this.props.name}`; //클래스 안에서 찾아갈 때는 this로 찾아감, 외에서는 객체 이름으로 찾아감
  }
} //상속

const comp2 = new MyComponent({ name: '그린아이티', age: 10 }, true);
console.log(comp2.props); //부모한테 물려 받은 props와 내가 가진 props 둘 다 사용 가능함
console.log(comp2.render());

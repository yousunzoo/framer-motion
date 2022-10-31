# framer-motion으로 animation 구현하기

- framer-motion : css 없이 animation의 기능을 구현할 수 있는 react library
- {motion} import from "framer-motion"
- motion을 사용하고자 하는 모든 요소는 motion.div 형식으로 컴포넌트를 만들어야 한다.

- styled-components와 같이 사용하기 위해선 styled components에 styled.div 대신 styled(motion.div) 형식으로 입력한다.

- animation 구현하는 방법 : motion component에 animate={{}} props를 추가한다.
- transition props를 통해 css transition도 구현할 수 있다.
- transition 안에는 여러 속성이 있다.
  - type : tween, spring 또는 inertia를 사용할 애니메이션 유형을 정의
  - delay, mass, repeat, damping, bounce ..
  - 물리적인 값을 조정할 수 있다.
- initial props를 통해 초기값을 설정할 수 있다.

## variants

: 코드를 더 깔끔하게 해주고 많은 애니메이션을 하나로 연결해준다.
: 애니메이션 설정을 분리된 오브젝트로 옮긴다.
: 기본적으로 애니메이션의 무대라고 생각.

- 변수로 사용할 객체를 생성해서 start, end시 상태를 지정한다.
- 변수, start, end 이름은 어떻게 하던지 상관없음.
- 모션 컴포넌트 안에 variants={varname}을 작성하고 initial="start" animate="end"를 작성하면 TS가 알아서 객체 내에서 꺼내 쓴다. (객체 내 이름과 같아야 한다.)
- 부모 컴포넌트에 variations가 있을 때, 자식 컴포넌트에게 variations와 initial, animate를 자동으로 전달한다.

### Orchestration

- delayChildren : 딜레이 시간 후에 하위 애니메이션 시작
- staggerChildren : 하위 컴포넌트의 애니메이션에 시간만큼 시차를 둘 수 있다.
- inherit : 부모로부터 variant 변경 사항을 상속하지 않도록 하려면 false로 설정

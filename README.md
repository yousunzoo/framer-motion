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

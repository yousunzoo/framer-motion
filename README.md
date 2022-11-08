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

### gestures

- hover : 포인터가 컴포넌트 위로 이동하거나 컴포넌트를 떠날 때를 감지
- whileHover : 호버 제스처가 인식되는 동안 애니메이션 할 속성 또는 변형 레이블
- Tap : 컴포넌트를 누르고 있는 동안 애니메이션 할 속성
- Drag : 요소에 대해 끌기 활성화. 특정 방향으로만 드래그하려면 "x" 또는 "y" 설정 `<motion.div drag />`
- whileDrag : 드래그 제스처가 인식되는 동안 애니메이션 할 속성 또는 레이블
- dragConstraints : 허용된 드래그 가능 영역에 제약 조건을 적용함
  // 픽셀 이용 : `<motion.div drag="x" dragConstraints={{left:0, right:300}} />`
  // ref 이용 : `<Wrapper ref={constraintsRef}><motion.div drag dragConstraints={constraintsRef}></Wrapper>`
- dragSnapToOrigin : 드래그를 놓을 떄, 원점으로 다시 애니메이션됨
- dragElastic : 외부 제약 조건에서 허용되는 이동 정도. 0 = 움직임 없음, 1 = 전체 움직임. 기본적으로 0.5로 설정됨

## motionValues

: 애니메이션 값의 상태(state)와 속도(velocity)를 추적한다.

- motionValue는 React Rendering Cycle을 발동시키지 않는다.
- useMotionValue(초기값)으로 사용가능
- user가 드래그 할때 motionvalue가 자동으로 업데이트된다.
- set 메서드로 업데이트할 수 있다.
- get 메서드로 값을 읽을 수 있다.

## useTransform

: 한 값 범위에서 다른 값 범위로 매핑하여 다른 MotionValue의 output을 변환하는 MotionValue를 만든다.
`useTransform(변환할 MotionValue, input, output)`

- input과 output은 배열 형태로 범위 지정.
- useScroll : 뷰포트가 스크롤될 때 업데이트되는 MotionValues를 리턴한다.
- scrollX : 실제 수평 스크롤 픽셀
- scrollY : 실제 수직 스크롤 픽셀
- scrollXProgress : 0 ~ 1 사이의 수평 스크롤
- scrollYProgress : 0 ~ 1 사이의 수직 스크롤

## path

- line drawing : svg 요소에 'pathLength', 'pathSpacing', 'pathOffset' 속성을 사용하여 Line drawing 애니메이션을 만들 수 있다.

- path : path svg 요소는 모양을 정의하는 일반 요소이다. path의 속성 d는 경로의 모양을 정의한다.

- motion.path 컴포넌트는 pathLength, pathSpacing, pathOffset을 가지고 있다. 수동 경로 측정 필요 없이 모두 0과 1 사이의 값으로 설정된다.

- transition object에는 default와 각 애니메이션 별 속성을 지정할 수 있다. default는 기본적으로 모든 속성에 적용되고, fill 속성만 다르게 설정하고 싶으면 transition={fill : {duration : 2}} 형식으로 애니메이션에 있는 속성을 꺼내와 따로 작성할 수 있다.

## AnimatePresence

- React js App에서 사라지는 component를 animate한다.
- 적용할 컴포넌트에 <AnimatePresence>로 감싸준다.
- 안쪽에 나타나거나 사라지는 컴포넌트를 감지해 animate 처리해준다.
- exit : 컴포넌트가 트리에서 제거될 때 애니메이션할 대상
  `<AnimatePresence>{isVisible ? <Box initial={} animate={} exit={} /> : null}</AnimatePresence>`

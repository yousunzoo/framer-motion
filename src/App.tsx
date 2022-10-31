import { useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 2px rgba(0, 0, 0, 0.06);
`;

const boxVar = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

function App() {
  const x = useMotionValue(0);
  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);

  console.log(x);
  return (
    <Wrapper>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;

import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  background-color: white;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Tabs = styled.div`
  background: #905dcd;
  border-radius: 20px;
  overflow: visible;
`;
export const Tab = styled.button`
    border-radius: 20px;
    border: none;
    padding: 0.5em 1.5em;
    cursor: pointer;
    font-weight: 600;
    font-family: "IBM Plex Sans"
    font-size: 1.6em;
    background-color: ${(props) => (props.active ? "white" : "transparent")};
    color: ${(props) => (props.active ? "#4300A3" : "white")};

    ${down("sm")}{
      padding: 0.5em 0.75em;
    }
`;

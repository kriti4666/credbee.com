import styled from "styled-components";

export const Tabs = styled.div`
  background: #905DCD;
  border-radius: 20px;
`;
export const Tab = styled.button`
    border-radius: 20px;
    border: none;
    padding: 0.5em 1.5em;
    font-weight: 600;
    font-family: "IBM Plex Sans"
    font-size: 1.6em;
    background-color: ${props=> props.active ? "white" : "transparent" };
    color: ${props=> props.active ? "#4300A3" : "white" }
`;

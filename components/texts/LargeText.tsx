import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import Colors from "../../config/Colors";
import { TextProps } from "./types";

const StyledText = styled.Text`
  font-size: 24px;
  color: ${Colors.black};
  text-align: left;
`;

const LargeText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.style}>{props.children}</StyledText>;
};

export default LargeText;

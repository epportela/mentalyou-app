import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Button = styled.TouchableOpacity`
  width: 70%;
  height: 50px;

  justify-content: center;
  align-items: center;

  align-self: center;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

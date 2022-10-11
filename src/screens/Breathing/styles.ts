import styled from "styled-components/native";

import LottieView from "lottie-react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;

  margin: 20px;

  justify-content: space-between;
`;

export const Animation = styled(LottieView)`
  align-self: center;
`;

export const StartButton = styled.Button`
  margin-top: 30px;
`;

export const Button = styled.TouchableOpacity`
  width: 70%;
  height: 50px;

  justify-content: center;
  align-items: center;

  align-self: center;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};

  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

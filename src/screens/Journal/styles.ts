import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

// export const Container = styled.View`
//   flex: 1;
//   /* padding: 10px; */
//   /* align-items: center; */
//   /* justify-content: center; */
// `;

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;

  margin: 20px;

  justify-content: space-between;
  /* padding: 10px; */
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Title = styled.Text`
  font-size: 34px;
  font-weight: 450;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};

  margin-top: 20px;
`;

export const Subtitle = styled.View`
  height: 60px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin-top: 15px;
`;

export const InputArea = styled.TextInput`
  font-size: 20px;

  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  border-bottom-width: 1px;
`;

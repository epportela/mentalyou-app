import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  /* margin: 40px; */
  align-items: center;

  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-size: 50px;
  font-weight: 450;

  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  /* justify-content: center; */
`;

export const GoogleAuthButton = styled.TouchableOpacity`
  width: 70%;
  height: 50px;
  border-radius: 5px;
  background-color: #fff;

  align-items: center;
  justify-content: center;

  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 450;
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;

  margin-top: 40px;
  margin-bottom: 60px;

  align-items: center;

  flex-direction: column;
  justify-content: space-between;
`;

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 40px;
  align-items: center;

  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-size: 40px;
  font-weight: 450;
  /* justify-content: center; */
`;

export const GoogleAuthButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 5px;
  background-color: #fff;

  align-items: center;
  justify-content: center;
`;

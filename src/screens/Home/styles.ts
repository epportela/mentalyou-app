import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components/native";

export const LoadingScreen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator``;

export const Container = styled.ImageBackground`
  flex: 1;

  justify-content: space-between;
`;

export const BottomSheet = styled.View`
  width: 100%;
  height: 60%;

  border-radius: 20px;
  background-color: #fdfdfd;
`;

// export const Content = styled(SafeAreaView)`
//   display: flex;
//   flex: 1;

//   margin: 0px 30px;
// `;

// export const Card = styled.View`
//   width: 100%;
//   height: 60%;

//   border-radius: 10px;
// `;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Greetings = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const UserName = styled(Greetings)`
  font-size: 30px;
  font-weight: 500;
`;

export const ProfilePhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const SecondaryHead = styled.View`
  margin: 20px;
  margin-top: 40px;
`;

export const MeetingSchedule = styled.View`
  align-self: center;

  align-items: center;

  margin-top: 50px;
`;

export const ScheduleText1 = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ScheduleText2 = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const MeetingScheduleButton = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  border-radius: 10px;

  margin-top: 30px;

  align-self: center;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const MeetingScheduleButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #425492;
`;

export const SecondaryHeadText1 = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: #000;
`;

export const SecondaryHeadText2 = styled.Text`
  font-size: 15px;
  font-weight: 400;

  color: #585757;
`;

export const ActionCards = styled.View`
  margin: 20px;
  margin-top: 10px;
`;

export const ActionCard = styled.ImageBackground`
  width: 100%;
  height: 150px;
  margin-top: 10px;
`;

export const CardContainer = styled.TouchableOpacity`
  margin: 15px;
`;

export const CardContainerText1 = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 500;

  font-size: 18px;
`;

export const CardContainerText2 = styled.Text`
  color: #D8D8D8;

  font-weight: 400;

  font-size: 13px;
`;

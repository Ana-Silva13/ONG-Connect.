import { useNavigation } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";
import { use } from "react";

export type RootStackParamList = {
  Login: undefined;
  Dashboard: {
    userName: string;
    voluntarioId: string;
  };
};

const navigation = useNavigation<any>();


export default function navigateToDashboard(userName: string, voluntarioId: string) {
  navigation('Dashboard', { userName, voluntarioId });
}
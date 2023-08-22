import { Text, View } from "react-native";
import useAppStyle from "../../AppStyles";

export const Inscription = () => {
  const styles = useAppStyle();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page d'inscription</Text>
    </View>
  );
};

import { View } from "react-native";
import useAppStyle from "../../AppStyles";
import { Button } from "../../components/Button";

export const Connexion = ({ onConnexion }) => {
  const styles = useAppStyle();

  return (
    <View style={styles.container}>
      <Button 
      text="Connexion" 
      onPress={() => onConnexion()}></Button>
    </View>
  );
};

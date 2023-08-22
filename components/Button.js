import { Text, TouchableOpacity } from "react-native";
import { colors } from "../theme";
import { Icon } from "react-native-elements";

export const Button = ({
  text,
  onPress,
  fab,
  icon,
  iconType = "font-awesome",
}) => {
  const styles = {
    content: {
      backgroundColor: colors.primary,
      height: 60,
      borderRadius: 15,
      padding: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontWeight: "bold",
      color: colors.white,
      fontSize: 20,
    },
    fab: {
      position: "absolute",
      bottom: 16,
      right: 16,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      elevation: 4,
    },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={fab ? styles.fab : styles.content}
    >
      {icon ? (
        <Icon color={styles.text.color} name={icon} type={iconType} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

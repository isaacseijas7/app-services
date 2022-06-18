import * as React from "react";
import { Pressable, Text, View } from "native-base";
import { colors } from "../../core/theme";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const colorIcon = isFocused ? colors.primary["600"] : "#999";

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            flex="1"
            justifyContent="center"
            alignItems="center"
            paddingY={2}
          >
            {label === "Inicio" && (
              <Ionicons name="home" size={24} color={colorIcon} />
            )}

            {label === "Favoritos" && (
              <AntDesign name="heart" size={24} color={colorIcon} />
            )}

            {label === "Tickets" && (
              <MaterialCommunityIcons
                name="ticket"
                size={24}
                color={colorIcon}
              />
            )}

            {label === "Perfil" && (
              <FontAwesome5
                name="user-alt"
                size={24}
                color={colorIcon}
              />
            )}
            <Text style={{ color: colorIcon }}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;

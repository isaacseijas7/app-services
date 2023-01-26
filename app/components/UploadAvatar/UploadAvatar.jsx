import { Avatar, Pressable, Text, View } from "native-base";
import React from "react";

const UploadAvatar = () => {
  const onPressUploadImage = () => {
    console.log("UploadAvatar");
  };

  return (
    <Pressable onPress={onPressUploadImage}>
      <Avatar bg="white" size="xl"></Avatar>
      <View>
        <Text
          _text={{
            fontSize: "md",
          }}
        >
          Cragar imagen
        </Text>
      </View>
    </Pressable>
  );
};

export default UploadAvatar;

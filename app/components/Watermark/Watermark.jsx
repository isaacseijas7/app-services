import { Text, View } from "native-base";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { timestampToDate } from "../../helpers";

const Watermark = ({ children }) => {
  const [location, setLocation] = useState({});
  const [date, setDate] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log({ status });
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      console.log({ location });
      if (
        location &&
        location.coords &&
        location.coords.latitude &&
        location.coords.longitude &&
        location.timestamp
      ) {
        setLocation(location);
        setDate(timestampToDate(location.timestamp));
      }
    })();
  }, []);

  return (
    <View
      style={{
        position: "relative",
      }}
      flex={1}
    >
      {children}
      <View
        style={{
          position: "absolute",
          //   top: 0,
          //   left: 0,
          bottom: 20,
          right: 15,
        }}
      >
        {location?.coords && (
          <>
            <View flexDirection={"row"}>
              <Text color={"blue.200"} fontSize={"md"} opacity={0.8}>
                {date?.year}-{date?.month}-{date?.date} {date?.hours}:
                {date?.minutes}:{date?.seconds}
              </Text>
            </View>
            <View flexDirection={"row"}>
              <Text color={"blue.200"} fontSize={"md"} bold opacity={0.8}>
                Latitud:{" "}
              </Text>
              <Text color={"blue.200"} fontSize={"md"} opacity={0.5}>
                {location?.coords?.latitude}
              </Text>
            </View>
            <View flexDirection={"row"}>
              <Text color={"blue.200"} fontSize={"md"} bold opacity={0.8}>
                Longitud:{" "}
              </Text>
              <Text color={"blue.200"} fontSize={"md"} opacity={0.5}>
                {location?.coords?.longitude}
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Watermark;

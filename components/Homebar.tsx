import * as React from "react";
import { Appbar } from "react-native-paper";
import { Avatar } from 'react-native-paper';
const Homebar = () => {

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header elevated>
      <Avatar.Image size={40} source={require("../assets/images/Rp.jpg")} />
      <Appbar.Content title="Signin" style={{marginLeft:10}}/>
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default Homebar;

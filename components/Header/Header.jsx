import {Image, Text} from "react-native";
import logo from "../../assets/logo.png";
import {s} from "./Header.style";

export const Header = () => {
  return (
    <>
      <Image style={s.img} source={logo} resizeMode="contain" />
      <Text style={s.subTitle}>Tu as un truc à faire !</Text>
    </>
  );
};

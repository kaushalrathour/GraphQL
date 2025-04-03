import { NavigationContainer as Navigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./screens/Home/Home";
import { StatusBar } from "react-native";
import EventsScreen from "./screens/Events/Events";
import PlayScreen from "./screens/Play/Play";
import ExploreScreen from "./screens/Explore/Explore";
import LoginScreen from "./screens/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { StackParamList } from "./types/StackParamList";
import ProductDetailScreen from "./screens/ProductDetail/ProductDetail";

const {Screen, Navigator} = createStackNavigator<StackParamList>();
const options = {
    headerShown: false
}
const NavigationContainer = (): React.JSX.Element =>{
    return(
        <>
        <Navigation>
            <Header/>
            <StatusBar/>
            <Navigator initialRouteName="Home">
                <Screen component={HomeScreen} name="Home" options={options}/>
                <Screen component={EventsScreen} name="Events" options={options}/> 
                <Screen component={PlayScreen} name="Play" options={options}/> 
                <Screen component={ExploreScreen} name="Explore" options={options}/> 
                <Screen component={LoginScreen} name="Login" options={options}/> 
                <Screen component={ProductDetailScreen} name="ProductDetail" options={options}/> 
            </Navigator>
            <Footer/>
        </Navigation>
        </>
    )
}

export default NavigationContainer;
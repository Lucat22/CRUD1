import { createStackNavigator } from "@react-navigation/stack";
import ListaAsync from "./ListaAsync";
import FormAsync from "./FormAsync";

const Stack = createStackNavigator();

export default function StackAsync(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="ListaAsync">
            <Stack.Screen name='ListaAsync' component={ListaAsync}/>
            <Stack.Screen name="FormAsync"  component={FormAsync}/>
        </Stack.Navigator>
    )
}
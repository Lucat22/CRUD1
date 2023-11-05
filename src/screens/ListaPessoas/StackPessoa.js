import { createStackNavigator } from '@react-navigation/stack'
import FormPessoa from './FormPessoa'
import ListaPessoa from './ListaPessoa'

const Stack = createStackNavigator()

export default function StackPessoas() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListaPessoa'
        >

            <Stack.Screen name='ListaPessoa' component={ListaPessoa} />

            <Stack.Screen name='FormPessoa' component={FormPessoa} />

        </Stack.Navigator>

    )
}
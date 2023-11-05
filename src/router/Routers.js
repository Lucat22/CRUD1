import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'



import StackPessoas from '../screens/ListaPessoas/StackPessoa'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='StackPessoa'>
            <Drawer.Screen name="StackPessoa" component={StackPessoas} />
        </Drawer.Navigator>

    )
}
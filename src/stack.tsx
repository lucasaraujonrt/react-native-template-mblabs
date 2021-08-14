import React, { ReactNode } from 'react';
import { createStack } from './services/navigation';
import Login from './pages/Auth/Login';

const MainStack = createStack();
const ContentStack = createStack();
const StartStack = createStack();

const routeList: Array<{ name: string; component: ReactNode }> = [];

const ContentNavigator = () => (
  <ContentStack.Navigator screenOptions={{ headerShown: false }}>
    {routeList.map((item) => item.component)}
  </ContentStack.Navigator>
);

const AuthNavigator = () => (
  <StartStack.Navigator screenOptions={{ headerShown: false }}>
    <StartStack.Screen name="Login" component={Login} />
  </StartStack.Navigator>
);

const Navigator = () => (
  <MainStack.Navigator
    initialRouteName=""
    screenOptions={{ headerShown: false }}
  >
    <MainStack.Screen name="Start" component={AuthNavigator} />
    <MainStack.Screen name="Content" component={ContentNavigator} />
  </MainStack.Navigator>
);

export default Navigator;

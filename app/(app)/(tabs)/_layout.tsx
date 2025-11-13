import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const Tabs = withLayoutContext(Navigator);

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarLabelStyle: { fontWeight: 'bold', color: "white", fontSize: 14 },
                tabBarStyle: { backgroundColor: '#48BD77', height: 50 },
                tabBarIndicatorContainerStyle: { alignItems: 'center' },
                tabBarIndicatorStyle: { backgroundColor: 'white', height: 5, alignSelf: 'center', borderRadius: 2 },
            }}
        >
            <Tabs.Screen name="Applications" options={{ title: 'Application' }} />
            <Tabs.Screen name="Settings" options={{ title: 'Settings' }} />
        </Tabs>
    );
}

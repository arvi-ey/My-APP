import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Switch, Text, useColorScheme, useWindowDimensions, View } from 'react-native'


type AppProps = {
    app_id?: number,
    fk_kid_id?: number,
    kid_profile_image?: string,
    app_name?: string,
    app_icon?: string,
    app_package_name?: string,
    status?: string
}

type AppBoxProps = {
    data: AppProps
}

const AppBox: React.FC<AppBoxProps> = ({ data }) => {
    const { width, height } = useWindowDimensions()
    const [isEnabled, setIsEnabled] = useState(false);
    const colorScheme = useColorScheme();


    useEffect(() => {
        if (data.status == "Active") setIsEnabled(true)
        else setIsEnabled(false)
    }, [data.status])
    return (
        <View key={data.app_id} style={[styles.AppBoxContainer, { width: width }]}>
            <View>
                <Image
                    source={{ uri: data.app_icon }}
                    style={{ height: 50, width: 50 }}
                />
            </View>
            <View style={{ width: "50%", justifyContent: "center" }}>
                <Text style={[{ fontWeight: "bold", fontSize: 15, opacity: 0.8 }, colorScheme === "dark"
                    ? { color: "white" }
                    : { color: "black" }]}>
                    {data?.app_name?.length > 20
                        ? `${data?.app_name.slice(0, 20)}...`
                        : data?.app_name}
                </Text>
            </View>
            <View>
                <Switch
                    trackColor={{ false: '#767577', true: '#48BD77' }}
                    thumbColor={isEnabled ? '#48BD77' : '#f4f3f4'}
                    onValueChange={() => setIsEnabled(prev => !prev)}
                    value={isEnabled}
                />
            </View>

        </View>
    )
}

export default AppBox

const styles = StyleSheet.create({
    AppBoxContainer: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 20,
        paddingLeft: 25
    }
})
import AppBox from '@/app/appcomponents/AppBox';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, useColorScheme, useWindowDimensions, View } from 'react-native';



type AppProps = {
    app_id?: number,
    fk_kid_id?: number,
    kid_profile_image?: string,
    app_name?: string,
    app_icon?: string,
    app_package_name?: string,
    status?: string
}


const Applications = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [appList, setAppList] = useState<AppProps[] | []>([])
    const [filteredList, setFilteredList] = useState<AppProps[] | []>([])
    const { width, height } = useWindowDimensions()
    const [searchtext, setSearchText] = useState<string>("")
    const colorScheme = useColorScheme();
    const LoaderColor = colorScheme == 'dark' ? { backgroundColor: "#313131" } : { backgroundColor: "#F0F0F0" }

    useEffect(() => {
        const FetchAppList = async () => {
            try {
                setLoading(true)
                const result = await axios.post(`https://navkiraninfotech.com/g-mee-api/api/v1/apps/list?kid_id=378`)
                if (result.data.data.app_list.length > 0) {
                    setAppList(result.data.data.app_list)
                    setFilteredList(result.data.data.app_list)
                }
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)

            }
        }
        FetchAppList()
    }, [])

    const HandleSearch = (text: string) => {
        setSearchText(text)
        if (text.trim() === ' ') {
            setFilteredList(appList)
        } else {
            const filtreredList = appList.filter((app) => app.app_name?.toLowerCase().startsWith(text.toLowerCase()))
            setFilteredList(filtreredList)
        }
    }


    return (
        <View style={{ flex: 1, }}>
            <View style={{ width: width, alignItems: "center", marginTop: 20 }}>
                <TextInput
                    style={[styles.SeacrhBox, colorScheme == "dark" ? { backgroundColor: "black", color: 'white' } : { backgroundColor: "white", color: 'black' }, { width: width - 20 }, colorScheme == "dark" ? { borderColor: "white" } : { borderColor: "grey" }]}
                    placeholder="Search..."
                    value={searchtext}
                    placeholderTextColor={colorScheme == "dark" ? "white" : "black"}
                    onChangeText={(text) => HandleSearch(text)}
                />

            </View>
            {
                loading &&
                <Text style={[{ textAlign: "center", fontWeight: "bold", marginTop: 5 }, colorScheme == "dark" ? { color: "white" } : { color: "black" }]}>Loading...</Text>
            }
            {
                loading &&
                <View style={{ width: width - 20, alignSelf: 'center', flex: 1 }}>
                    <ScrollView style={[styles.container,]}
                        contentContainerStyle={{
                            alignItems: 'center', paddingVertical: 20,
                            gap: 15,
                            width: width - 20

                        }}
                    >
                        {Array.from({ length: 8 }).map((item, index) => (
                            <View key={index} style={[{ width: width - 20, }, styles.SkeletonBox]}>
                                <View style={[{ paddingLeft: 30, height: 60, width: 60, borderRadius: 30, backgroundColor: colorScheme === 'dark' ? '#313131' : '#e6e6e6', }]}>

                                </View>
                                <View style={[{ height: 60, width: width - 100, borderRadius: 25, backgroundColor: colorScheme === 'dark' ? '#313131' : '#e6e6e6', }]} >

                                </View>

                            </View>
                        ))}
                    </ScrollView>
                </View>
            }

            {
                (filteredList?.length > 0 && !loading) &&
                <View style={{ flex: 1, marginTop: 10 }}>
                    <FlatList
                        data={filteredList}
                        keyExtractor={(item) => item?.app_id!}
                        renderItem={({ item }) => (
                            <AppBox data={item} />
                        )}
                    />
                </View>
            }
        </View>
    )
}

export default Applications

const styles = StyleSheet.create({
    SeacrhBox: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        fontSize: 16,
        // backgroundColor: 'white',
    },
    container: {
        flex: 1,

    },
    SkeletonBox: {
        // backgroundColor: 'red'
        flexDirection: "row",
        gap: 5,
    }
})
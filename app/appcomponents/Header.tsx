
import { Image, StyleSheet, Text, View } from 'react-native'
import Right from "../../assets/images/right.png"


const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" }}
                style={styles.UserImage}
            />
            <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>Tuhin</Text>
            <View style={styles.statusBox}>
                <Text style={styles.statusBoxtext}>Connected</Text>
                <View style={{ backgroundColor: "#48BD77", borderRadius: 20, padding: 5 }}>
                    <Image
                        source={Right}
                        style={{ height: 20, width: 20, }}
                    />
                </View>
            </View>
        </View>
    )
}


export default Header

const styles = StyleSheet.create({

    header: {
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#48BD77",
        gap: 15
    },
    UserImage: {
        height: 100,
        width: 100,
        borderRadius: 50

    },
    statusBox: {
        backgroundColor: "white",
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    statusBoxtext: {
        fontWeight: "bold",

    }
})




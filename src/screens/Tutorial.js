import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    PixelRatio,
    Dimensions,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

export default function Tutorial({ navigation }) {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');

    const setSliderPage = (event) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    };

    const { currentPage: pageIndex } = sliderState;

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1 }}
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(event) => {
                        setSliderPage(event);
                    }}
                >
                    <View style={{ width, height, alignItems: 'center', marginTop: 5 }}>
                        <Image source={require('../../assets/images/start.jpg')}
                            style={styles.imageStyle} />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Welcome</Text>
                            <Text style={styles.paragraph}>Let Start</Text>
                            <Text style={styles.paragraph}>Or you can skip the Tutorial</Text>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('To-Do');
                                }}>
                                <Text style={styles.textbtn}>SKIP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width, height, alignItems: 'center', marginTop: 5 }}>
                        <Image
                            source={require('../../assets/images/create.png')}
                            style={styles.imageStyle}
                        />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Create A Task</Text>
                            <Text style={styles.paragraph}>Press "Plus Button"</Text>
                        </View>
                    </View>
                    <View style={{ width, height, alignItems: 'center', marginTop: 5 }}>
                        <Image
                            source={require('../../assets/images/fill.png')}
                            style={styles.imageStyle}
                        />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Description your task</Text>
                            <Text style={styles.paragraph}>Write Title, Description, Type of task and set Reminder if you want</Text>
                        </View>
                    </View>
                    <View style={{ width, height, alignItems: 'center', marginTop: 5 }}>
                        <Image
                            source={require('../../assets/images/success.png')}
                            style={styles.imageStyle}
                        />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Success</Text>
                            <Text style={styles.paragraph}>When you save the task, this anoucement will apear</Text>
                        </View>
                    </View>
                    <View style={{ width, height, alignItems: 'center', marginTop: 5 }}>
                        <Image
                            source={require('../../assets/images/choose.png')}
                            style={styles.imageStyle}
                        />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Change, Done or Delete</Text>
                            <Text style={styles.paragraph}>Choose what you want with the task</Text>
                        </View>
                    </View>
                    <View style={{ width, height, alignItems: 'center', marginTop: 5 }}>
                        <Image
                            source={require('../../assets/images/done.png')}
                            style={styles.imageStyle}
                        />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Done</Text>
                            <Text style={styles.paragraph}>If you tick, the task will be moved to "Done" tab</Text>
                        </View>
                    </View>
                    <View style={{ width, height, alignItems: 'center', marginTop: 5 }}>
                        <Image
                            source={require('../../assets/images/delete.png')}
                            style={styles.imageStyle}
                        />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Delete</Text>
                            <Text style={styles.paragraph}>Delete the task after success</Text>
                        </View>
                    </View>
                    <View style={{ width, height, alignItems: 'center', marginTop: 5 }}>
                        <Image
                            source={require('../../assets/images/delete.png')}
                            style={styles.imageStyle}
                        />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Done</Text>
                            <Text style={styles.paragraph}>Thank you for using our App</Text>
                            <Text style={styles.paragraph}>Go to To-Do page and create your tasks</Text>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => {
                                    navigation.navigate('To-Do');
                                }}>
                                <Text style={styles.textbtn}>BACK</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
                {/* <View style={styles.paginationWrapper}>
                    {Array.from(Array(7).keys()).map((key, index) => (
                        <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
                    ))}
                </View> */}
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    textbtn: {
        fontWeight: 'bold',
    },
    btn: {
        elevation: 8,
        backgroundColor: "#0080ff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 200,
        alignItems: 'center',
        marginTop: 20,
    },
    imageStyle: {
        height: PixelRatio.getPixelSizeForLayoutSize(135),
        width: '80%',
        borderRadius: 5,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 35,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 200,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#0898A0',
        marginLeft: 10,
    },
});

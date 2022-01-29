import { StyleSheet } from "react-native";
import { Color } from "../../utils/color";
import ThemeUtils from "../../utils/ThemeUtils";


export const Styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Color.WHITE },
    imgContainer:{ flex: 0.4, justifyContent: 'center', alignItems: 'center' },
    secondContainer:{ flex: 0.6, justifyContent: 'center', alignItems: 'center' },
    tinyLogo: {
        width: ThemeUtils.relativeWidth(50),
        height: ThemeUtils.relativeHeight(50),
        alignContent: 'center'
    },
})
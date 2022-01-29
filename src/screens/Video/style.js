import { StyleSheet } from "react-native";
import { Color } from "../../utils/color";
import ThemeUtils from "../../utils/ThemeUtils";

export const Styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Color.VIDEO_BACKGROUND },
    listContainer: { marginTop: ThemeUtils.relativeHeight(1) },
    flatStyle: { flex: 1, marginBottom: 2, },
    stickBtn: { position: 'absolute', bottom: 10, right: 15, alignSelf: 'flex-end', },
    title: { textAlign: 'center', color: Color.DARK_GREY, fontSize: 20, fontWeight: 'bold', marginVertical: ThemeUtils.relativeHeight(2) },
    secondContainer: { marginBottom: ThemeUtils.relativeHeight(8) }
})
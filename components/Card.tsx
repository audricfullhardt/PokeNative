import { ViewProps, View, ViewStyle } from "react-native"
import { Shadows } from "@/constants/Shadow"
import { useThemeColors } from "@/hooks/useThemeColors"

type Props = ViewProps

export function Card ({style, ...rest}: Props){
    const colors = useThemeColors();
    return <View style={[style, styles, {backgroundColor: colors.grayWhite}]} {...rest}/>
}

const styles = {
    backgroundColor: "#FFF",
    borderRadius: 8,
    ...Shadows.dp2
} satisfies ViewStyle;
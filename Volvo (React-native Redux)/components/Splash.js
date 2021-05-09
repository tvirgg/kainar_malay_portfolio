import * as React from "react"
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

function SvgComponent(props) {
    return (
      <Svg
        width={310}
        height={618}
        viewBox="0 0 320 518"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
          <Rect
            x={-205.202}
            width={530}
            height={530}
            rx={265}
            transform="rotate(7.786 -205.202 0)"
            fill="url(#prefix__paint0_radial)"
            fillOpacity={0.8}
          />
          <Defs>
              <RadialGradient
                id="prefix__paint0_radial"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(87.896 -90.12 130.235) scale(313.278)"
              >
                  <Stop offset={0.523} stopColor={!props.filling_colorf? '#ffffff': props.filling_colorf} stopOpacity={0.3} />
                  <Stop offset={1} stopColor={!props.filling_colors? '#ffffff': props.filling_colors} />
              </RadialGradient>
          </Defs>
      </Svg>
    )
}

export default SvgComponent


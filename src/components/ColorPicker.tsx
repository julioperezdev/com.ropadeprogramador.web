import { SketchPicker } from "react-color"
import { useSnapshot } from "valtio"

import state from "../store"

export default function ColorPicker(){

    const snap = useSnapshot(state);

    return(
        <div
        className="absolute left-full ml-3"
        >
            <SketchPicker
            color={snap.color}
            disableAlpha
            onChange={(color) => state.color = color.hex}
            presetColors={[
                '#000000','#ffffff','#ff0000','#00ff00','#0000ff', '#ffff00', '#00ffff', '#ff00ff'
            ]}
            />

        </div>
    )
}
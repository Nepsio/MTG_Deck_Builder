import react from "react";
import { ManaPickerButton} from "../../basic/Button";
import mountain from "../../../../asset/mtgAsset/mana/mountain.png";
import forest from "../../../../asset/mtgAsset/mana/forest.png";
import plain from "../../../../asset/mtgAsset/mana/plain.png";
import swamp from "../../../../asset/mtgAsset/mana/swamp.png";
import island from "../../../../asset/mtgAsset/mana/island.png";
import { forestCardData , mountainCardData, swampCardData, islandCardData, plainCardData } from "../../../../mockData/land";
import { CardData } from "../../../../util/CardData";


function ManaPicker (props) {
    return (
        <div class="grid grid-cols-5 pt-5 ">
            <div class="pr-2 ">
                <ManaPickerButton
                    onClick = {() => props.addCardToSelection(new CardData(mountainCardData))}
                    image={mountain}
                />
            </div>
            <div class="pr-2">
                <ManaPickerButton
                    onClick = {() => props.addCardToSelection(new CardData(forestCardData))}
                    image={forest}
                />
            </div>
            <div class="pr-2">
                <ManaPickerButton
                    onClick = {() => props.addCardToSelection(new CardData(plainCardData))}
                    image={plain}
                />
            </div>
            <div class="pr-2">
                <ManaPickerButton
                    onClick = {() => props.addCardToSelection(new CardData(swampCardData))}
                    image={swamp}
                />
            </div>
            <div class="pr-2">
                <ManaPickerButton
                    onClick = {() => props.addCardToSelection(new CardData(islandCardData))}
                    image={island}
                />
            </div>
        </div>
        
    );
}


export default ManaPicker;

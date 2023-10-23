import React from "react";
import ProgressBar from "../common/component/basic/ProgressBar";
import  {Card, CardSection, CardSectionScrollable} from "../common/component/container/Card";
import { Slide } from "react-awesome-reveal";

/**
 * Composant représentant la page de statistique du deck
 * @param {*} props 
 * @returns 
 */
function MTGStat(props) {
    return (
        <div className="p-5">
            <Card title="Statistiques">                                
                <div class="py-2">
                    <ProgressBar progress={props.deck.getTypeRatio("Creature")} label="Creature"/>
                </div>
                <div class="py-2">
                    <ProgressBar progress={props.deck.getTypeRatio("Land")} label="Land"/>
                </div>
                <div class="py-2">
                    <ProgressBar progress={props.deck.getTypeRatio("Instant")} label="Instant"/>
                </div>
                <div class="py-2">
                    <ProgressBar progress={props.deck.getTypeRatio("Sorcery")} label="Sorcery"/>
                </div>
                <div class="py-2">
                    <ProgressBar progress={props.deck.getTypeRatio("Artifact")} label="Artifact"/>
                </div>
                <div class="py-2">
                    <ProgressBar progress={props.deck.getTypeRatio("Enchantment")} label="Enchantment"/>
                </div>
                <div class="py-2">
                    <ProgressBar progress={props.deck.getTypeRatio("Planeswalker")} label="Planeswalker"/>
                </div>

        
            </Card>
        </div>
    )

}


export default MTGStat;
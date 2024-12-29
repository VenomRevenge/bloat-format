type NestedListItemType = {
    item: string
}

type ContentItemType = {
    title: string,
    info: Array<string>,
}

type BuildSectionInfoProps = {
    mainTitle: string,
    content: Array<ContentItemType>,
}

export default function Format1v1v () {

    const gameSetupInfo = {
        mainTitle: "Game Setup",
        content: [
            {
                title: "Dice Rolls for Starting Order:",
                info: [
                    "All duelists roll a die.",
                    "The duelist with the highest roll chooses whether to go first or last",
                    "The duelist with the second-highest roll: Chooses the rotation direction (clockwise or counterclockwise).",
                    "In the event of a tie for the highest roll, those tied players reroll until a single highest roller is determined.",
                ]
            },
            {
                title: "Draw Phase:",
                info: [
                    "Every duelist draws for turn, including the player going first."
                ]
            },
        ]
    }
    
    const attackAndCombatRulesInfo = {
        mainTitle: "Attack and Combat Rules",
        content: [
            {
                title: "First Rotation:",
                info: [
                    "Until the first rotation is complete, no duelist can attack another except the player who goes last in the current rotation.",
                ]
            },
            {
                title: "Attack Limitations:",
                info: [
                    "A duelist can only be attacked once per rotation.",
                    "If every duelist has been attacked during a rotation, the attacking player may choose to attack any duelist.",
                ]
            },
            {
                title: "Saving Die Mechanic:",
                info: [
                    "Each duelist has one Saving Die for the entire duel.",
                    "If an attack would cause a duelist to lose the game (e.g., a direct attack with 3000 ATK when they have 3000 or less LP) the defender can challenge the attacker to a dice roll",
                    "Both players roll a die.",
                    "If the defender's roll is higher, the attack is negated.",
                    "This challenge effect persists until the end of the current turn.",
                    "If a duelist deals 2000 or more burn damage, their Saving Die is null and void."
                ]
            },
        ]
    }

    const cardActivationRulesInfo = {
        mainTitle: "Card Activation Rules",
        content: [
            {
                title: "Hand Trap Restriction:",
                info: [
                    "Hand traps (e.g., Ash Blossom, Dimension Shifter, Infinite Impermanence) can only be used during your own turn.",
                ]
            },
            {
                title: "Mass Effects:",
                info: [
                    "Cards like Raigeki or Harpie's Feather Duster must specify which opponent's field to affect.",
                    "Cards like Heavy Storm and Dark Hole affect all fields.",
                ]
            },
            {
                title: "Special Card Rules:",
                info: [
                    "Virus Cards (e.g., Crush Card Virus) target only one specific duelist.",
                    "Mirror Force-like cards(e.g., Mirror Force, Jelly Cannon, Magic Cylinder) affect only the attcking duelist.",
                    "Ring of Destruction-like cards and effects(e.g. Flame Wingman Effect, Judgement of Anubis) affect only the duelist who's card is destroyed/affected and the activator of the card.",
                ]
            },
            {
                title: "Instant-Win Conditions:",
                info: [
                    "If an instant-win condition (e.g., assembling all five Exodia pieces, Jackpot 7) is met then the duelist achieving the win condition is declared the winner.",
                    "The remaining duelists are ranked by their current LP (highest to lowest)."
                ]
            }
        ]
    }

    return (
        <main className="flex flex-col px-64 my-32 gap-16">

            <h1 className="text-5xl font-bold mx-auto mb-24" >1v1v* Yu-Gi-Oh Format Rules</h1>

            <div>
                <BuildSectionInfo mainTitle={ gameSetupInfo.mainTitle }  content={ gameSetupInfo.content }/>
            </div>

            <hr />

            <div>
                <BuildSectionInfo mainTitle={ attackAndCombatRulesInfo.mainTitle }  content={ attackAndCombatRulesInfo.content }/>
            </div>
            
            <hr />

            <div>
                <BuildSectionInfo mainTitle={ cardActivationRulesInfo.mainTitle }  content={ cardActivationRulesInfo.content }/>
            </div>


        </main>
    )
};

function BuildSectionInfo({ mainTitle, content}: BuildSectionInfoProps) {

    const contentInfo = content.map(section => {
        
        return (
        <li className="text-2xl">
            { section.title }
            <ul className="list-disc my-8 ml-5">
                { section.info.map(info => <BuildNestedListItems item={info} /> )}
            </ul>
        </li>
        )
    });

    return (
        <div>
            <h3 className="text-3xl font-bold mb-8">
                { mainTitle }
            </h3>
            <ol className="list-decimal ml-5">
                { contentInfo }
            </ol>
        </div>
    )
};

function BuildNestedListItems({ item }: NestedListItemType) {
    return (
        <li className="text-xl">{item}</li>
    )
}
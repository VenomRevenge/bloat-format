type NestedListItemType = {
    item: string
}

type ContentItemType = {
    title: string,
    info: string[],
}

type BuildSectionInfoProps = {
    mainTitle: string,
    content: ContentItemType[],
}


export default function BuildSectionInfo({ mainTitle, content}: BuildSectionInfoProps) {

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
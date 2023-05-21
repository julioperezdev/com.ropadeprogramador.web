import { v4 as uuid } from 'uuid'

interface SizeCategoryRequest {
    sizeCategory: string[];
    updateColor: (keyToSearch: string) => void
}

export default function SizeCategoryComponent({ sizeCategory, updateColor }: SizeCategoryRequest) {

    const viewList = sizeCategory.includes('S') && sizeCategory[0] !== 'S' ? sizeCategory.reverse() : sizeCategory;
    return (
        <div>
            {viewList && viewList.map(particularSize => (
                <p key={uuid()} onClick={()=>updateColor(particularSize)}>{particularSize}</p>
            ))}
        </div>
    )
}
interface TagProps {
    name: string;
}

function Tag({ name }: TagProps) {
    return (
        <div className="text-xs font-medium bg-notionHover text-notionGray px-2.5 py-0.5 rounded-md max-w-fit truncate border border-notionBorder">
            {name}
        </div>
    );
}

export default Tag;

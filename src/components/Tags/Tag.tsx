interface TagProps {
    name: string;
}

function Tag({ name }: TagProps) {
    return (
        <div className="text-xs font-medium bg-tagBlue text-white px-3 py-1 rounded-full max-w-fit truncate">
            {name}
        </div>
    );
}

export default Tag;

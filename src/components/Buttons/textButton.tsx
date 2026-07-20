interface TextButtonProps {
    text: string;
    url: string | undefined;
}

function TextButton({ text, url }: TextButtonProps) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block no-underline">
            <div className="bg-white hover:bg-notionHover min-h-9 max-h-9 px-4 py-1.5 rounded-md border border-notionBorder transition-colors flex items-center">
                <span className="text-notionText font-medium text-sm">
                    {text}
                </span>
            </div>
        </a>
    );
}

export default TextButton;

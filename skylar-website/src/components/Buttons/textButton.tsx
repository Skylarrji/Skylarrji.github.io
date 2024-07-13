interface TextButtonProps {
    text: string;
    url: string | undefined;
}

function TextButton({ text, url }: TextButtonProps) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block no-underline">
            <div className="bg-white hover:bg-grey min-h-11 max-h-11 px-5 py-2 rounded-md drop-shadow-lg">
                <span className="text-black font-bold">
                    {text}
                </span>
            </div>
        </a>
    );
}

export default TextButton;

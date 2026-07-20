interface ContactButtonProps {
    graphic: string;
    url: string | undefined;
}

function ContactButton({ graphic, url }: ContactButtonProps) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block no-underline">
            <div className="bg-white hover:bg-notionHover min-w-10 max-w-10 min-h-10 max-h-10 p-2 rounded-md border border-notionBorder transition-colors">
                <img src={graphic} alt="Contact Graphic" className="block" />
            </div>
        </a>
    );
}

export default ContactButton;

interface ContactButtonProps {
    graphic: string;
    url: string | undefined;
}

function ContactButton({ graphic, url }: ContactButtonProps) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block no-underline">
            <div className="bg-white hover:bg-grey min-w-11 max-w-11 min-h-11 max-h-11 p-2 rounded-md drop-shadow-lg">
                <img src={graphic} alt="Contact Graphic" className="block" />
            </div>
        </a>
    );
}

export default ContactButton;

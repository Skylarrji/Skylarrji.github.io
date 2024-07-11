interface ContactButtonProps {
    graphic: string;
    url: string | undefined;
}

function ContactButton({ graphic, url }: ContactButtonProps) {
    return (
        <div className="bg-white hover:bg-grey min-w-11 max-w-11 min-h-11 max-h-11 p-2 rounded-md drop-shadow-lg">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={graphic} alt="Contact Graphic" />
            </a>
        </div>
    );
}

export default ContactButton;

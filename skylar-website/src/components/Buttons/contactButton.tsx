import { useEffect } from "react";


interface ContactButtonProps {
    graphic: string;
    url: string | undefined;
}

function ContactButton({ graphic, url }: ContactButtonProps) {
    return (
        <div className="bg-white hover:bg-grey w-11 p-2 rounded-md drop-shadow-lg">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={graphic} alt="Contact Graphic" />
            </a>
        </div>
    );
}

export default ContactButton;

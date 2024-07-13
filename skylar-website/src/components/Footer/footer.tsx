function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="flex text-white py-4 mx-auto text-center">
                <p className="mt-auto ml-10">Created from scratch using React and Tailwind.</p>
                <div className="text-right ml-auto mr-10">
                    <p>© Copyright {currentYear} Skylar Ji</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="flex text-white py-4 mx-auto text-center">
                <p className="mt-auto text-left lg:ml-10 md:ml-10 sm:ml-10 ml-5 w-full lg:text-md md:text-md sm:text-md text-sm">Created from scratch using React and Tailwind.</p>
                <div className="text-right ml-auto w-full mr-10 lg:text-md md:text-md sm:text-md text-sm">
                    <p>© Copyright {currentYear} Skylar Ji</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-notionBorder mt-4">
      <div className="max-w-[960px] mx-auto px-6 py-5 flex items-center justify-between text-notionGray text-xs">
        <p>Created from scratch using React and Tailwind CSS.</p>
        <p>© {currentYear} Skylar Ji</p>
      </div>
    </div>
  );
}

export default Footer;

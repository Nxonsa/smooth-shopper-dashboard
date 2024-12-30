const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white shadow-sm p-2">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <a
          href="https://mediaowl.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-600 hover:text-gray-900 transition-colors opacity-0 animate-fadeIn"
          style={{
            animationPlayState: 'paused',
            animationDelay: 'calc(var(--scroll) * -1s)',
            animationIterationCount: '1',
            animationFillMode: 'forwards',
          }}
        >
          Created by Media Owl
        </a>
      </div>
    </footer>
  );
};

export default Footer;
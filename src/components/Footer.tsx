import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <a
          href="https://mediaowl.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Created by Media Owl
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
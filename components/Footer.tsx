import React from 'react';
import { CONTENT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading text-xl md:text-2xl font-light italic mb-8 text-primary">
          {CONTENT.footer.quote}
        </p>

        <div className="w-12 h-1 bg-primary mx-auto mb-8 opacity-50"></div>

        <p className="text-sm text-gray-200 mb-4">
          {CONTENT.footer.copyright}
        </p>

        <div className="flex justify-center gap-6 text-xs text-gray-300 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
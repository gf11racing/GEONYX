
import React from 'react';
import { Phone, Mail, Globe, UserPlus, Share2, Linkedin } from 'lucide-react';
import { Button } from './Button';
import logoGEONYX from '../assets/logoGEONYX.png';

interface DigitalBusinessCardProps {
  name: string;
  title: string;
  phone: string;
  email: string;
  photoUrl: string;
  linkedinUrl?: string;
}

export const DigitalBusinessCard: React.FC<DigitalBusinessCardProps> = ({ 
  name, 
  title, 
  phone, 
  email, 
  photoUrl,
  linkedinUrl
}) => {

  // Helper function to convert image URL to Base64 for vCard
  const getBase64Image = async (url: string): Promise<string | null> => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          // Remove the "data:image/jpeg;base64," prefix to get raw base64
          const base64 = result.split(',')[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Failed to fetch image for vCard", error);
      return null;
    }
  };

  const handleSaveContact = async () => {
    // 1. Prepare Base64 Image (vCard Photo)
    let photoString = '';
    if (photoUrl) {
      const base64Data = await getBase64Image(photoUrl);
      if (base64Data) {
        // Standard vCard 3.0 photo embedding
        // Note: Some older Androids prefer TYPE=JPEG;ENCODING=BASE64
        photoString = `PHOTO;ENCODING=b;TYPE=JPEG:${base64Data}`;
      }
    }

    // 2. VCF 3.0 Generation Logic
    // Splitting name assuming "FIRST LAST" format
    const nameParts = name.split(' ');
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
    const firstName = nameParts.slice(0, -1).join(' ');

    let vCardDataLines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${lastName};${firstName};;;`,
      `FN:${name}`,
      'ORG:GEONYX Group',
      `TITLE:${title}`,
      `TEL;TYPE=CELL,VOICE:${phone.replace(/\s/g, '')}`,
      `EMAIL;TYPE=WORK:${email}`,
      'URL;TYPE=WORK:https://geonyxgroup.com',
      `NOTE:Industrial Engineering Solutions`,
      photoString, // Inject photo if available
    ];

    if (linkedinUrl) {
        vCardDataLines.push(`URL;TYPE=LINKEDIN:${linkedinUrl}`);
        vCardDataLines.push(`X-SOCIALPROFILE;TYPE=linkedin:${linkedinUrl}`);
    }

    vCardDataLines.push('END:VCARD');

    // Filter out empty lines
    const vCardData = vCardDataLines.filter(line => line !== '').join('\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    // Create a filename
    const safeName = name.replace(/\s/g, '_');
    link.setAttribute('download', `${safeName}_GEONYX.vcf`);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${name} - GEONYX`,
          text: 'Digital Business Card',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Линкът е копиран!");
    }
  };

  // Extract handle for display
  const getLinkedinHandle = (url: string) => {
      const parts = url.split('/in/');
      if (parts.length > 1) {
          // Remove trailing slash if exists
          return parts[1].replace(/\/$/, '');
      }
      return 'LinkedIn Profile';
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-0 md:p-6 font-sans overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-geo-yellow/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-[#141414]/95 backdrop-blur-2xl border-x md:border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.7)] md:rounded-xl overflow-hidden flex flex-col min-h-screen md:min-h-0">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#111]/80 backdrop-blur sticky top-0 z-30">
            {/* Empty div for spacing */}
            <div className="w-5"></div> 
            <img 
              src={logoGEONYX} 
              alt="GEONYX" 
              className="h-6 object-contain opacity-100 !bg-transparent" 
            />
            <button onClick={handleShare} className="text-gray-400 hover:text-geo-yellow transition-colors">
                <Share2 className="w-5 h-5" />
            </button>
        </div>

        {/* Profile Section */}
        <div className="p-10 flex flex-col items-center text-center relative bg-gradient-to-b from-[#111] to-[#0a0a0a]">
            
            {/* The Tech Ring Container */}
            <div className="w-40 h-40 flex items-center justify-center relative mb-6">
                {/* Static Yellow Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-geo-yellow"></div>
                
                {/* Inner Static Ring */}
                <div className="absolute inset-2 rounded-full border border-white/5"></div>

                {/* The Photo */}
                <div className="w-32 h-32 rounded-full overflow-hidden bg-[#222] relative z-10 border-2 border-[#111]">
                    <img 
                        src={photoUrl} 
                        alt={name} 
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/400x400/222/FFCC00?text=GEONYX" }} 
                    />
                </div>
            </div>
            
            <h1 className="text-3xl font-black text-white uppercase tracking-tight mb-2 leading-none">
              {name}
            </h1>
            
            {/* Title with Underline */}
            <div className="flex flex-col items-center">
               <span className="text-geo-yellow font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
                 {title}
               </span>
               <div className="w-12 h-[2px] bg-geo-yellow shadow-[0_0_10px_#FFCC00]"></div>
            </div>
        </div>

        {/* Action Grid */}
        <div className="px-6 pb-8 space-y-3 flex-grow">
            
            {/* Mobile */}
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#333] hover:border-geo-yellow/60 hover:bg-[#222] group transition-all rounded-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-geo-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="w-10 h-10 flex items-center justify-center text-geo-yellow">
                    <Phone className="w-6 h-6" />
                </div>
                <div className="flex-grow border-l border-[#333] pl-4">
                    <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">МОБИЛЕН</span>
                    <span className="text-white font-bold text-lg tracking-wide group-hover:text-geo-yellow transition-colors">{phone}</span>
                </div>
            </a>

            {/* Email */}
            <a href={`mailto:${email}`} className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#333] hover:border-geo-yellow/60 hover:bg-[#222] group transition-all rounded-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-geo-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="w-10 h-10 flex items-center justify-center text-geo-yellow">
                    <Mail className="w-6 h-6" />
                </div>
                <div className="flex-grow border-l border-[#333] pl-4 overflow-hidden">
                    <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">ИМЕЙЛ</span>
                    <span className="text-white font-bold text-sm tracking-wide break-all group-hover:text-geo-yellow transition-colors">{email}</span>
                </div>
            </a>

            {/* LinkedIn (Conditional) */}
            {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#333] hover:border-geo-yellow/60 hover:bg-[#222] group transition-all rounded-sm relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-geo-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div className="w-10 h-10 flex items-center justify-center text-geo-yellow">
                        <Linkedin className="w-6 h-6" />
                    </div>
                    <div className="flex-grow border-l border-[#333] pl-4">
                        <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">LINKEDIN</span>
                        <span className="text-white font-bold text-sm tracking-wide group-hover:text-geo-yellow transition-colors">
                            {getLinkedinHandle(linkedinUrl)}
                        </span>
                    </div>
                </a>
            )}

            {/* Website */}
            <a href="https://geonyxgroup.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#333] hover:border-geo-yellow/60 hover:bg-[#222] group transition-all rounded-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-geo-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="w-10 h-10 flex items-center justify-center text-geo-yellow">
                    <Globe className="w-6 h-6" />
                </div>
                <div className="flex-grow border-l border-[#333] pl-4">
                    <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">УЕБСАЙТ</span>
                    <span className="text-white font-bold text-sm tracking-wide group-hover:text-geo-yellow transition-colors">geonyxgroup.com</span>
                </div>
            </a>

        </div>

        {/* Sticky Bottom Actions */}
        <div className="p-6 bg-[#111] border-t border-[#333]">
            <Button 
                variant="primary" 
                onClick={handleSaveContact}
                className="w-full py-5 text-black bg-geo-yellow hover:bg-white border-none font-black uppercase text-sm tracking-wider flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,204,0,0.2)] rounded-sm"
            >
                <UserPlus className="w-5 h-5" /> ЗАПАЗИ КОНТАКТ
            </Button>
            
            <div className="text-center mt-4">
                <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">
                    GEONYX INDUSTRIAL ENGINEERING
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

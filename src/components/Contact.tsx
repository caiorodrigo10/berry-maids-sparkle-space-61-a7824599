
import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Create and append the script element
    const script = document.createElement('script');
    script.src = 'https://api.avanttocrm.com/js/form_embed.js';
    script.async = true;

    // Add load event listener
    script.onload = () => {
      setIsLoading(false);
    };

    // Add error event listener
    script.onerror = () => {
      setIsLoading(false);
      setHasError(true);
      toast.error('Error loading form. Please try again later.');
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
    toast.error('Error loading form. Please try again later.');
  };

  return (
    <section className="section-padding bg-berry-purple text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Get Your Free Quote</h2>
        <div className="h-[408px] relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-berry-purple/50">
              <Loader2 className="w-8 h-8 animate-spin text-white" />
            </div>
          )}
          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="mb-4">Unable to load the form</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-4 py-2 bg-white text-berry-purple rounded-md hover:bg-gray-100 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src="https://api.avanttocrm.com/widget/form/skIZYTdeKvvi2AFnE8lQ"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
              id="inline-skIZYTdeKvvi2AFnE8lQ"
              data-layout={`{"id":"INLINE"}`}
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Formulário Site"
              data-height="408"
              data-layout-iframe-id="inline-skIZYTdeKvvi2AFnE8lQ"
              data-form-id="skIZYTdeKvvi2AFnE8lQ"
              title="Formulário Site"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

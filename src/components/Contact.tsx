
import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Create and append the script element
    const script = document.createElement('script');
    script.src = 'https://api.avanttocrm.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="section-padding bg-berry-purple text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Get Your Free Quote</h2>
        <div className="h-[408px]">
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
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

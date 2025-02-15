'use client';

export function BodyScripts() {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript 
        dangerouslySetInnerHTML={{
          __html: `
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-NW45QNJV"
              height="0" 
              width="0" 
              style="display:none;visibility:hidden"
            ></iframe>
          `
        }}
      />
      {/* End Google Tag Manager (noscript) */}
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';

export function useDelayedScript(
  src: string, 
  options: {
    triggerOnInteraction?: boolean;
    delayTime?: number;
  } = {}
) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { 
    triggerOnInteraction = false, 
    delayTime = 3000 
  } = options;

  useEffect(() => {
    const loadScript = () => {
      if (scriptLoaded) return;

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    };

    // Se não for disparar com interação, carrega após delay
    if (!triggerOnInteraction) {
      const timer = setTimeout(loadScript, delayTime);
      return () => clearTimeout(timer);
    }

    // Adiciona listeners para interação
    const interactionHandler = () => {
      loadScript();
      // Remove listeners após carregar
      ['click', 'touchstart', 'mousemove'].forEach(event => 
        document.removeEventListener(event, interactionHandler)
      );
    };

    ['click', 'touchstart', 'mousemove'].forEach(event => 
      document.addEventListener(event, interactionHandler)
    );

    // Cleanup
    return () => {
      ['click', 'touchstart', 'mousemove'].forEach(event => 
        document.removeEventListener(event, interactionHandler)
      );
    };
  }, [src, scriptLoaded, triggerOnInteraction, delayTime]);

  return scriptLoaded;
}

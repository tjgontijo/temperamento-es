declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: React.HTMLAttributes<HTMLElement>;
  }
}

export {};
declare global {
  interface Window {
    pixelId?: string | null;
    sha256?: ((input: string) => string) | undefined;
    fbq?: (type: 'track' | 'trackCustom', eventName: string, data?: Record<string, string | number | undefined>) => void;
  }
}
import Script from "next/script";

function safeId(value: string | undefined, pattern: RegExp) {
  if (!value || !pattern.test(value)) return undefined;
  return value;
}

export function Analytics() {
  const ga = safeId(
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-E5GG558F1F",
    /^G-[A-Z0-9]+$/,
  );
  const gtm = safeId(process.env.NEXT_PUBLIC_GTM_ID, /^GTM-[A-Z0-9]+$/);

  return (
    <>
      {gtm ? (
        <>
          <Script id="gtm" strategy="lazyOnload">
            {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`}
          </Script>
          <Script
            id="gtm-src"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtm.js?id=${gtm}`}
          />
        </>
      ) : null}
      {ga ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
            strategy="lazyOnload"
          />
          <Script id="ga" strategy="lazyOnload">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}

"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const FB_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

function loadGA() {
  if (!GA_ID || window.__gaLoaded) return;
  window.__gaLoaded = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}

function loadPixel() {
  if (!FB_ID || window.__fbLoaded) return;
  window.__fbLoaded = true;
  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0";
    n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  window.fbq("init", FB_ID);
  window.fbq("track", "PageView");
}

function loadAll() {
  loadGA();
  loadPixel();
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID && !FB_ID) return;
    let consent = null;
    try { consent = localStorage.getItem("tf_consent"); } catch (e) {}
    if (consent === "granted") loadAll();
    const onGrant = () => loadAll();
    window.addEventListener("tf-consent-granted", onGrant);
    return () => window.removeEventListener("tf-consent-granted", onGrant);
  }, []);
  return null;
}

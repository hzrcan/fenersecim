import { useEffect, useMemo, useState } from "react";
import { Copy, MessageCircle, Send, Share2, Twitter } from "lucide-react";

interface ShareActionsProps {
  title?: string;
  text?: string;
  url?: string;
  className?: string;
}

export function ShareActions({ title, text, url, className = "" }: ShareActionsProps) {
  const [currentUrl, setCurrentUrl] = useState(url || "");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (url) {
      setCurrentUrl(url);
      return;
    }

    setCurrentUrl(window.location.href);
  }, [url]);

  const shareText = text || title || "Fenerbahce Secim Platformu";

  const links = useMemo(() => {
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedText = encodeURIComponent(shareText);

    return {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${currentUrl}`.trim())}`,
      x: `https://x.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    };
  }, [currentUrl, shareText]);

  const copyToClipboard = async () => {
    if (!currentUrl) return;

    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const tempInput = document.createElement("textarea");
      tempInput.value = currentUrl;
      tempInput.style.position = "fixed";
      tempInput.style.opacity = "0";
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareWithNative = async () => {
    if (!currentUrl || !navigator.share) return;

    try {
      await navigator.share({
        title: title || document.title,
        text: shareText,
        url: currentUrl,
      });
    } catch {
      // Share dialog can be dismissed by the user; keep UI silent in this case.
    }
  };

  const actionButtonClass =
    "inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50";

  return (
    <div className={`rounded-xl border border-slate-200 bg-slate-50/80 p-3 sm:p-4 ${className}`}>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {navigator.share && (
          <button type="button" onClick={shareWithNative} className={actionButtonClass}>
            <Share2 className="h-4 w-4" />
            Paylas
          </button>
        )}

        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={actionButtonClass}>
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>

        <a href={links.x} target="_blank" rel="noopener noreferrer" className={actionButtonClass}>
          <Twitter className="h-4 w-4" />
          X
        </a>

        <a href={links.telegram} target="_blank" rel="noopener noreferrer" className={actionButtonClass}>
          <Send className="h-4 w-4" />
          Telegram
        </a>

        <button type="button" onClick={copyToClipboard} className={actionButtonClass}>
          <Copy className="h-4 w-4" />
          {copied ? "Link kopyalandi" : "Link kopyala"}
        </button>
      </div>
    </div>
  );
}

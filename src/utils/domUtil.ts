// tslint:disable-next-line: only-arrow-functions
export const setDocumentTitle = function(title: string): void {
  document.title = title;
  const ua = navigator.userAgent;
  const regex = /\bMicroMessenger\/([\d\.]+)/;
  if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    const i = document.createElement("iframe");
    i.src = "/favicon.ico";
    i.style.display = "none";
    // tslint:disable-next-line: only-arrow-functions
    i.onload = function() {
      // tslint:disable-next-line: only-arrow-functions
      setTimeout(function() {
        i.remove();
      }, 9);
    };
    document.body.appendChild(i);
  }
};

export const domTitle = "Ant Design Pro";

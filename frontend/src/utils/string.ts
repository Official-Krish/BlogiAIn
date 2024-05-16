export const getPlainTextFromHTML = (html: string): string => {
    return html.replace(
      /<(\w+)\s*[^>]*>|<\/(\w+)\s*>|<(\w+)\s*\/>/gi,
      function (match, p1, p2) {
        if (p2 === p1 && p2 !== "br") {
          return match.startsWith("</") ? " " : "";
        } else {
          return match.startsWith("</") ? " " : p1 === "br" ? "" : "";
        }
      }
    );
}
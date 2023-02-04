function convertMarkdownToHTML(markdown) {
    let html = markdown;
    // convert bold text
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    
    // convert links
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, `<a class="highlight-link" href='$2' target='_blank'>$1</a>`);
    return html;
}
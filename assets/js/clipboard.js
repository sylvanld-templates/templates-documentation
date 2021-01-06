function fallbackCopyTextToClipboard(text, successMessage, errorMessage) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        document.body.removeChild(textArea);

        if (msg == 'successful') {

            M.toast({ html: successMessage });
            return;
        }
    } catch (err) { }
    M.toast({ html: errorMessage });
}

function copyTextToClipboard(text, success, error) {
    const successMessage = success ? success : "Copied to clipboard!";
    const errorMessage = error ? error : "Failed to access clipboard, please copy manually...";

    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text, successMessage, errorMessage);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        M.toast({ html: successMessage });
    }, function (err) {
        M.toast({ html: errorMessage });
    });
}

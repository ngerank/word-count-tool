document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    textInput.addEventListener('input', analyzeText);
});

function analyzeText() {
    const text = document.getElementById('textInput').value;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const charCountWithSpace = text.length;
    const charCountNoSpace = text.replace(/\s+/g, '').length;

    document.getElementById('wordCount').innerText = `Word Count: ${wordCount}`;
    document.getElementById('charCountWithSpace').innerText = `Character Count (with spaces): ${charCountWithSpace}`;
    document.getElementById('charCountNoSpace').innerText = `Character Count (no spaces): ${charCountNoSpace}`;

    document.getElementById('outputSection').style.display = 'block';
}
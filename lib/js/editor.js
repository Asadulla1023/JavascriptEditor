const executeCodeBtn = document.querySelector('.editor__run');

// Setup Ace
let codeEditor = ace.edit("editorCode");
let consoleMessages = [];


let editorLib = {
    init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/dracula");

        // Set language
        codeEditor.session.setMode("ace/mode/javascript");

        // Set Options
        codeEditor.setOptions({
            fontFamily: 'monospace',
            fontSize: '16pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

    }
}

// Events
executeCodeBtn.addEventListener('click', () => {
    // Get input from the code editor
    const userCode = codeEditor.getValue();
    // Run the user code
    try {
        new Function(userCode)();
    } catch (err) {
        console.error(err);
    }
});


editorLib.init();
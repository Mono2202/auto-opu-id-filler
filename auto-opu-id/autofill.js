(function() {
    chrome.storage.sync.get("studentID", ({ studentID }) => {
        if (!studentID) { return; };

    const input = document.querySelector("#p_mis_student");

    if (input) {
        input.value = studentID;
        input.dispatchEvent(new Event("input", { bubbles: true }));

        // TODO: there is a problem where Chrome Passwords autofill will not register
        //       when pressing the button. For now, the user will need to press the button :(
        /*
        const button = document.querySelector('input[type="submit"][value="כניסה >"]');
        if (button) {
                button.click();
        }
        */
    }
    });
})();

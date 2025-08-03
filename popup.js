const idInput = document.getElementById("idInput");
const saveBtn = document.getElementById("saveBtn");
const status = document.getElementById("status");

// Load current ID
chrome.storage.sync.get("studentID", ({ studentID }) => {
    if (studentID) idInput.value = studentID;
});

// Save new ID
saveBtn.addEventListener("click", () => {
    const id = idInput.value.trim();
    chrome.storage.sync.set({ studentID: id }, () => {
        status.textContent = "ID saved!";
        setTimeout(() => status.textContent = "", 2000);
    });
});

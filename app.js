// Simulated mock data
const mockData = {
    handle: "name.bsky.social", // Require the user to enter the full handle
    hostingServer: "https://mockserver.atmosphere.net",
    did: "did:plc:mock-atmosphere123",
    connectedApps: [
        "Bluesky Social",
        "PixelU Social",
        "Tik Tok Replacement",
        "Mock App C",
    ],
};

// Function to display mock data
function showMockData() {
    const handleInput = document.getElementById("handle-input").value.trim().toLowerCase(); // Normalize input
    const infoDisplay = document.getElementById("info-display");
    const mockHandleSpan = document.getElementById("mock-handle");
    const mockServerSpan = document.getElementById("mock-server");
    const mockDidSpan = document.getElementById("mock-did");
    const mockAppHandlesList = document.getElementById("mock-app-handles");

    // Clear previous data
    mockAppHandlesList.innerHTML = "";

    // Check if the entered handle matches the mock handle
    if (handleInput === mockData.handle.toLowerCase()) {
        // Populate mock data
        mockHandleSpan.textContent = mockData.handle;
        mockServerSpan.textContent = mockData.hostingServer;
        mockDidSpan.textContent = mockData.did;

        // Add connected apps
        mockData.connectedApps.forEach((app) => {
            const listItem = document.createElement("li");
            listItem.textContent = app;
            mockAppHandlesList.appendChild(listItem);
        });

        // Show the info section
        infoDisplay.style.display = "block";
    } else {
        // Handle case where the input doesn't match mock data
        mockHandleSpan.textContent = "Handle not found";
        mockServerSpan.textContent = "N/A";
        mockDidSpan.textContent = "N/A";
        mockAppHandlesList.innerHTML = "<li>No connected apps available</li>";
        infoDisplay.style.display = "block";
    }
}

// Attach the mock data display function to the button
document
    .getElementById("fetch-info-button")
    .addEventListener("click", showMockData);



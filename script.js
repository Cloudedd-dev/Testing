const API_URL = "https://identities-presence.onrender.com/v1/user/1360925264669966338/";

async function loadPresence() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        // Avatar
        document.getElementById("avatar").src = data.avatar;

        // Username
        document.getElementById("username").textContent = data.username;

        // Status
        document.getElementById("status").textContent = "Status: " + data.status;

        // Activity
        if (data.activities && data.activities.length > 0) {
            document.getElementById("activity").textContent =
                "Activity: " + data.activities[0].name;
        } else {
            document.getElementById("activity").textContent = "Activity: None";
        }

    } catch (err) {
        console.error("Error loading presence:", err);
        document.getElementById("username").textContent = "Error loading profile";
    }
}

loadPresence();

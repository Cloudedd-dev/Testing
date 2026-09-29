const API_URL = "https://identities-presence-uwui.onrender.com/v1/users/1360925264669966338";

async function loadPresence() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        // Basic user info
        const user = data.user;
        const presence = data.presence;

        // Avatar
        document.getElementById("avatar").src = user.avatar;

        // Username
        document.getElementById("username").textContent = user.username;

        // Status
        document.getElementById("status").textContent = "Status: " + presence.status;

        // Activity
        if (presence.activities && presence.activities.length > 0) {
            const act = presence.activities[0];
            document.getElementById("activity").textContent =
                `${act.type}: ${act.name}`;
        } else {
            document.getElementById("activity").textContent = "None";
        }

    } catch (err) {
        console.error("Error loading presence:", err);
        document.getElementById("username").textContent = "Error loading profile";
    }
}

loadPresence();

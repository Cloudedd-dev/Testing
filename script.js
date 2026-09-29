const API_URL = "https://identities-presence-uwui.onrender.com/v1/users/1360925264669966338";

async function loadPresence() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const user = data.user;
        const presence = data.presence;

        // Avatar
        document.getElementById("avatar").src = user.avatar;

        // Username
        document.getElementById("username").textContent = user.username;

        // Discord Status
        document.getElementById("status").textContent =
            "Status: " + presence.discord_status;

        // Activity
        if (presence.activities && presence.activities.length > 0) {
            const act = presence.activities[0];

            document.getElementById("activity-name").textContent = act.name;

            // Details + State
            let detailsText = "";
            if (act.details) detailsText += act.details + " ";
            if (act.state) detailsText += "(" + act.state + ")";
            document.getElementById("activity-details").textContent = detailsText;

            // Activity Image (large asset)
            if (act.assets && act.assets.large_image) {
                document.getElementById("activity-image").src = act.assets.large_image;
            } else {
                document.getElementById("activity-image").style.display = "none";
            }

        } else {
            document.getElementById("activity-name").textContent = "None";
            document.getElementById("activity-details").textContent = "";
            document.getElementById("activity-image").style.display = "none";
        }

    } catch (err) {
        console.error("Error loading presence:", err);
        document.getElementById("username").textContent = "Error loading profile";
    }
}

loadPresence();

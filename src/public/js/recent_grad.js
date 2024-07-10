// job_seeker_recent_graduates.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('jobSeekerForm');
    const collectedDetails = document.getElementById('collectedDetails');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const details = {};
        formData.forEach((value, key) => {
            details[key] = value;
        });
        displayCollectedDetails(details);
    });

    function displayCollectedDetails(details) {
        let detailsHTML = '<h2>Collected Details:</h2>';
        detailsHTML += '<div>';
        Object.entries(details).forEach(([key, value]) => {
            detailsHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        });
        detailsHTML += '</div>';
        collectedDetails.innerHTML = detailsHTML;
    }
});


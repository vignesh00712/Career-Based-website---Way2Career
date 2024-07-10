document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('jobSeekerForm');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (validateForm()) {
            const response = await fetch('/jobSeekers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'                },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    alert('Job seeker profile created successfully.');
                    displayRoadmap(data.desiredRole);
                    form.reset();
                } else {
                    alert('Error creating job seeker profile.');
                }
            }
        });
    
        function validateForm() {
            let isValid = true;
            const desiredRoleInput = document.getElementById('desiredRole');
            if (!desiredRoleInput.value.trim()) {
                alert('Desired job role is required');
                isValid = false;
            }
            return isValid;
        }
    
        function displayRoadmap(role) {
            const roadmapDetails = document.getElementById('roadmapDetails');
            let roadmapHTML = `<h2>Roadmap for ${role}:</h2>`;
            switch (role) {
                case 'zohoDeveloper':
                    roadmapHTML += '<p>Learn SQL, Java, and Zoho-specific tools.</p>';
                    break;
                case 'softwareEngineer':
                    roadmapHTML += '<p>Master data structures and algorithms, learn system design.</p>';
                    break;
                case 'dataScientist':
                    roadmapHTML += '<p>Focus on statistics, machine learning, and data processing tools.</p>';
                    break;
                case 'projectManager':
                    roadmapHTML += '<p>Develop leadership, project management methodologies like Agile and Scrum.</p>';
                    break;
                case 'webDeveloper':
                    roadmapHTML += '<p>Learn HTML, CSS, JavaScript, and frameworks like React or Angular.</p>';
                    break;
                case 'systemAdministrator':
                    roadmapHTML += '<p>Acquire skills in system configuration, network services, and security management.</p>';
                    break;
                case 'networkEngineer':
                    roadmapHTML += '<p>Understand networking concepts, routing, switching, and troubleshooting.</p>';
                    break;
                case 'uiUxDesigner':
                    roadmapHTML += '<p>Study design principles, user experience research, and prototyping tools.</p>';
                    break;
                case 'databaseAdministrator':
                    roadmapHTML += '<p>Learn about database management systems, SQL, and performance tuning.</p>';
                    break;
                case 'cloudEngineer':
                    roadmapHTML += '<p>Gain knowledge in cloud services, deployment, and infrastructure management.</p>';
                    break;
                default:
                    roadmapHTML += '<p>Select a role to see the roadmap.</p>';
                    break;
            }
            roadmapDetails.innerHTML = roadmapHTML;
        }
    });
    
               

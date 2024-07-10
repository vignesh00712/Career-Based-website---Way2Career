function filterJobs() {
    const selectedSkill = document.getElementById('skillFilter').value;
    const jobs = generateMockJobs();

    const filteredJobs = jobs.filter(job => job.skills.includes(selectedSkill));

    displayJobs(filteredJobs);
}

function generateMockJobs() {
    const skills = ["Programming", "Design", "Marketing", "Sales"];
    const jobs = [];

    for (let i = 1; i <= 20; i++) {
        const skill = skills[Math.floor(Math.random() * skills.length)];
        jobs.push({
            companyName: `Company ${i}`,
            title: `${skill} Specialist`,
            skills: [skill],
            description: `Looking for a skilled ${skill.toLowerCase()} specialist to join our team.`
        });
    }

    return jobs;
}

function displayJobs(jobs) {
    const listings = document.getElementById('jobListings');
    listings.innerHTML = '';

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-listing';
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company-info">${job.companyName}</p>
            <p>${job.description}</p>
            ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        `;
        listings.appendChild(jobElement);
    });
}

// Initial call to display all jobs
filterJobs();

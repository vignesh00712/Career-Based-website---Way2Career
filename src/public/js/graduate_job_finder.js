document.getElementById('salaryRange').addEventListener('input', function() {
    document.getElementById('salaryRangeValue').textContent = `$${this.value.toLocaleString()}`;
});

function filterJobs() {
    const fieldInterest = document.getElementById('fieldInterest').value;
    const courseSelection = document.getElementById('courseSelection').value;
    const salaryRange = parseInt(document.getElementById('salaryRange').value);

    const jobs = generateMockJobs();

    const filteredJobs = jobs.filter(job =>
        job.field.includes(fieldInterest) &&
        job.course.includes(courseSelection) &&
        job.salary <= salaryRange
    );

    displayJobs(filteredJobs);
}

function generateMockJobs() {
    const fields = ["Technology", "Business", "Healthcare", "Engineering", "Education"];
    const courses = ["Computer Science", "Marketing", "Nursing", "Mechanical Engineering", "Teaching"];
    const companies = [];

    for (let i = 1; i <= 50; i++) {
        const field = fields[Math.floor(Math.random() * fields.length)];
        const course = courses[Math.floor(Math.random() * courses.length)];
        const salary = Math.floor(Math.random() * (120000 - 30000 + 1)) + 30000;

        companies.push({
            name: `Company ${i}`,
            field: field,
            course: course,
            salary: salary
        });
    }

    return companies;
}

function displayJobs(jobs) {
    const listings = document.getElementById('jobListings');
    listings.innerHTML = '';

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-listing';
        jobElement.innerHTML = `
            <h3>${job.name}</h3>
            <p>Field: ${job.field}</p>
            <p>Related Course: ${job.course}</p>
            <p>Salary: $${job.salary.toLocaleString()}</p>
        `;
        listings.appendChild(jobElement);
    });
}

// Initial call to display all jobs
filterJobs();

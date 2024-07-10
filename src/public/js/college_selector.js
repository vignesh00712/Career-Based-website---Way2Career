document.getElementById('feeRange').addEventListener('input', function() {
    document.getElementById('feeRangeValue').textContent = `$${this.value}`;
});

document.getElementById('markRange').addEventListener('input', function() {
    document.getElementById('markRangeValue').textContent = this.value;
});

function filterColleges() {
    const courseInterest = document.getElementById('courseInterest').value;
    const feeRange = parseInt(document.getElementById('feeRange').value);
    const markRange = parseInt(document.getElementById('markRange').value);

    // Assuming generateMockColleges() also adds a 'marks' property to the colleges
    const colleges = generateMockColleges();

    const filteredColleges = colleges.filter(college =>
        college.course.includes(courseInterest) &&
        college.fee <= feeRange &&
        college.marks <= markRange
    );

    displayColleges(filteredColleges);
}

function generateMockColleges() {
    const courses = ["Engineering", "Medicine", "Business", "Arts"];
    const colleges = [];
    
    for (let i = 1; i <= 50; i++) {
        const course = courses[Math.floor(Math.random() * courses.length)];
        const fee = Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000;
        const marks = Math.floor(Math.random() * (600 - 200 + 1)) + 200; // Marks between 200 and 600
        colleges.push({
            name: `College ₹{i}`,
            course: course,
            fee: fee,
            marks: marks
        });
    }
    
    return colleges;
}

function displayColleges(colleges) {
    const list = document.getElementById('collegeList');
    list.innerHTML = '';

    colleges.forEach(college => {
        const item = document.createElement('div');
        item.className = 'college-item';
        item.innerHTML = `
            <h3>${college.name}</h3>
            <p>Course: ${college.course}</p>
            <p>Fee: $${college.fee}</p>
            <p>Marks Required: ${college.marks}</p>
        `;
        list.appendChild(item);
    });
}

filterColleges(); // Initial call to display all colleges

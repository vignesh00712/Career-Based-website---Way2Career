document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recruiterForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const skillsFilter = Array.from(document.getElementById('skillsFilter').selectedOptions).map(option => option.value);
        const experienceFilter = parseInt(document.getElementById('experienceFilter').value, 10);
        const sortOrder = document.getElementById('sortOrder').value;
        displayCandidates(filterAndSortCandidates(skillsFilter, experienceFilter, sortOrder));
    });

    function generateMockData() {
        return [
            { name: "Alice Johnson", skills: ["programming", "dataAnalysis"], experience: 5 },
            { name: "Bob Smith", skills: ["projectManagement", "programming"], experience: 8 },
            { name: "Carol Taylor", skills: ["design", "programming"], experience: 3 },
            { name: "David Brown", skills: ["projectManagement", "dataAnalysis"], experience: 10 },
            { name: "Eve White", skills: ["programming", "dataAnalysis"], experience: 2 },
            { name: "Frank Jones", skills: ["design", "programming"], experience: 7 },
            { name: "Grace Davis", skills: ["programming", "projectManagement"], experience: 4 },
            { name: "Henry Miller", skills: ["dataAnalysis", "design"], experience: 12 },
            { name: "Isabel Wilson", skills: ["programming", "projectManagement"], experience: 6 },
            { name: "Jack Moore", skills: ["design", "dataAnalysis"], experience: 1 },
            { name: "Karen Taylor", skills: ["programming", "projectManagement"], experience: 9 },
            { name: "Louis Brown", skills: ["dataAnalysis", "programming"], experience: 13 },
            { name: "Mia White", skills: ["projectManagement", "design"], experience: 5 },
            { name: "Noah Jones", skills: ["programming", "dataAnalysis"], experience: 2 },
            { name: "Olivia Garcia", skills: ["design", "programming"], experience: 4 },
            { name: "Peter Martinez", skills: ["projectManagement", "dataAnalysis"], experience: 11 },
            { name: "Quinn Wilson", skills: ["programming", "design"], experience: 7 },
            { name: "Ryan Anderson", skills: ["dataAnalysis", "projectManagement"], experience: 6 },
            { name: "Sarah Martin", skills: ["programming", "design"], experience: 3 },
            { name: "Tom Clark", skills: ["dataAnalysis", "programming"], experience: 8 }
        ];
    }

    function filterAndSortCandidates(skillsFilter, experienceFilter, sortOrder) {
        let candidates = generateMockData();

        // Filter based on skills and experience
        candidates = candidates.filter(candidate =>
            candidate.experience >= experienceFilter &&
            skillsFilter.every(skill => candidate.skills.includes(skill))
        );

        // Sort based on the specified order
        switch (sortOrder) {
            case 'nameAsc':
                candidates.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'nameDesc':
                candidates.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'experienceAsc':
                candidates.sort((a, b) => a.experience - b.experience);
                break;
            case 'experienceDesc':
                candidates.sort((a, b) => b.experience - a.experience);
                break;
        }

        return candidates;
    }

    function displayCandidates(candidates) {
        const candidateList = document.getElementById('candidateList');
        candidateList.innerHTML = candidates.map(candidate => `
            <div class="candidate">
                <h3>${candidate.name}</h3>
                <p>Skills: ${candidate.skills.join(', ')}</p>
                <p>Experience: ${candidate.experience} years</p>
            </div>
        `).join('');
    }
});

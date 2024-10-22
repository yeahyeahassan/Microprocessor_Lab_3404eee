document.getElementById('cgpa-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const totalCredits = parseFloat(document.getElementById('totalCredits').value);
    const earnedCredits = parseFloat(document.getElementById('earnedCredits').value);
    const gpa = parseFloat(document.getElementById('gpa').value);

    // Ensure the input values are valid
    if (isNaN(totalCredits) || isNaN(earnedCredits) || isNaN(gpa)) {
        document.getElementById('result').textContent = 'Please enter valid numbers for all fields.';
        return;
    }

    // Ensure credits and GPA are positive numbers
    if (totalCredits <= 0 || earnedCredits <= 0 || gpa < 0 || gpa > 4) {
        document.getElementById('result').textContent = 'Please ensure the inputs are within valid ranges.';
        return;
    }

    // Calculate CGPA
    const cgpa = (earnedCredits / totalCredits) * gpa;

    // Display result
    document.getElementById('result').textContent = `Your calculated CGPA is: ${cgpa.toFixed(2)}`;
});

function showDetails(courseId) {
    var courseDetails = document.getElementById('courseDetails');
    var details = '';

    // Dummy details, replace with actual course details
    if (courseId === 'course1') {
        details = '<h2>Introduction to Computer Science</h2><p>This course provides an introduction to the principles of computer science and programming. Students will learn the basics of algorithmic thinking and problem-solving. No prior programming experience is required.</p>';
    } else if (courseId === 'course2') {
        details = '<h2>Data Structures and Algorithms</h2><p>This course delves into the study of data structures and algorithms. Students will explore various data structures such as arrays, linked lists, and trees, and understand algorithmic design principles.</p>';
    }

    courseDetails.innerHTML = details;}
function showCourses(program) {
    
    const allCourses = document.querySelectorAll('.courses');
    allCourses.forEach(course => {
      course.style.display = 'none';
    });
  
    
    const selectedCourses = document.getElementById(`${program}-courses`);
    selectedCourses.style.display = 'block';
  }
  
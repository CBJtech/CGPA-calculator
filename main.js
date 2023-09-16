let courses = [];

        function addCourse() {
            const courseName = document.getElementById("courseName").value;
            const creditHours = parseFloat(document.getElementById("creditHours").value);
            const grade = parseFloat(document.getElementById("grade").value);

            if (courseName === "" || isNaN(creditHours) || isNaN(grade)) {
                alert("Please enter valid input for all fields.");
                return;
            }

            courses.push({
                name: courseName,
                creditHours: creditHours,
                grade: grade
            });

            updateCourseList();
            updateCGPA();
        }

        function updateCourseList() {
            const courseListDiv = document.getElementById("courseList");
            courseListDiv.innerHTML = "";

            for (let i = 0; i < courses.length; i++) {
                const course = courses[i];
                const courseItem = document.createElement("div");
                courseItem.textContent = `${course.name} - Credits: ${course.creditHours} - Grade: ${course.grade}`;
                courseListDiv.appendChild(courseItem);
            }
        }

        function updateCGPA() {
            let totalCredits = 0;
            let weightedSum = 0;

            for (let i = 0; i < courses.length; i++) {
                const course = courses[i];
                totalCredits += course.creditHours;
                weightedSum += course.creditHours * course.grade;
            }

            const cgpa = (weightedSum / totalCredits).toFixed(2);
            document.getElementById("output").textContent = `CGPA: ${cgpa}`;
        }
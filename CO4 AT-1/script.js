// ==========================================
// COURSE DATA
// ==========================================

let courses = [
    {
        code: "CSE101",
        name: "Web Technology",
        type: "Theory",
        credits: 4,
        enrollment: 72
    },

    {
        code: "CSE102",
        name: "Database Management Systems",
        type: "Theory",
        credits: 4,
        enrollment: 65
    },

    {
        code: "CSE103",
        name: "Data Structures",
        type: "Theory",
        credits: 4,
        enrollment: 58
    },

    {
        code: "CSE104",
        name: "Computer Networks",
        type: "Theory",
        credits: 3,
        enrollment: 45
    },

    {
        code: "CSE105",
        name: "Web Technology Lab",
        type: "Lab",
        credits: 2,
        enrollment: 32
    }
];


// ==========================================
// LOAD SAVED ENROLLMENT DATA
// ==========================================

let savedData = localStorage.getItem("courseEnrollmentData");

if (savedData) {

    courses = JSON.parse(savedData);

}


// ==========================================
// SAVE DATA
// ==========================================

function saveData() {

    localStorage.setItem(
        "courseEnrollmentData",
        JSON.stringify(courses)
    );

}


// ==========================================
// NAVIGATION
// ==========================================

function goToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// SELECT COURSE
// ==========================================

function selectCourse(code) {

    document.getElementById("courseSelect").value = code;

    goToSection("enrollment");

}


// ==========================================
// ENROLL STUDENT
// ==========================================

function enrollStudent(event) {

    event.preventDefault();

    let studentName =
        document.getElementById("studentName").value.trim();

    let registerNumber =
        document.getElementById("registerNumber").value.trim();

    let courseCode =
        document.getElementById("courseSelect").value;


    if (studentName === "" || registerNumber === "") {

        alert("Please enter all student details.");

        return;

    }


    if (courseCode === "") {

        alert("Please select a course.");

        return;

    }


    // Find selected course

    let course = courses.find(
        c => c.code === courseCode
    );


    if (!course) {

        alert("Course not found.");

        return;

    }


    // ==========================================
    // INCREASE COURSE ENROLLMENT
    // ==========================================

    course.enrollment++;


    // Save updated data

    saveData();


    // Display success message

    let message =
        document.getElementById("successMessage");

    message.innerHTML = `
        <div style="font-size:25px;">✓</div>

        <div style="font-size:20px;">
            Enrollment Successful!
        </div>

        <br>

        Student: <strong>${studentName}</strong><br>

        Register Number:
        <strong>${registerNumber}</strong><br>

        Course:
        <strong>${course.name}</strong><br>

        Course Enrollment:
        <strong>${course.enrollment}</strong>
    `;

    message.style.display = "block";


    // Update website

    updateAll();


    // Clear student fields

    document.getElementById("studentName").value = "";

    document.getElementById("registerNumber").value = "";

}


// ==========================================
// UPDATE ALL INFORMATION
// ==========================================

function updateAll() {

    updateStats();

    updateCourseCards();

    updateAnalysis();

}


// ==========================================
// UPDATE STATISTICS
// ==========================================

function updateStats() {

    // Total courses

    document.getElementById("totalCourses").innerText =
        courses.length;


    // Total students

    let totalStudents = courses.reduce(
        (sum, course) =>
            sum + course.enrollment,
        0
    );


    document.getElementById("totalStudents").innerText =
        totalStudents;


    // Theory courses

    let theoryCourses = courses.filter(
        course => course.type === "Theory"
    ).length;


    document.getElementById("theoryCourses").innerText =
        theoryCourses;


    // Highest enrollment

    let highest = Math.max(
        ...courses.map(
            course => course.enrollment
        )
    );


    document.getElementById("highestEnrollment").innerText =
        highest;

}


// ==========================================
// UPDATE COURSE CARDS
// ==========================================

function updateCourseCards() {

    courses.forEach(course => {

        let card =
            document.querySelector(
                `[data-course="${course.code}"]`
            );


        if (card) {

            let number =
                card.querySelector(
                    ".enrollment-number"
                );


            if (number) {

                number.innerText =
                    course.enrollment;

            }

        }

    });

}


// ==========================================
// UPDATE ANALYSIS
// ==========================================

function updateAnalysis() {

    let container =
        document.getElementById("analysisContainer");


    container.innerHTML = "";


    let highest = Math.max(
        ...courses.map(
            course => course.enrollment
        )
    );


    courses.forEach(course => {

        let percentage =
            (course.enrollment / highest) * 100;


        let row =
            document.createElement("div");


        row.className =
            "analysis-row";


        row.innerHTML = `

            <div class="analysis-header">

                <span>
                    ${course.code} -
                    ${course.name}
                </span>

                <span>
                    ${course.enrollment} students
                </span>

            </div>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${percentage}%">
                </div>

            </div>

        `;


        container.appendChild(row);

    });

}


// ==========================================
// CREATE COURSE SELECT OPTIONS
// ==========================================

function loadCourseOptions() {

    let select =
        document.getElementById("courseSelect");


    select.innerHTML =
        `<option value="">Select a Course</option>`;


    courses.forEach(course => {

        let option =
            document.createElement("option");


        option.value =
            course.code;


        option.textContent =
            `${course.code} - ${course.name}`;


        select.appendChild(option);

    });

}


// ==========================================
// INITIALIZE WEBSITE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCourseOptions();

        updateAll();

    }
);
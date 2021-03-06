import axios from 'axios'

const SERVER_URL = 'http://localhost:9000';

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 2000
});

//user
//{user}id
//username
//password
//firstName
//lastName
const api = {
    sendEmail: (information) => {

    },

    user: { //(C)reate - POST
        sendEmail: async (email) => {
            return instance.get(`/email/${email}`)
        },

        createNewStudent: async (user) => {
            return instance.post('/student/save', {
                studentId: user.id,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                courses: user.courses,
                grades: user.grades,
            })
        },

        createNewInstructor: async (user) => {
            return instance.post('/instructor/save', {
                instructorId: user.id,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                courses: user.courses,
                grades: user.grades,
            })
        },

        createNewAdministrator: async (user) => {
            return instance.post('/administrator/save', {
                administratorId: user.id,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName
            })
        },

        registerForCourse: async ( { student_id, course_id}) => {
            return instance.post('register/course', {
                student_id: student_id,
                course_id: course_id,
            })
        },

        //(R)ead - GET
        getStudents: async () => {
            return instance.get('student/getAll')
        },

        getStudentById: async (id) => {
            return instance.get(`student/id/${id}/`);
        },

        getStudentByUsername: async (username) => {
            return instance.get(`student/username/${username}`)
        },

        getInstructors: async () => {
            return instance.get('instructor/getAll');
        },

        getInstructorById: async (id) => {
            return instance.get(`instructor/id/${id}`);
        },

        getInstructorByUsername: async (username) => {
            return instance.get(`instructor/username/${username}`);
        },

        getAdministrators: async () => {
            return instance.get('administrator/getAll');
        },

        getAdministratorById: async (id) => {
            return instance.get(`administrator/id/${id}`);
        },

        getAdministratorByUsername: async (username) => {
            return instance.get(`administrator/username/${username}`);
        },

        getAllRegisteredStudents: async () => {
            return instance.get('register/course/getAll')
        },

        studentCourseExists: async () => {
            return instance.get('register/course/exist')
        },

        // (U)pdate - PUT
        updateCourse: async (id, text, completed) => {
            return instance.put('courses' + id, {
                courseId: course.id,
                courseName: course.name,
                instructor_id: course.instructorId,
                students: course.students,
                quiz: course.quizzes,
                grades: course.grades,
            })
        },

        updateStudent: async (user) => {
            return instance.put('student/update', {
                studentId: user.studentId,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                courses: user.courses,
                grades: user.grades
            })
        },

        updateInstructor: async (user) => {
            return instance.put('instructor/update', {
                instructorId: user.instructorId,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                courses: user.courses,
                grades: user.grades
            })
        },

        updateAdministrator: async (user) => {
            return instance.put('administrator/update', {
                administratorId: user.administratorId,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName
            })
        },

        // (D)elete - DELETE
        deleteStudent: async (user) => {
            return instance.delete('student/delete/', {
                studentId: user.studentId,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName
            })
        },

        deleteInstructor: async (user) => {
            return instance.delete('instructor/delete/', {
                studentId: user.instructorId,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName
            })
        },

        deleteAdministrator: async (user) => {
            return instance.delete('administrator/delete', {
                studentId: user.administratorId,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName
            })
        },

        deleteStudent: async (studentCourse) => {
            return instance.delete('register/course/delete', {
                student_id: studentCourse.studentId,
                course_id: studentCourse.courseId,
            })
        }

    },

    course: {
        createCourse: async (course) => {
            return instance.post('course/save', {
                courseId: course.courseId,
                courseName: course.courseName,
                instructorId: course.instructorId,
                students: course.students,
                quiz: course.quizzes,
                grades: course.grades,
                cost: course.cost,
                courseDescription: course.courseDescription
            })
        },

        getCourses: () => {
            return instance.get('course/getcourse')
        },

        getCourseById: async (id) => {
            return instance.get(`course/get/${id}`)
        },

        updateCourseById: async (course, id) => {
            return instance.put(`course/course/${id}`, {
                courseId: id,
                courseName: course.name,
                instructor_id: course.instructorId,
                students: course.students,
                quiz: course.quizzes,
                grades: course.grades,
            })
        },

        deleteCourseById: async (id) => {
            return instance.delete(`course/delete/${id}`)
        },

        // grades
        getGrades: async () => {
            return instance.get('grade/getAll')
        },

        getGradesById: async (id) => {
            return instance.get(`grade/get/${id}`)
        },

        createGrade: async (grade) => {
            return instance.post('grade/save', {
                quiz_id: grade.quizId,
                course_id: grade.courseId,
                instructor_id: grade.instructorId,
                student_id: grade.studentId,
                grade_points: grade.gradePoints,
            })
        },

        deleteCourse: (id) => {
            return instance.delete(`course/delete/${id}`)
        },

        // quiz
        getQuizzes: async () => {
            return instance.get('quiz/getAll')
        },

        getQuizById: async (id) => {
            return instance.get(`quiz/get/${id}`)
        },

        createQuiz: async (quiz) => {
            return instance.post('quiz/save', {
                quizId: quiz.id,
                quiz_name: quiz.name,
                quiz_point: quiz.points,
                quiz_date: quiz.date,
                course_id: quiz.courseId,

            })
        },

        deleteQuiz: async (quiz) => {
            return instance.delete('quiz/delete', {
                quizId: quiz.quizId,
            })
        },

    }
}

export {
    api
};
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
 try {
    // Validate input data
    validateInput(course, ag, submissions);

    const learnerData = {};
    // Iterate through learner submissions
    for (const submission of submissions) {
        const { learner_id, assignment_id, submission: { submitted_at, score } } = submission;
  

 } catch (error) {
    console.error(error.message);
    return [];
 }

}

const validateInput = (CourseInfo, AssignmentGroup, LearnerSubmissions) => {
    // Check if AssignmentGroup belongs to the specified course
    if (AssignmentGroup.course_id !== CourseInfo.id) {
        throw new Error('Invalid input: AssignmentGroup does not belong to the specified course.');
      }
    
     // Check if points_possible is zero for any assignment
  for (const assignment of AssignmentGroup.assignments) {
    if (assignment.points_possible === 0) {
      throw new Error('Invalid input: points_possible cannot be zero for an assignment.');
    }
  }
    // Check if values expected to be numbers are actually numbers
  if (!isNumber(CourseInfo.id) || !isNumber(AssignmentGroup.group_weight)) {
    throw new Error('Invalid input: Expected numerical values are not valid numbers.');
  }

  // Check if values expected to be numbers are actually numbers in assignments
  for (const assignment of AssignmentGroup.assignments) {
    if (!isNumber(assignment.id) || !isNumber(assignment.points_possible)) {
      throw new Error('Invalid input: Expected numerical values are not valid numbers in assignments.');
    }
  }

}
// Helper function to check if a value is a number
const isNumber = (value)=> {
    return typeof value === 'number' && !isNaN(value);
  }
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
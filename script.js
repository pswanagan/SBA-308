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
      points_possible: 0,
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
    
      for(let i = 0; i < AssignmentGroup.assignments.length; i++){
        for(let j = 0; )
        console.log(AssignmentGroup.assignments[i]);
        if(AssignmentGroup.assignments[i]. == 0){
            throw new Error("Invalid input: Assignment Points possible can't be 0.")
        }
      }
    

}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
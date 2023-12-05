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

    
      // Check if the assignment is due and not late
      if (!isAssignmentDue(ag, assignment_id, submitted_at)) {
        // If the assignment is not due, skip the current submission and move to the next one
        continue;
      }

      const assignmentWeight = getAssignmentWeight(ag, assignment_id);
      const weightedScore = calculateWeightedScore(score, assignmentWeight);

        // Update learner data
        if (!learnerData[learner_id]) {
          learnerData[learner_id] = { id: learner_id, avg: 0 };
        }

        learnerData[learner_id][assignment_id] = weightedScore;
        learnerData[learner_id].avg += weightedScore;
      }
    }

    // Calculate the overall average for each learner
    for (const learnerId in learnerData) {
      const totalWeight = getTotalWeight(ag);
      learnerData[learnerId].avg = (learnerData[learnerId].avg / totalWeight) * 100;
    }

    // Convert learnerData object to an array
    const result = Object.values(learnerData);

    return result;
    
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

  
// Helper function to check if an assignment is due and not late
const isAssignmentDue = (assignmentGroup, assignmentId, submittedAt) => {
    // Implement due date and late submission logic here
    // ...
  
    // Example: Check if the submitted date is before the due date
    const assignment = assignmentGroup.assignments.find(a => a.id === assignmentId);
    return new Date(submittedAt) <= new Date(assignment.due_at);
  }

  // Helper function to get the weight of an assignment within its group
function getAssignmentWeight(assignmentGroup, assignmentId) {
    // Implement assignment weight retrieval logic here
    // ...
  
    // Example: Return the weight from the assignment group
    const assignment = assignmentGroup.assignments.find(a => a.id === assignmentId);
    return assignment.points_possible * (assignmentGroup.group_weight / 100);
  }
  
  // Helper function to calculate the weighted score for an assignment
function calculateWeightedScore(score, weight) {
    // Implement weighted score calculation logic here
    // ...
  
    // Example: Deduct 10% for late submissions
    return score * (1 - 0.1);
  }

  // Helper function to calculate the total weight of all assignments in a group
function getTotalWeight(assignmentGroup) {
    // Implement total weight calculation logic here
    // ...
  
    // Example: Sum the weights of all assignments in the group
    return assignmentGroup.assignments.reduce((total, assignment) => {
      return total + assignment.points_possible * (assignmentGroup.group_weight / 100);
    }, 0);
  }
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
// Sample data
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
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
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    try {
      // Validate input data
      validateInput(courseInfo, assignmentGroup, learnerSubmissions);
  
      const learnerData = {};
  
      // Iterate through learner submissions
      for (const submission of learnerSubmissions) {
        const { learner_id, assignment_id, submission: { submitted_at, score } } = submission;
  
        // Check if the assignment is due and not late
        if (isAssignmentDue(assignmentGroup, assignment_id, submitted_at)) {
          const assignmentWeight = getAssignmentWeight(assignmentGroup, assignment_id);
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
        const totalWeight = getTotalWeight(assignmentGroup);
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
  
  // Helper function to validate input data
  function validateInput(courseInfo, assignmentGroup, learnerSubmissions) {
    // Implement validation logic here
    // ...
  
    // Example validation: Check if AssignmentGroup belongs to the specified course
    if (assignmentGroup.course_id !== courseInfo.id) {
      throw new Error('Invalid input: AssignmentGroup does not belong to the specified course.');
    }
  }
  
  // Helper function to check if an assignment is due and not late
  function isAssignmentDue(assignmentGroup, assignmentId, submittedAt) {
    const assignment = assignmentGroup.assignments.find(a => a.id === assignmentId);
    const due = new Date(assignment.due_at);
    const now = new Date();
    // Check if the assignment is not yet due
    if (now >= due) {
      return true; // Assignment is due or late
    } else {
      return false; // Assignment is not yet due
    }
  }
  
  // Helper function to calculate the weighted score for an assignment
  function calculateWeightedScore(score, weight) {
    // Implement weighted score calculation logic here
    // ...
  
    // Example: Deduct 10% for late submissions
    return score * (1 - 0.1);
  }
  
  // Helper function to get the weight of an assignment within its group
  function getAssignmentWeight(assignmentGroup, assignmentId) {
    // Implement assignment weight retrieval logic here
    // ...
  
    // Example: Return the weight from the assignment group
    const assignment = assignmentGroup.assignments.find(a => a.id === assignmentId);
    return assignment.points_possible * (assignmentGroup.group_weight / 100);
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
  
  // Example usage
  const results = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(results);
  
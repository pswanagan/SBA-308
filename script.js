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
      validateInput(courseInfo, assignmentGroup);
  
      const learnerData = {};
       
      // Iterate through learner submissions
      for (const submission of learnerSubmissions) {
        const { learner_id, assignment_id, submission: { submitted_at, score } } = submission;
  
        // Check if the assignment is due and not late
        if (isAssignmentDue(assignmentGroup, assignment_id, submitted_at)) {
         
            const assignmentScores = getAssignmentScore(assignmentGroup,assignment_id, submitted_at, score);
           
            const assign = assignmentGroup.assignments.find(a => a.id === assignment_id);
          const pointsPossible = assign.points_possible;

       
          // Update learner data
          if (!learnerData[learner_id]) {
            learnerData[learner_id] = { id: learner_id, avg: 0, totalPoints: 0 };
          }
    
          const assignmentPercent = assignmentScores / pointsPossible
          learnerData[learner_id][assignment_id] = assignmentPercent.toFixed(2);
          learnerData[learner_id].totalPoints += pointsPossible;
          //collect the actual points gotten
          learnerData[learner_id].avg += assignmentScores;
        }
      }
  // Calculate the overall average for each learner and deleting the totalPoints
  for (const learnerId in learnerData) {
    const totalPoints = learnerData[learnerId].totalPoints;
    learnerData[learnerId].avg = (learnerData[learnerId].avg / totalPoints) * 100;
    delete learnerData[learnerId].totalPoints;
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
  const validateInput = (courseInfo, assignmentGroup) =>{
    // Check if points_possible is zero for any assignment
  for (const assignment of AssignmentGroup.assignments) {
    if (assignment.points_possible === 0) {
      throw new Error('Invalid input: points_possible cannot be zero for an assignment.');
    }
  }
  
    // Example validation: Check if AssignmentGroup belongs to the specified course
    if (assignmentGroup.course_id !== courseInfo.id) {
      throw new Error('Invalid input: AssignmentGroup does not belong to the specified course.');
    }
  }
  
  // Helper function to check if an assignment is due and not late
 const isAssignmentDue = (assignmentGroup, assignmentId) => {

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
  // Helper function to get the learner's score for an assignment
const getAssignmentScore = (assignmentGroup, assignmentId, submitted, score,deductionPercentage = 0.1) => {
    const assignment = assignmentGroup.assignments.find(a => a.id === assignmentId);
    const dueDate = new Date(assignment.due_at);
  
    const submissionDate = new Date(submitted);
  
    // Check if the submission is late
    if (submissionDate > dueDate) {
      // Deduct 10% for late submissions
      const lateDeduction = assignment.points_possible * deductionPercentage;
      return Math.max(0, score - lateDeduction);
    } else {
      return score;
    }
}


  // Example usage
  const results = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(results);
  
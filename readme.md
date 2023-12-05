This script processes learner submissions, calculates their assignment scores, and generates learner performance data.

Before using the script, you need to provide the following sample data:

CourseInfo: Information about the course.
AssignmentGroup: Details about the assignment group, including assignments with due dates and points possible.
LearnerSubmissions: Submissions made by learners, including learner ID, assignment ID, submission details, and scores.

Functions
1. getLearnerData
The main function of the processor, getLearnerData, processes learner submissions, calculates their assignment scores, and generates learner performance data. It takes three parameters: courseInfo, assignmentGroup, and learnerSubmissions.


Learner Data Processor
Overview
The Learner Data Processor is a JavaScript utility that processes learner submissions, calculates their assignment scores, and generates learner performance data. This README provides an overview of the key components and functionalities of the processor.

Sample Data
Before using the processor, you need to provide the following sample data:

CourseInfo: Information about the course.
AssignmentGroup: Details about the assignment group, including assignments with due dates and points possible.
LearnerSubmissions: Submissions made by learners, including learner ID, assignment ID, submission details, and scores.
Functions
1. getLearnerData
The main function of the processor, getLearnerData, processes learner submissions, calculates their assignment scores, and generates learner performance data. It takes three parameters: courseInfo, assignmentGroup, and learnerSubmissions.

2. Helper Functions
The script includes several helper functions:

validateInput: Ensures the validity of input data, checking if points_possible is zero for any assignment and verifying if the AssignmentGroup belongs to the specified course.

isAssignmentDue: Checks if an assignment is due and not late based on the due date.

getAssignmentScore: Calculates the learner's score for an assignment, considering late submissions and applying a deduction percentage.

Usage
Input Validation:
Ensure that the provided input data (CourseInfo, AssignmentGroup, LearnerSubmissions) is valid.

Process Learner Data:
Call the getLearnerData function with the required parameters.

Results:
The function returns an array containing learner performance data, including learner ID, average score, and assignment-specific scores.
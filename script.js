'use strict';
var STUDENT_NUMBER_PATTERN;
var EMAIL_PATTERN;

var WORKSHOP_FEES = {
  'Web Development': 500,
  'UI/UX Design': 400,
  'Cybersecurity': 600
};

const registrationForm = document.getElementById('registrationForm');
const studentName = document.getElementById('studentName');
const studentNumber = document.getElementById('studentNumber');
const email = document.getElementById('email');
const workshop = document.getElementById('workshop');
const studentTypeRegular =  document.getElementById('studentTypeRegular');
const studentTypeScholar = document.getElementById('studentTypeScholar');
const terms = document.getElementById('terms');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const workshopError = document.getElementById('workshopError');
const termsError = document.getElementById('temrsError');
const registrationFee = document.getElementById('registrationFee');
const discount = document.getElementById('discount');
const finalFee = document.getElementById('finalFee');
const registerBtn = document.getElementById('registerBtn');
const clearBtn = document.getElementById('clearBtn');
const registrationResult = document.getElementById('registrationResult');

function isValidStudentName(name) {
  return typeof name === 'string' && name.trim().length >= 2;
}
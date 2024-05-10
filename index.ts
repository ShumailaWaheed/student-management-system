#! /usr/bin/env node

import inquirer from "inquirer"

const createProfile = await inquirer.prompt([
    {
        name: "studentName",
        type: "input",
        message: "Create Your Profile - Enter Your Full Name:",
        
    },
    {
        name: "email",
        type: "input",
        message: "Enter Your Email Address",             
    },
    {
        
        name: "contactNumber",
        type: "input",
        message: "Enter Your Contact Number:",
    
    },
    {
        name: "education",
        type: "input",
        message: "Enter Your Highest Education Qualification:"
    },
    {
        name: "certification",
        type: "input",
        message: "Enter Any Certifications You Have:"
    }
]);

console.log("Profile Created Successfully!");
console.log("Profile Information:");
console.log(createProfile);

const updateProfile= await inquirer.prompt([
    {
        name: "updateProfile",
        type: "confirm",
        message: "Do you want to update your profile?",
    }
]);
    console.log("Profile Update Successfuly!");
    console.log("Updated Profile Information");
    console.log(updateProfile);

// Now, proceed with course enrollment, payment, and feedback

const enrollCource = await inquirer.prompt([
    {
        name: "courses",
        type: "list",
        message: "Select the course to enroll",
        choices: ["Graphic Designing", "Web 3.0", "Amazone", 
        "Content Writing", "Digital Marketing", "Cyber"],
    }
]);

console.log(`Enrolled in ${enrollCource.courses} successfully!`);

// Example usage:
console.log(enrollCource);

const CourseFees: { [key: string]: number } = {
    "Graphic Designing": 3000,
    "Web 3.0": 5000,
    "Amazone": 2500,
    "Content Writing": 4000,
    "Digital Marketing": 4500,
    "Cyber": 3500,
};

console.log(CourseFees);

const payment = await inquirer.prompt([
    {
        name: "paymentMethod",
        type: "list",
        message: `Select Payment Method for ${CourseFees} (Fee: ${CourseFees})`,
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    }
]);

console.log(`Payment Method: ${payment.paymentMethod}`);
console.log(`Amount Paid: ${CourseFees}`);

const confirmPayment = await inquirer.prompt([
    {
        name: "confirm",
        type: "confirm",
        message: "Confirm Payment?"
    }
]);
if (confirmPayment.confirm) {
    console.log("Payment onfirmed. Enrollment completed successfully!");
} else{
    console.log("Payment not confirmed. Please try again later.")
}
    
const feedback = await inquirer.prompt([
    {
        name: "course",
        type: "input",
        message: "Enter the course you want to provide feedback for:"
    },
    {
        name: "instructor",
        type: "input",
        message: "Enter the instructor's name:"
    },
    {
        name: "rating",
        type: "number",
        message: "Rate the course (1-5):",
        validate: function(value) {
            return value >= 1 && value <= 5 ? true : "Please enter a number between 1 and 5.";
        }
    },
    {
        name: "comment",
        type: "input",
        message: "Provide additional comments (optional):"
    }
]);

console.log("\n********** Feedback **********\n");
console.log(`Course: ${feedback.course}`);
console.log(`Instructor: ${feedback.instructor}`);
console.log(`Rating: ${feedback.rating}`);
if (feedback.comment) {
    console.log(`Comment: ${feedback.comment}`);
} else {
    console.log("No additional comments provided.");
}

// Example usage:
console.log(feedback);

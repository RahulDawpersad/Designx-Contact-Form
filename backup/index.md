<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 50px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            margin-bottom: 30px;
        }

        form {
            display: grid;
            gap: 20px;
        }

        label {
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        textarea {
            resize: none;
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        textarea {
            height: 150px;
        }

        button[type="submit"] {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        @media screen and (max-width: 600px) {
            .container {
                margin: 20px auto;
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>DESIGNX</h1>
        <form id="contactForm">
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required>

            <label for="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required>

            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required>

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send</button>
        </form>
    </div>

    <script>
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            // Get form data
            const formData = new FormData(this);
            const fullName = formData.get("fullName");
            const phoneNumber = formData.get("phoneNumber");
            const email = formData.get("email");
            const subject = formData.get("subject");
            const message = formData.get("message");

            // Send email using XMLHttpRequest
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/send-email");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function() {
                if (xhr.status === 200) {
                    alert("Email sent successfully!");
                } else {
                    alert("Failed to send email. Please try again later.");
                }
            };
            xhr.send(JSON.stringify({ fullName, phoneNumber, email, subject, message }));
        });
    </script>
</body>
</html>

import axios from 'axios';

export function sendContactEmail(name, email, subject, phoneNumber, message) {
    axios({
        method: 'post',
        url: 'https://mail.api.mealmatch.io/send',
        data: {
            toEmails: ['mealmatchio@gmail.com'],
            subject: `MealMatch.io Contact: ${subject}`,
            message: `
            Name: ${name}
            Email: ${email}
            Phone Number: ${phoneNumber}
            Message: ${message}
            `,
        },
    })
        .then((res) => console.log('email res = ', res))
        .catch((err) => console.log('email err = ', err));
}

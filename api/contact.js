import axios from 'axios';

export async function sendContactEmail(
    name,
    email,
    subject,
    phoneNumber,
    message
) {
    return axios({
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
    });
}

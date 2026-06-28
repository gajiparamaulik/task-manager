import mailGen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
    const mailGenerator = new mailGen({
        theme: 'default',
        product: {
            name: 'Task Manager',
            link: 'https://mailgen.js/'
        }
    });

    var emailText = mailGenerator.generatePlaintext(options);
}
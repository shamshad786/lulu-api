const nodemailer = require('nodemailer')


const sendEmail = async options =>{

    console.log('mail option: ',options)

    //!1). create transport

    const transporter =  nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "lulumalls697@gmail.com",
          pass: "nqarncnfpuuvvmqa",
  }
    })

    //!2). Define the email option

    const mailOptions = {
        from: '<lulumalls697@gmail.com>',
        to: options.email ,
        subject: options.subject,
        text: options.message,
      
    }

    //!3). Actually send the email
    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail
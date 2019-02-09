// @see https: //blog.lichter.io/posts/sending-emails-through-nuxtjs/

import express from 'express'
import nodemailer from 'nodemailer'
import validator from 'validator'
import xssFilters from 'xss-filters'

const rejectFunctions = new Map([
    ['name', v => v.length < 1],
    ['email', v => !validator.isEmail(v)],
    ['msg', v => v.length < 1]
])
const validateAndSanitize = (key, value) => {
    // If map has key and function returns false, return sanitized input. Else, return false
    return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
}
const sendMail = (name, email, msg) => {
    const transporter = nodemailer.createTransport({
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
    })
    transporter.sendMail({
        from: email,
        to: 'adam@harpur.io',
        subject: 'New contact form message',
        text: msg
    })
}



const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    const attributes = ['name', 'email', 'msg'] // form fields

    // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
    const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

    // True if some of the attributes new values are false -> validation failed
    const someInvalid = sanitizedAttributes.some(r => !r)

    if (someInvalid) {
        // Throw a 422 with a neat error message if validation failed
        return res.status(422).json({
            'error': 'failed sanitation'
        })
    }

    sendMail(...sanitizedAttributes)
    res.status(200).json({
        'message': 'message sent'
    })
})

export default {
    path: '/api/contact',
    handler: app
}
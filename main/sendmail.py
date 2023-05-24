import os
from email.message import EmailMessage
import ssl
import smtplib


def sendmail(to, subject, body):
    with open(f"{os.getcwd()}password.txt", 'r') as f:
        password = f.read()
    sender = "clickviralng@gmail.com"
    recipient = to

    mail = EmailMessage()
    mail["From"] = sender
    mail["To"] = recipient
    mail["Subject"] = subject

    mail.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
        smtp.login(sender, password)
        smtp.sendmail(sender, recipient, mail.as_string())
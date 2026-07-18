from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel, Field
import smtplib
from email.message import EmailMessage

router = APIRouter()

class Enquiry(BaseModel):
    fullName: str = Field(..., min_length=2, max_length=100, pattern=r"^[a-zA-Z\s\'-]+$")
    email: str = Field(..., pattern=r"^[\w\.-]+@[\w\.-]+\.\w+$")
    mobileNumber: str = Field(..., pattern=r"^\+?[1-9]\d{1,14}$")
    message: str = Field(..., min_length=10, max_length=1000)

def send_email_notification(enquiry: Enquiry):
    """
    Sends an email notification for a new enquiry.
    Configure the SMTP_SERVER, SMTP_PORT, SMTP_USERNAME, and SMTP_PASSWORD below.
    """
    import os
    # --- SMTP Configuration ---
    # TODO: Fill these in later with your real SMTP server details
    SMTP_SERVER = "smtp.hostinger.com"
    SMTP_PORT = 465
    SMTP_USERNAME = "support@vipanchibakes.com"
    # Use environment variables so your password isn't exposed in code!
    SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD") 
    
    # The email address that will receive the enquiries
    RECEIVER_EMAIL = "support@vipanchibakes.com"

    # Create the email message
    msg = EmailMessage()
    msg.set_content(f"""
New Enquiry Received!

Name: {enquiry.fullName}
Email: {enquiry.email}
Mobile Number: {enquiry.mobileNumber}

Message:
{enquiry.message}
    """)

    msg['Subject'] = f"New Bakery Enquiry from {enquiry.fullName}"
    msg['From'] = SMTP_USERNAME
    msg['To'] = RECEIVER_EMAIL

    try:
        # Note: If you have not configured the SMTP server, this will raise an exception.
        # We catch it below so the API doesn't crash during development.
        if SMTP_SERVER != "smtp.example.com":
            if SMTP_PORT == 465:
                with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
                    server.login(SMTP_USERNAME, SMTP_PASSWORD)
                    server.send_message(msg)
            else:
                with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
                    server.starttls()
                    server.login(SMTP_USERNAME, SMTP_PASSWORD)
                    server.send_message(msg)
            print(f"Email successfully sent for enquiry from {enquiry.fullName}")
        else:
            print(f"SMTP not configured. Mock sending email for enquiry:\n{msg.get_content()}")
            
    except Exception as e:
        print(f"Failed to send email: {e}")


@router.post("/enquiries", status_code=201)
async def create_enquiry(enquiry: Enquiry, background_tasks: BackgroundTasks):
    """
    Receives enquiry form data from the frontend and schedules an email notification.
    """
    # Add the email sending task to background so it doesn't block the API response
    background_tasks.add_task(send_email_notification, enquiry)
    
    return {"message": "Enquiry received successfully", "data": enquiry.dict()}

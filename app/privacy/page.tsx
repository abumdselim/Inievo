import { LegalTemplate } from "@/components/legal-template"

export const metadata = {
  title: "Privacy Policy | Inievo",
  description: "Privacy Policy for Inievo digital solutions.",
}

const privacySections = [
  {
    title: "Introduction",
    content:
      "Inievo ('we', 'us', 'our', or 'Company') operates the inievo.com website (the 'Service'). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.",
  },
  {
    title: "Information Collection and Use",
    content: [
      "We collect several different types of information for various purposes to provide and improve our Service to you.",
      "Types of Data Collected: Personal Data including Name, Email address, Phone number, Cookies and Usage Data.",
      "Usage Data is collected automatically when you use the Service (browser type, IP address, pages visited, time and date of visit).",
    ],
  },
  {
    title: "Use of Data",
    content: [
      "Inievo uses the collected data for various purposes:",
      "To provide and maintain our Service",
      "To notify you about changes to our Service",
      "To gather analysis or valuable information so that we can improve our Service",
      "To monitor the usage of our Service",
      "To detect, prevent and address technical issues",
    ],
  },
  {
    title: "Cookies",
    content:
      "We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    title: "Security of Data",
    content:
      "The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date at the top of this Privacy Policy.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us by email: hello@inievo.com",
  },
]

export default function PrivacyPage() {
  return <LegalTemplate title="Privacy Policy" lastUpdated="January 2025" sections={privacySections} />
}

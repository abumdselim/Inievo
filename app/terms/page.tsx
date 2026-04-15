import { LegalTemplate } from "@/components/legal-template"

export const metadata = {
  title: "Terms of Service | Inievo",
  description: "Terms of Service for Inievo digital solutions.",
}

const termsSections = [
  {
    title: "Agreement to Terms",
    content:
      "These Terms of Service constitute a legally binding agreement made between you ('User', 'you' or 'your') and Inievo ('Company', 'we', 'us', or 'our'). If you disagree with any part of these terms, then you may not use our Service.",
  },
  {
    title: "Intellectual Property Rights",
    content: [
      "Unless otherwise indicated, the Service is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Service are owned or controlled by us.",
      "Our content is protected by copyright and trademark laws. You are granted a limited license to access and use the Service for your personal, non-commercial purposes only.",
      "Any reproduction, duplication, distribution, or transmission of our content without our written permission is strictly prohibited.",
    ],
  },
  {
    title: "User Representations",
    content: [
      "By using the Service, you represent and warrant that:",
      "All information you submit is true, accurate, current, and complete",
      "You have the legal capacity and you agree to comply with these Terms of Service",
      "You will not access the Service through automated or non-human means",
      "You will not use the Service for any illegal or unauthorized purpose",
    ],
  },
  {
    title: "User Restrictions",
    content: [
      "You agree that you will not:",
      "Violate applicable laws or regulations",
      "Infringe upon or violate our intellectual property rights or the intellectual property rights of others",
      "Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate",
      "Submit false or misleading information",
      "Disrupt the normal flow of dialogue within our Service",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content:
      "The Service is provided on an 'AS-IS' and 'AS AVAILABLE' basis. Inievo makes no warranties, expressed or implied, regarding the Service. Inievo disclaims all other warranties, express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Except as prohibited by law, you agree that in no event shall Inievo be liable to you in contract, tort, or otherwise for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost revenue, lost data, or business interruption.",
  },
  {
    title: "Indemnification",
    content:
      "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand made by any third party due to or arising out of your use of the Service or violation of these Terms.",
  },
  {
    title: "Modifications",
    content:
      "We may modify or revise these Terms of Service at any time. The most current version will always be on the Service. Your continued use of the Service following the posting of revised Terms means that you accept and agree to the changes.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms of Service are governed by the laws of Bangladesh. Your use of the Service is also subject to any other applicable laws. Any dispute arising from these Terms shall be resolved exclusively in the courts of Bangladesh.",
  },
  {
    title: "Contact Information",
    content:
      "If you have any questions about these Terms of Service, please contact us at hello@inievo.com",
  },
]

export default function TermsPage() {
  return <LegalTemplate title="Terms of Service" lastUpdated="January 2025" sections={termsSections} />
}

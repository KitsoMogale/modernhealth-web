import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './App.css';

const termsOfUseContent = `
# Terms of Use for ModernHealth

**Last Updated: March 26, 2026**

Welcome to ModernHealth. By downloading, installing, or using the ModernHealth mobile application ("App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.

## 1. About the App

ModernHealth is a nutrition tracking and health education app. It uses artificial intelligence to analyze meals, provide nutrient breakdowns, suggest meal plans, and deliver educational content about nutrition and the human body. The App offers both free and premium subscription-based features.

## 2. Eligibility

You must be at least 13 years old to use this App. By using the App, you confirm that you meet this age requirement.

## 3. Account Registration

You may create an account using an email address, Google Sign-In, or Sign in with Apple. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. You agree to provide accurate information during registration.

## 4. Subscriptions and Payments

ModernHealth offers an optional auto-renewable monthly subscription ("Premium") that unlocks additional features.

- **Price**: Displayed in the App at the time of purchase, based on your region.
- **Billing**: Payment is charged to your Apple ID or Google Play account upon confirmation of purchase.
- **Renewal**: Subscriptions automatically renew each month unless cancelled at least 24 hours before the end of the current billing period.
- **Cancellation**: You may cancel your subscription at any time through your device's subscription settings (Apple App Store or Google Play Store). Cancellation takes effect at the end of the current billing period.
- **Refunds**: Refund requests are handled by Apple or Google, not by ModernHealth. Contact Apple Support or Google Play Support for refund inquiries.

## 5. AI-Generated Content Disclaimer

The App uses artificial intelligence (powered by third-party AI services) to generate nutritional analyses, meal suggestions, health insights, and educational content. This content is:

- Generated for educational and informational purposes only
- Not medical advice, diagnosis, or treatment
- Not a substitute for professional medical guidance

Nutritional data is sourced from and referenced against established databases including USDA FoodData Central, NIH Office of Dietary Supplements, and other authoritative institutions. However, AI-generated results may contain inaccuracies. Always consult a qualified healthcare professional before making changes to your diet or health routine.

## 6. Acceptable Use

You agree not to:

- Use the App for any unlawful purpose
- Attempt to reverse-engineer, decompile, or tamper with the App
- Submit false, misleading, or harmful content
- Attempt to access other users' accounts or data
- Use the App to provide medical advice to others

## 7. Intellectual Property

All content, design, features, and functionality of the App — including but not limited to text, graphics, logos, icons, and software — are the property of ModernHealth and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the App without our written permission.

## 8. User Data and Privacy

Your use of the App is also governed by our [Privacy Policy](/privacy-policy), which describes how we collect, use, and protect your information. By using the App, you consent to our data practices as described in the Privacy Policy.

## 9. Third-Party Services

The App integrates with third-party services including:

- Firebase (authentication)
- Google Sign-In and Sign in with Apple (account creation)
- Google Play Billing / Apple In-App Purchase (payments)
- DeepSeek AI (nutrition analysis and content generation)

We are not responsible for the practices or policies of these third-party services. Your use of these services is subject to their respective terms and privacy policies.

## 10. Disclaimer of Warranties

The App is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not guarantee that the App will be uninterrupted, error-free, or completely accurate. Nutritional analyses and AI-generated content are estimates and should not be relied upon as precise measurements.

## 11. Limitation of Liability

To the fullest extent permitted by law, ModernHealth and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App, including but not limited to health decisions made based on AI-generated content.

## 12. Account Deletion

You may delete your account at any time through the App's Profile settings. Upon deletion, your personal data will be permanently removed from our systems, except where retention is required by law.

## 13. Changes to These Terms

We may update these Terms from time to time. The updated version will be posted on our website and within the App, with the "Last Updated" date revised. Continued use of the App after changes constitutes acceptance of the updated Terms.

## 14. Governing Law

These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa, without regard to conflict of law principles.

## 15. Contact Us

If you have questions or concerns about these Terms, contact us at:

- **Email**: modernhealth84@gmail.com
`;

function TermsOfUse() {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <article>
          <ReactMarkdown>{termsOfUseContent}</ReactMarkdown>
        </article>
        <Link to="/" className="back-button">Back</Link>
      </div>
    </main>
  );
}

export default TermsOfUse;

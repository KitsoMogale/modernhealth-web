import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './App.css';

const privacyPolicyContent = `
# Privacy Policy for ModernHealth App

**Last Updated: July 21, 2025**

ModernHealth ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use the ModernHealth mobile application ("App"). The App provides educational content about nutrition and the human body, along with subscription-based features to enhance your health journey( e.g nutrition tracking and meal recommendations). By using the App, you agree to the practices described in this policy.

## 1. Information We Collect

We collect the following types of information to provide and improve our services:

### a. Information You Provide
- **Account Information**: When you create a profile or subscribe, we collect your email address and subscription status (e.g., whether you have an active subscription). This is stored in our database and used for account management and payment processing.
- **Payment Information**: If you choose to subscribe (e.g., for $6/month), we collect payment details through our third-party payment processor (PayPal). We do not store your credit card or payment information directly on our servers.

### b. Information Not Collected
- The App does not collect sensitive personal information like your address, or health data unless explicitly provided by you (e.g., email for subscriptions).
- Educational screens (e.g., Nutrition Education, Human Body Education) do not collect personal data beyond usage analytics.

## 2. How We Use Your Information

We use your information to provide, maintain, and improve the App’s functionality:

- **Account and Subscription Management**: Your email and subscription status are used to manage your account, verify subscription status, and provide access to premium features (e.g., advanced educational content).
- **Payment Processing**: Payment details are used to process your subscription through PayPal, ensuring secure transactions and verifying payment completion.
- **App Improvement**: Usage and device data help us analyze how the App is used, troubleshoot issues, and enhance features like navigation and content delivery.
- **Personalization**: We may use usage data to tailor educational content recommendations (e.g., suggesting relevant nutrition or human body topics).
- **Communication**: Your email may be used to send transactional messages, such as payment confirmations or subscription updates.

## 3. How We Share Your Information

We only share your information as necessary to provide our services or comply with legal obligations:

- **Third-Party Service Providers**:
  - **Payment Processor (PayPal)**: We share your email and payment details with PayPal to process subscription payments securely. PayPal’s privacy practices are governed by their own [Privacy Policy](https://www.paypal.com/us/webapps/mpp/ua/privacy-full).
  - **Analytics Providers**: We may use third-party analytics tools (e.g., Google Analytics) to collect and analyze non-personal usage data. These providers receive anonymized data to help us understand App performance.
- **Legal Compliance**: We may disclose your information if required by law, such as in response to a court order or regulatory request.
- **No Unnecessary Sharing**: We do not sell, trade, or share your personal information with third parties for marketing purposes or any purpose beyond what is necessary for App functionality.

## 4. Data Storage and Security

- **Storage**: Your email and subscription status are stored in a MongoDB. Payment details are handled by PayPal and not stored by us.
- **Retention**: We retain your data only as long as necessary to provide services or comply with legal requirements. You can request data deletion (see Section 6).

## 5. Your Choices and Rights

You have control over your information:
- **Access and Update**: You can view or update your health goals, current metrics(e.g age, weight) and subscription status in the App’s profile settings.
- **Data Deletion**: To delete your account data, visit our website at [Account Deletion](https://modernhealth-web.netlify.app). We will remove your email and subscription data from our systems, except where required by law.
- **Subscription Cancellation**: The app does not automatically have automatically recurring subscription payments.

## 6. Children’s Privacy

The App is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will delete it promptly. Contact us at support@modernhealth.com if you believe we have collected data from a child under 13.

## 7. Third-Party Links

The App may contain links to third-party websites or services (e.g., PayPal for payments). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing information.

## 8. International Data Transfers

The App is operated in South Africa, but your data may be processed in other countries by our third-party providers (e.g., PayPal). We ensure these providers comply with applicable privacy laws, such as GDPR or CCPA, where relevant.

## 9. Changes to This Privacy Policy

We may update this Privacy Policy to reflect changes in our practices or legal requirements. The updated policy will be posted in the App, with the “Last Updated” date revised. Continued use of the App after changes constitutes acceptance of the new policy.

## 10. Contact Us

If you have questions, concerns, or requests regarding your privacy or this policy, contact us at:
- **Email**: support@modernhealth.com

By using the ModernHealth App, you acknowledge that you have read and understood this Privacy Policy.
`;

function PrivacyPolicy() {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <article>
          <ReactMarkdown>{privacyPolicyContent}</ReactMarkdown>
        </article>
        <Link to="/" className="back-button">Back</Link>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
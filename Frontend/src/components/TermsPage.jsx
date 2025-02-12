import React from "react";
import { 
  ScrollText, 
  UserCheck, 
  Store, 
  ShieldAlert, 
  Wallet,
  AlertCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

const TermsPage = () => {
  const sections = [
    {
      id: "account",
      icon: <UserCheck className="h-5 w-5"/>,
      title: "Account Registration",
      content: [
        "Users must provide accurate and up-to-date personal information during registration.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "9ja Market reserves the right to suspend or terminate accounts found to be fraudulent or violating platform policies."
      ]
    },
    {
      id: "transactions",
      icon: <Store className="h-5 w-5"/>,
      title: "Marketplace Transactions",
      content: [
        "All buyers and sellers must adhere to Nigerian trade regulations.",
        "Sellers are responsible for the quality, authenticity, and delivery of listed products.",
        "Buyers must ensure timely payment and verify product details before purchase.",
        "9ja Market acts as a facilitator and holds no direct liability in transactions between users."
      ]
    },
    {
      id: "prohibited",
      icon: <ShieldAlert className="h-5 w-5"/>,
      title: "Prohibited Activities",
      content: [
        "Sale of counterfeit, illegal, or restricted items.",
        "Fraudulent activities, false advertising, or misrepresentation.",
        "Harassment, abuse, or unethical behavior towards other users.",
        "Unauthorized use of 9ja Market's brand, trademarks, or intellectual property."
      ]
    },
    {
      id: "payments",
      icon: <Wallet className="h-5 w-5"/>,
      title: "Payment, Refunds & Dispute Resolution",
      content: [
        "All payments must be processed through 9ja Market's secure payment gateways.",
        "Refund policies vary by vendor and must be resolved within 7 days of purchase disputes.",
        "9ja Market provides mediation support but does not bear responsibility for independent agreements between users."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-Primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 justify-center mb-4">
            <ScrollText className="h-8 w-8 text-Primary"/>
            <h1 className="text-3xl md:text-4xl font-bold text-Primary">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            These Terms and Conditions govern your access and use of our platform. 
            By signing up and transacting on 9ja Market, you agree to comply with 
            the following policies.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Alert className="mb-8 border-Primary/20 bg-Primary/5">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            By using 9ja Market, you automatically agree to these terms. Please read them carefully.
          </AlertDescription>
        </Alert>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger className="hover:text-Primary">
                <div className="flex items-center gap-3">
                  {section.icon}
                  <span>{section.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-gray-600">
                  {section.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-Primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Amendment Notice */}
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-white rounded-lg border">
          <h3 className="font-semibold text-lg mb-4">Amendments & Compliance</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-Primary mt-1">•</span>
              <span>9ja Market reserves the right to update these terms to reflect operational improvements or regulatory changes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-Primary mt-1">•</span>
              <span>Continued use of the platform after modifications signifies acceptance of the updated policies.</span>
            </li>
          </ul>
          <div className="mt-6 text-sm text-gray-500">
            For inquiries, reach out to our support team at{" "}
            <a href="mailto:support@9jamarket.com" className="text-Primary hover:underline">
              support@9jamarket.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 
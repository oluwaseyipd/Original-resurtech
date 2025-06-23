import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ data organized by categories
  const faqQuestions = [
    {
      id: "payment",
      question: "Do I have to pay to apply for a laptop?",
      answer: "No. The application is free. However, if you're selected, a small commitment fee will be required upon delivery to help ensure accountability."
    },
    {
      id: "donation-days",
      question: "What days can I donate or drop off items?",
      answer: "Every other Friday and Saturday during the donation window. We will contact you with confirmed pickup times."
    },
    {
      id: "gadgets",
      question: "Do you accept gadgets other than laptops?",
      answer: "Only laptops are accepted for donation. All other gadgets (phones, printers, CPUs, etc.) can be recycled through our recycling form."
    },
    {
      id: "location",
      question: "I live outside Lagos. Can I still donate or apply?",
      answer: "Yes! Just fill the appropriate form, and our team will let you know if logistics are available in your area."
    },
    {
      id: "updates",
      question: "Will I get updates on my donation or application?",
      answer: "Yes. We'll keep you informed through email on next steps and confirmations."
    }
  ];

  // State for tracking open/closed state of collapsibles
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community of volunteers who are passionate about bridging the digital divide and protecting the environment.
          </p>
        </div>

        {/* FAQ Questions Section */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqQuestions.map((item) => (
              <Collapsible
                key={item.id}
                open={openItems[item.id]}
                onOpenChange={() => toggleItem(item.id)}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`flex-shrink-0 h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      openItems[item.id] ? 'transform rotate-180' : ''
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 pt-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
                  <p className="leading-relaxed">{item.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                <Link to="/contact">
                Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
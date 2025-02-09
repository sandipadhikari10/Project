import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "NRNA California Chapter भनेको के हो?",
    answer:
      'NRNA California Chapter भनेको "Non-Resident Nepali Association" (NRNA) को एक स्थानीय शाखा हो जुन क्यालिफोर्नियामा बसोबास गर्ने नेपाली समुदायका हितमा काम गर्छ। यस संस्थाले नेपालीहरूका हक र हितको रक्षा गर्दै उनीहरूको सामाजिक र सांस्कृतिक पहिचानको संरक्षणमा योगदान पुर्‍याउँछ।',
  },
  {
    question: "NRNA California Chapter र NRNA America मा के सम्बन्ध?",
    answer:
      "NRNA California Chapter, NRNA America को अधीनस्थ संस्था हो। यो स्थानीय रूपमा नेपाली समुदायलाई सेवा पुर्‍याउने उद्देश्य राख्दछ।",
  },
  {
    question: "NRNA California Chapter र NRNA का सम्बन्ध?",
    answer:
      "NRNA California Chapter अन्तर्राष्ट्रिय NRNA को हिस्सा हो, जुन विभिन्न देशहरूमा रहेका नेपालीहरूको हितमा काम गर्छ।",
  },
  {
    question: "NRNA California Chapter को मुख्य उद्देश्य के हो?",
    answer:
      "यसको मुख्य उद्देश्य क्यालिफोर्नियामा रहेका नेपालीहरूको सामाजिक, सांस्कृतिक तथा आर्थिक हितमा काम गर्नु हो।",
  },
  {
    question:
      "NRNA को सदस्य बन्न अमेरिकाको नागरिकता वा ग्रिन कार्ड लिएको हुनुपर्छ कि पर्दैन?",
    answer:
      "NRNA को सदस्यता विभिन्न प्रकारको हुन्छ, र अमेरिकी नागरिकता वा ग्रिन कार्डको आवश्यकतामा निर्भर गर्दैन।",
  },
  {
    question: "NRNA California Chapter मा सदस्यता कसरी गर्न सकिन्छ?",
    answer:
      "सदस्यता लिनका लागि NRNA को आधिकारिक वेबसाइट वा स्थानीय प्रतिनिधिहरूसँग सम्पर्क गर्न सकिन्छ।",
  },
  {
    question: "NRNA California कुनै राजनीतिक संगठन हो कि हैन?",
    answer:
      "NRNA कुनै राजनीतिक संगठन होइन। यो गैर-राजनीतिक तथा गैर-लाभकारी संगठन हो।",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-8">
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="container mx-auto px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 mb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded-md">
              <span>{faq.question}</span>
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {activeIndex === index && (
              <div className="bg-white p-4 border-t border-gray-300 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;

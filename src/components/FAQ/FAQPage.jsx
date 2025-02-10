import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import faqs from "./faqs";

// const faqs = [
//   {
//     question: "NRNA California Chapter भनेको के हो?",
//     answer:
//       'NRNA California Chapter भनेको "Non-Resident Nepali Association" (NRNA) को एक स्थानीय शाखा हो जुन क्यालिफोर्नियामा बसोबास गर्ने नेपाली समुदायका हितमा काम गर्छ। यस संस्थाले नेपालीहरूका हक र हितको रक्षा गर्दै उनीहरूको सामाजिक र सांस्कृतिक पहिचानको संरक्षणमा योगदान पुर्‍याउँछ।',
//   },
//   {
//     question: "NRNA California Chapter र NRNA America मा के सम्बन्ध?",
//     answer:
//       "NRNA California Chapter, NRNA America को अधीनस्थ संस्था हो। यो स्थानीय रूपमा नेपाली समुदायलाई सेवा पुर्‍याउने उद्देश्य राख्दछ।",
//   },
//   {
//     question: "NRNA California Chapter र NRNA का सम्बन्ध?",
//     answer:
//       "NRNA California Chapter अन्तर्राष्ट्रिय NRNA को हिस्सा हो, जुन विभिन्न देशहरूमा रहेका नेपालीहरूको हितमा काम गर्छ।",
//   },
//   {
//     question: "NRNA California Chapter को मुख्य उद्देश्य के हो?",
//     answer:
//       "यसको मुख्य उद्देश्य क्यालिफोर्नियामा रहेका नेपालीहरूको सामाजिक, सांस्कृतिक तथा आर्थिक हितमा काम गर्नु हो।",
//   },
//   {
//     question:
//       "NRNA को सदस्य बन्न अमेरिकाको नागरिकता वा ग्रिन कार्ड लिएको हुनुपर्छ कि पर्दैन?",
//     answer:
//       "NRNA को सदस्यता विभिन्न प्रकारको हुन्छ, र अमेरिकी नागरिकता वा ग्रिन कार्डको आवश्यकतामा निर्भर गर्दैन।",
//   },
//   {
//     question: "NRNA California Chapter मा सदस्यता कसरी गर्न सकिन्छ?",
//     answer:
//       "सदस्यता लिनका लागि NRNA को आधिकारिक वेबसाइट वा स्थानीय प्रतिनिधिहरूसँग सम्पर्क गर्न सकिन्छ।",
//   },
//   {
//     question: "NRNA California कुनै राजनीतिक संगठन हो कि हैन?",
//     answer:
//       "NRNA कुनै राजनीतिक संगठन होइन। यो गैर-राजनीतिक तथा गैर-लाभकारी संगठन हो।",
//   },
//   {
//     question: "NRNA र NRNA California Chapter को छुट्टाछुट्टै सदस्यता हुन्छ?",
//     answer:
//       "हो, NRNA को सदस्यता र NRNA California Chapter को सदस्यता अलग-अलग हुन सक्छ। NRNA को सदस्यता अन्तर्राष्ट्रिय स्तरमा हुन्छ भने, NRNA California Chapter स्थानीय नेपालीहरूको लागि केन्द्रित संस्था हो।",
//   },
//   {
//     question: "NRNA California Chapter ले मुख्यगरी कुन कुन ठाउं समेटछ?",
//     answer:
//       "NRNA California Chapter ले सम्पूर्ण क्यालिफोर्निया राज्यभर रहेका नेपाली समुदायलाई समेट्छ। यसमा लस एन्जलस, सान फ्रान्सिस्को, सान डिएगो, सान जोस, साक्रामेन्टो लगायतका सहरहरू पर्दछन्।",
//   },
//   {
//     question:
//       "California मा बसेर पढीरहेका विद्यार्थीहरू NRNA मा सदस्य हुन सक्छन?",
//     answer:
//       "हो, क्यालिफोर्नियामा रहेका नेपाली विद्यार्थीहरू NRNA को सदस्य बन्न सक्छन्। विशेष गरी विद्यार्थीहरूको लागि NRNA मा संलग्न भएर विभिन्न सुविधाहरू प्राप्त गर्न सकिन्छ।",
//   },
//   {
//     question: "NRNA California Chapter का पदाधिकारीले तलब सुविधा पाउछन?",
//     answer:
//       "NRNA California Chapter का पदाधिकारीहरू स्वयंसेवक (volunteer) रूपमा काम गर्छन्। उनीहरूले कुनै तलब वा भत्ता प्राप्त गर्दैनन्।",
//   },
//   {
//     question: "NRNA California Chapter चल्नकालागि आर्थिक स्रोत के हो?",
//     answer:
//       "NRNA California Chapter को आर्थिक स्रोत मुख्य रूपमा सदस्यता शुल्क, दाताहरूबाट प्राप्त सहयोग, चन्दा तथा अन्य कोष संकलन कार्यक्रमहरू हुन्।",
//   },
//   {
//     question: "NRNA California Chapter पदाधिकारी चुनिन के गर्नुपर्छ?",
//     answer:
//       "NRNA California Chapter पदाधिकारीहरू निश्चित निर्वाचन प्रक्रियाबाट चयन गरिन्छन्। इच्छुक उम्मेदवारहरूले तोकिएको प्रक्रिया अनुसार आवेदन दिनुपर्छ।",
//   },
//   {
//     question:
//       "NRNA California Chapter ले NRNA को सदस्यता नलिएकालागि काम गर्छ कि गर्दैन?",
//     answer:
//       "हो, NRNA California Chapter ले NRNA सदस्यहरूका साथै अन्य नेपाली समुदायका लागि पनि सहयोगी कार्यक्रमहरू सञ्चालन गर्छ।",
//   },
//   {
//     question: "NRNA California Chapter कार्यसमिति कति समयमा परिवर्तन हुन्छ?",
//     answer:
//       "NRNA California Chapter कार्यसमिति प्रत्येक **२ वर्ष**मा परिवर्तन हुन्छ।",
//   },
//   {
//     question: "NRNA California Chapter कार्यसमिति कसरी चुनिन्छ?",
//     answer:
//       "NRNA California Chapter कार्यसमिति निर्वाचन प्रक्रियाबाट चुनिन्छ, जसमा सदस्यहरू मतदान गरेर नयाँ पदाधिकारीहरू चयन गर्छन्।",
//   },
// ];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold font-[vollkorn] text-gray-500 mb-10">
          Frequently Asked Questions (FAQ)
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-gray-300 rounded-lg bg-white shadow-md transition-all duration-300"
            >
              {/* Question */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer text-[#615BE5] rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-blue-900">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="text-blue-900" />
                ) : (
                  <ChevronDown className="text-blue-900" />
                )}
              </div>

              {/* Answer with Animation */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-100 border-t mt-2 border-gray-300 text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;

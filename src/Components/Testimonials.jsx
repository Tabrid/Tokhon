export default function Testimonials() {
    const testimonials = [
      {
        name: "মোঃ রিপন",
        image: "https://i.ibb.co.com/4RcnqCh/profile.png", // Replace with actual image URL
        feedback:
          "আমার ব্যবসার সম্প্রসারণে এটি সত্যিই সহায়ক ভূমিকা পালন করছে। বিস্ময়কর এবং সহজেই ব্যবহারযোগ্য সিস্টেম। ধন্যবাদ!",
      },
      {
        name: "অনিমেষ",
        designation: "সহপ্রতিষ্ঠাতা, কোড-বেলা লিমিটেড",
        image: "https://i.ibb.co.com/4RcnqCh/profile.png", // Replace with actual image URL
        feedback:
          "সাম্প্রতিককালে, এটি আমার ব্যবসার বিপণনে গুরুত্বপূর্ণ ভূমিকা রেখেছে। বিস্ময়কর সাপোর্ট দলটি সহায়তা প্রদান করে।",
      },
      {
        name: "ফরিদ হোসেন",
        designation: "মার্কেট ম্যানেজার, বাড়িভাড়া এক্স বাংলাদেশ",
        image: "https://i.ibb.co.com/4RcnqCh/profile.png", // Replace with actual image URL
        feedback:
          "আমার ব্যবসার বিপণনে এটি সত্যিই সহায়ক। বিস্ময়কর এবং সহজেই ব্যবহারযোগ্য সিস্টেম।",
      },
      {
        name: "ফাহিম",
        designation: "মার্কেট ম্যানেজার, বাড়িভাড়া এক্স বাংলাদেশ",
        image: "https://i.ibb.co.com/4RcnqCh/profile.png", // Replace with actual image URL
        feedback:
          "আমাদেরই দেশে বাড়ি বুক করতে পেরেছি নির্দিষ্ট সময়ের মধ্যেই গাড়ি চলে আসে।",
      },
    ];
  
    return (
      <div className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">গ্রাহকের পর্যলোচনা</h2>
        <p className="text-gray-600 mb-8">সামগ্রিকভাবে, গ্রাহকের পর্যলোচনা এমন একটি মাধ্যম যেখানে গ্রাহক তাদের অভিজ্ঞতা এবং মনোভাব শেয়ার করেন</p>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              {testimonial.designation && (
                <p className="text-sm text-gray-500 mb-2">
                  {testimonial.designation}
                </p>
              )}
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
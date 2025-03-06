export default function Testimonials() {
    const testimonials = [
      {
        name: "নাজ সরকার",
        image: "https://i.ibb.co.com/4RcnqCh/profile.png", // Replace with actual image URL
        feedback:
          "তাদের প্রফেশনালিজম এবং সেবার মান সত্যিই প্রশংসনীয়। আমি খুবই সন্তুষ্ট। নিশ্চিন্তে তাদের সার্ভিস নিতে পারেন।",
      },
      {
        name: "জয় চৌধুরী",
        designation: "সহপ্রতিষ্ঠাতা, কোড-বেলা লিমিটেড",
        image: "https://i.ibb.co.com/4RcnqCh/profile.png", // Replace with actual image URL
        feedback:
          "আমাদেরই দেশে বাড়ি বুক করতে পেরেছি নির্দিষ্ট সময়ের মধ্যেই গাড়ি চলে আসে।",
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
        <h2 className="text-2xl font-bold text-gray-800">গ্রাহকের অভিজ্ঞতা</h2>
        <p className="text-gray-600 mb-8">আমরা সর্বদাই আমাদের গ্রাহকের বাড়ি ভাড়ার অভিজ্ঞতা জানতে আগ্রহী</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
  
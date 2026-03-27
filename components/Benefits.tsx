export default function Benefits() {
  const benefits = [
    {
      title: "Access to Top Psychiatric Professional",
      description:
        "Dr. Kardong is a leader in the provision of psychiatric services for doctors-in-training. She is Stanford Adjunct Clinical Associate Professor in Psychiatry and Behavioral Sciences.",
    },
    {
      title: "30 Years of Experience",
      description:
        "Dr. Kardong has been teaching and supervising house staff for 30 years. She understands the tremendous stress inherent in medical training and practice.",
    },
    {
      title: "Convenient & Time Saving",
      description:
        "Dr. Kardong makes scheduling easy for busy medical trainees with ever-changing schedules. Dr. Kardong makes herself readily available to house staff making access to expert psychiatric services fast and easy.",
    },
    {
      title: "HIPAA Protected",
      description:
        "Dr. Kardong's virtual mental health sessions for house staff are HIPAA protected, private and secure.",
    },
    {
      title: "Client Comfort",
      description:
        "With HIPAA compliant virtual sessions, medical trainees can receive the help they need in the comfort of their home, office, training site or wherever they have internet access.",
    },
    {
      title: "Cost Effective",
      description:
        "With HIPAA compliant virtual services, the cost of mental health care for house staff can be significantly reduced.",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Benefits of Virtual Mental Health Services For House Staff
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import Image from "next/image"

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">About Gloria M Kardong MD DFAPA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src="https://github.com/zachmillertech/virtual-house-staff/blob/cae05fca15f025f9958c7180812724b3198261fa/dr-kardong.jpg" alt="Dr. Gloria M Kardong" width={400} height={400} className="rounded-lg" />
          </div>
          <div>
            <p className="text-lg mb-4">
              Dr. Kardong is Adjunct Clinical Associate Professor of Psychiatry and Behavioral Sciences at Stanford
              University Medical Center. She is a Distinguished Fellow of the American Psychiatric Association. She has
              been treating Silicon Valley professionals for decades.
            </p>
            <p className="text-lg mb-4">
              She has 30 years of experience teaching, supervising and caring for medical students, interns, residents,
              fellows and faculty.
            </p>
            <p className="text-lg">
              She understands the tremendous stress inherent in medical training and practice. Trainees have
              traditionally suffered in silence due to the stigma and/or scheduling difficulties involved in seeking
              psychiatric care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


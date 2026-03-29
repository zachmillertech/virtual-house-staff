import Image from "next/image"
import Link from "next/link"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">About Gloria M Kardong MD DLFAPA</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="https://github.com/zachmillertech/virtual-house-staff/blob/main/about-1.jpg?raw=true"
              alt="Dr. Kardong"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="mb-4">
              Dr. Kardong is Adjunct Clinical Associate Professor of Psychiatry and Behavioral Sciences at Stanford
              University Medical Center. She is a Distinguished Life Fellow of the American Psychiatric Association. She
              has been treating Silicon Valley professionals for decades.
            </p>
            <p>
              She has 30 years of experience teaching, supervising and caring for medical students, interns, residents,
              fellows and faculty.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="mb-4">
              Dr. Kardong understands the very long and intense workload carried by trainees as well as the competing
              priorities they juggle. Virtual services make self-care more possible.
            </p>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Virtual Mental Health Services For House Staff</h2>
            <p>
              Trainees sometimes feel concerned about their privacy when accessing psychotherapy and/or
              psychopharmacology services onsite, including who they might see entering and exiting the office. You
              choose your own private and comfortable setting with virtual services.
            </p>
          </div>
          <div>
            <Image
              src="https://github.com/zachmillertech/virtual-forensic-psychiatrist/blob/main/about-2.jpg?raw=true"
              alt="Virtual mental health services"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="https://github.com/zachmillertech/virtual-forensic-psychiatrist/blob/main/about-3.jpg?raw=true"
              alt="Flexible scheduling"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="mb-4">
              No worries about leaving the hospital to get to a particular office at a specific time, which adds more
              stress to your already unpredictable schedule. However, if you prefer to see her in person, you are
              welcome to do so.
            </p>
            <p>
              Dr. Kardong believes that seeking appropriate mental health treatment during medical training has a
              preventive effect on developing later problems and establishes the precedent of seeking future care when
              needed.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <Link
            href="/credentials"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            CREDENTIALS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="https://github.com/zachmillertech/virtual-forensic-psychiatrist/blob/main/about-4.jpg?raw=true"
              alt="Dr. Kardong's office"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src="https://github.com/zachmillertech/virtual-forensic-psychiatrist/blob/main/about-5.jpg?raw=true"
              alt="Virtual consultation"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


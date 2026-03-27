import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Credentials() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-[10rem] py-8">
        <h1 className="text-center text-purple-600 mb-8">Education, Honors and Professional/Educational Activities</h1>

        <div className="mb-12">
          <h2 className="text-purple-600 mb-4">Positions and Honors</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-[#2831b8] block">ADJUNCT CLINICAL ASSOCIATE PROFESSOR,</strong>
              Stanford Department of Psychiatry and Behavioral Sciences
            </li>
            <li>
              <strong className="text-[#2831b8] block">ADJUNCT CLINICAL FACULTY SERVICE AWARD,</strong>
              20 and 25 years, Stanford Department of Psychiatry, 2010 and 2015
            </li>
            <li>
              <strong className="text-[#2831b8] block">DISTINGUISHED LIFE FELLOW,</strong>
              American Psychiatric Association, 2020-present
            </li>
            <li>
              <strong className="text-[#2831b8] block">DISTINGUISHED FELLOW,</strong>
              American Psychiatric Association, 2006-present
            </li>
            <li>
              <strong className="text-[#2831b8] block">HOUSESTAFF WELLBEING COMMITTEE,</strong>
              Stanford University School of Medicine, 2010-present
            </li>
            <li>
              <strong className="text-[#2831b8] block">PATIENTS' CHOICE AWARD,</strong>
              2011-present
            </li>
            <li>
              <strong className="text-[#2831b8] block">TOP DOCTORS IN SILICON VALLEY,</strong>
              San Jose Magazine, 2003–present
            </li>
            <li>
              <strong className="text-[#2831b8] block">MOST COMPASSIONATE DOCTOR,</strong>
              2013-present
            </li>
            <li>
              <strong className="text-[#2831b8] block">BOARD CERTIFIED,</strong>
              American Board of Psychiatry and Neurology, 1993-present
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-purple-600 mb-4">Employment</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-[#2831b8] block">PRIVATE PRACTICE OF PSYCHIATRY,</strong>
              1990–Present
            </li>
            <li>
              <strong className="text-[#2831b8] block">FORENSIC PSYCHIATRY,</strong>
              2009-present
            </li>
            <li>
              <strong className="text-[#2831b8] block">STANFORD UNIVERSITY SCHOOL OF LAW,</strong>
              Expert Consultant, 2009-present
            </li>
            <li>
              <strong className="text-[#2831b8] block">CALIFORNIA MEDICAL BOARD,</strong>
              Expert Examiner, 2010-present
            </li>
            <li>
              <strong className="text-[#2831b8] block">OAK CREEK HOSPITAL,</strong>
              San Jose, California, 1991 - Clinical Director, Women's Program
            </li>
            <li>
              <strong className="text-[#2831b8] block">PALO ALTO VETERANS ADMIN HOSPITAL,</strong>
              1990 - Medical Director/Ward Chief, Psychiatric ICU
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-purple-600 mb-4">Education</h2>
          <h3 className="text-xl font-semibold mb-2">Residency</h3>
          <p className="mb-4">
            <strong className="text-[#2831b8] block">
              STANFORD UNIVERSITY DEPARTMENT OF PSYCHIATRY AND BEHAVIORAL SCIENCES,
            </strong>
            1987–1990
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Chief Resident in Psychiatry</li>
            <li>Founder/Director, Infectious Disease/Psychiatry Liaison Clinic</li>
            <li>Resident Councilor, Northern California Psychiatric Society</li>
            <li>Residents' Committee, California Psychiatric Association</li>
            <li>Clinical Faculty Association Council</li>
            <li>Faculty Policy Committee</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Internship</h3>
          <p>
            <strong className="text-[#2831b8] block">SAN MATEO COUNTY GENERAL HOSPITAL,</strong>
            1986–1987
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Medical School</h3>
          <p className="mb-2">
            <strong className="text-[#2831b8] block">UNIVERSITY OF WASHINGTON,</strong>
            1981–1986
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>National Student Coordinator, American Medical Women's Association, 1983</li>
            <li>Coordinator, Impaired Physicians Conference, 1983</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">College</h3>
          <p className="mb-4">
            <strong className="text-[#2831b8] block">UNIVERSITY OF WASHINGTON</strong>
            B.A. with Honors in Zoology, 3-81
          </p>

          <p className="mt-4 mb-2">
            <strong className="text-[#2831b8] block">STANFORD UNIVERSITY</strong>
            Class of '78
            <br />
            Program in Human Biology
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-purple-600 mb-4">Hospital Affiliation</h2>
          <p>
            <strong className="text-[#2831b8] block">STANFORD UNIVERSITY MEDICAL CENTER,</strong>
            PALO ALTO
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-purple-600 mb-4">Professional Organizations</h2>
          <ul className="space-y-2">
            <li>American Medical Association</li>
            <li>California Medical Association</li>
            <li>American Psychiatric Association</li>
            <li>California Psychiatric Association</li>
            <li>Northern California Psychiatric Society</li>
            <li>Forensic Expert Witness Association</li>
            <li>American Telemedicine Association</li>
          </ul>
        </div>

        <p className="text-center text-lg font-semibold">FOR COMPLETE CURRICULUM VITAE, PLEASE CONTACT DR. KARDONG</p>
      </main>
      <Footer />
    </>
  )
}


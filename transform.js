const data = [
    {
        kode: "IF20101",
        nama: "Algorithm & Programming",
        sks: "4"
    },
    {
        kode: "IF20102",
        nama: "Data Structure",
        sks: "4"
    },
    {
        kode: "IF20103",
        nama: "Software Engineering 1",
        sks: "3"
    },
    {
        kode: "IF20104",
        nama: "Linear Algebra",
        sks: "2"
    },
    {
        kode: "IF20105",
        nama: "Computer Networks",
        sks: "3"
    },
    {
        kode: "EN20101",
        nama: "English 1: Reading & Writing",
        sks: "2"
    },
    {
        kode: "PA20101",
        nama: "Character Building: Pancasila & Kewarganegaraan",
        sks: "2"
    },
    {
        kode: "IF20201",
        nama: "Discrete Structure",
        sks: "4"
    },
    {
        kode: "IF20202",
        nama: "Software Engineering 2",
        sks: "3"
    },
    {
        kode: "IF20203",
        nama: "Object Oriented Programming",
        sks: "4"
    },
    {
        kode: "IF20204",
        nama: "Database Fundamental",
        sks: "3"
    },
    {
        kode: "EN20201",
        nama: "English 2: Conversation & Presentation",
        sks: "2"
    },
    {
        kode: "RE20201",
        nama: "Character Building: Religion 1",
        sks: "2"
    },
    {
        kode: "IF20301",
        nama: "Container System",
        sks: "3"
    },
    {
        kode: "IF20302",
        nama: "Web Programming, Design and Web Service",
        sks: "4"
    },
    {
        kode: "IF20303",
        nama: "Functional Programming",
        sks: "4"
    },
    {
        kode: "IF20304",
        nama: "Database Implementation SQL & NoSQL",
        sks: "3"
    },
    {
        kode: "IF20305",
        nama: "Computer Protocol",
        sks: "3"
    },
    {
        kode: "RE20301",
        nama: "Character Building: Religion 2",
        sks: "2"
    },
    {
        kode: "ID20301",
        nama: "Indonesian",
        sks: "2"
    },
    {
        kode: "IF20401",
        nama: "Machine Learning",
        sks: "3"
    },
    {
        kode: "IF20402",
        nama: "Artificial Intelligence",
        sks: "3"
    },
    {
        kode: "IF20403",
        nama: "Distributed Computing",
        sks: "3"
    },
    {
        kode: "IF20404",
        nama: "Application Programming Interface (API)",
        sks: "3"
    },
    {
        kode: "IF20405",
        nama: "Mobile Programming",
        sks: "3"
    },
    {
        kode: "IF20406",
        nama: "Network Security",
        sks: "3"
    },
    {
        kode: "ET20401",
        nama: "Entrepreneurship 1",
        sks: "2"
    },
    {
        kode: "IF20501",
        nama: "Research Methods",
        sks: "2"
    },
    {
        kode: "IF20511",
        nama: "Cryptography*",
        sks: "3"
    },
    {
        kode: "IF20512",
        nama: "Security Fundamental*",
        sks: "4"
    },
    {
        kode: "IF20514",
        nama: "Mobile & Cloud Security*",
        sks: "3"
    },
    {
        kode: "IF20515",
        nama: "Penetration Testing*",
        sks: "3"
    },
    {
        kode: "IF20516",
        nama: "Incident Response & Digital Forensic*",
        sks: "4"
    },
    {
        kode: "IF20521",
        nama: "Natural Language Processing (NLP)*",
        sks: "2"
    },
    {
        kode: "IF20522",
        nama: "Image Processing*",
        sks: "2"
    },
    {
        kode: "IF20523",
        nama: "IoT Concept & Microcontroller*",
        sks: "3"
    },
    {
        kode: "IF20525",
        nama: "Adhoc Networks*",
        sks: "3"
    },
    {
        kode: "IF20526",
        nama: "Data Science*",
        sks: "2"
    },
    {
        kode: "IF20527",
        nama: "Electronic Circuit*",
        sks: "3"
    },
    {
        kode: "IF20528",
        nama: "Augmented Reality*",
        sks: "2"
    },
    {
        kode: "IF20661",
        nama: "Internship*",
        sks: "20"
    },
    {
        kode: "IF20662",
        nama: "Entrepreneurship*",
        sks: "20"
    },
    {
        kode: "IF20663",
        nama: "Research*",
        sks: "20"
    },
    {
        kode: "KM20611",
        nama: "Design and Implementation of System",
        sks: "3"
    },
    {
        kode: "KM20612",
        nama: "Data Model Abstraction",
        sks: "3"
    },
    {
        kode: "KM20613",
        nama: "Data Analysis",
        sks: "2"
    },
    {
        kode: "KM20614",
        nama: "System Integration",
        sks: "2"
    },
    {
        kode: "KM20615",
        nama: "System Testing",
        sks: "2"
    },
    {
        kode: "KM20616",
        nama: "Platform Preparation and Deployment",
        sks: "2"
    },
    {
        kode: "KM20617",
        nama: "Project Management",
        sks: "2"
    },
    {
        kode: "KM20618",
        nama: "Creative Marketing",
        sks: "2"
    },
    {
        kode: "KM20619",
        nama: "Digital Asset Management",
        sks: "2"
    },
    {
        kode: "KM20621",
        nama: "Design and Planning Business",
        sks: "3"
    },
    {
        kode: "KM20622",
        nama: "Business Implementation",
        sks: "4"
    },
    {
        kode: "KM20623",
        nama: "Developing Business Plan",
        sks: "4"
    },
    {
        kode: "KM20624",
        nama: "Business Report",
        sks: "3"
    },
    {
        kode: "KM20625",
        nama: "Project Management",
        sks: "2"
    },
    {
        kode: "KM20626",
        nama: "Creative Marketing",
        sks: "2"
    },
    {
        kode: "KM20627",
        nama: "Digital Asset Management",
        sks: "2"
    },
    {
        kode: "KM20631",
        nama: "Research planning and Design",
        sks: "4"
    },
    {
        kode: "KM20632",
        nama: "Experiment",
        sks: "4"
    },
    {
        kode: "KM20633",
        nama: "Data Analysis",
        sks: "4"
    },
    {
        kode: "KM20634",
        nama: "Technical Report Writing",
        sks: "4"
    },
    {
        kode: "KM20635",
        nama: "Project Management",
        sks: "2"
    },
    {
        kode: "KM20636",
        nama: "Research Ethic",
        sks: "2"
    },
]

const newData = data.map(matkul => {
    const isMandatory = matkul.nama.includes('*')
    // console.log(matkul.kode + matkul.kode.charAt(5)) 
    const semester = matkul.kode.charAt(4)
    return {
        ...matkul,
        wajib: isMandatory,
        semester
    }
})

module.exports = data
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5001/api';

export async function apiRequest(path, { method = 'GET', token, body } = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }
  return data;
}

export const serviceOptions = [
  ['electronicPassports', 'Passport application'],
  ['waterBills', 'Water bill payment'],
  ['electricityBills', 'Electricity bill payment'],
  ['taxDeclarations', 'Tax declaration'],
  ['healthAppointments', 'Health appointment'],
  ['complaints', 'Citizen complaint'],
  ['documentRequests', 'Civil document request'],
  ['vehicleRegistrations', 'Vehicle registration'],
  ['propertyPayments', 'Property tax payment'],
  ['educationApplications', 'Scholarship application'],
  ['policeReports', 'Police report'],
  ['familyCertificates', 'Family certificate'],
  ['donations', 'Donation'],
  ['citizens', 'Citizen profile']
];

export const serviceCatalog = {
  electronicPassports: {
    title: 'Passport application',
    description: 'Submit a passport request with appointment location and personal data.',
    fee: 25,
    referencePrefix: 'PASS',
    fields: [
      ['fullName', 'Full name'],
      ['personalNumber', 'Personal number'],
      ['birthDate', 'Birth date', 'date'],
      ['municipality', 'Municipality'],
      ['appointmentDate', 'Appointment date', 'date'],
      ['phone', 'Phone number']
    ]
  },
  waterBills: {
    title: 'Water bill payment',
    description: 'Pay a KRU water bill using consumer number and billing period.',
    fee: 18,
    referencePrefix: 'KRU',
    fields: [
      ['consumerNumber', 'Consumer number'],
      ['customerName', 'Customer name'],
      ['billingMonth', 'Billing month'],
      ['address', 'Service address'],
      ['paymentMethod', 'Payment method']
    ]
  },
  electricityBills: {
    title: 'Electricity bill payment',
    description: 'Register a KESCO electricity payment for a household or business.',
    fee: 42,
    referencePrefix: 'KESCO',
    fields: [
      ['meterNumber', 'Meter number'],
      ['customerName', 'Customer name'],
      ['billingMonth', 'Billing month'],
      ['tariff', 'Tariff group'],
      ['paymentMethod', 'Payment method']
    ]
  },
  taxDeclarations: {
    title: 'Tax declaration',
    description: 'Submit a personal or business tax declaration request.',
    fee: 0,
    referencePrefix: 'TAX',
    fields: [
      ['taxpayerName', 'Taxpayer name'],
      ['fiscalNumber', 'Fiscal number'],
      ['period', 'Declaration period'],
      ['declaredIncome', 'Declared income', 'number'],
      ['category', 'Tax category']
    ]
  },
  healthAppointments: {
    title: 'Health appointment',
    description: 'Book a health appointment with clinic and preferred date.',
    fee: 0,
    referencePrefix: 'HLTH',
    fields: [
      ['patientName', 'Patient name'],
      ['personalNumber', 'Personal number'],
      ['clinic', 'Clinic'],
      ['doctor', 'Doctor'],
      ['appointmentDate', 'Appointment date', 'date'],
      ['reason', 'Reason']
    ]
  },
  complaints: {
    title: 'Citizen complaint',
    description: 'Open a complaint case for municipal or public service issues.',
    fee: 0,
    referencePrefix: 'CMP',
    fields: [
      ['citizenName', 'Citizen name'],
      ['category', 'Complaint category'],
      ['location', 'Location'],
      ['description', 'Description'],
      ['urgency', 'Urgency']
    ]
  },
  documentRequests: {
    title: 'Civil document request',
    description: 'Request official civil documents such as extract or certificate.',
    fee: 2,
    referencePrefix: 'DOC',
    fields: [
      ['applicantName', 'Applicant name'],
      ['personalNumber', 'Personal number'],
      ['documentType', 'Document type'],
      ['deliveryMethod', 'Delivery method'],
      ['purpose', 'Purpose']
    ]
  },
  vehicleRegistrations: {
    title: 'Vehicle registration',
    description: 'Register a vehicle renewal or new vehicle application.',
    fee: 35,
    referencePrefix: 'AUTO',
    fields: [
      ['ownerName', 'Owner name'],
      ['plateNumber', 'Plate number'],
      ['vin', 'VIN'],
      ['vehicleType', 'Vehicle type'],
      ['inspectionDate', 'Inspection date', 'date']
    ]
  },
  propertyPayments: {
    title: 'Property tax payment',
    description: 'Register a property tax payment by parcel and owner.',
    fee: 30,
    referencePrefix: 'PROP',
    fields: [
      ['ownerName', 'Owner name'],
      ['parcelNumber', 'Parcel number'],
      ['municipality', 'Municipality'],
      ['fiscalYear', 'Fiscal year'],
      ['paymentMethod', 'Payment method']
    ]
  },
  educationApplications: {
    title: 'Scholarship application',
    description: 'Apply for education grants or scholarship support.',
    fee: 0,
    referencePrefix: 'EDU',
    fields: [
      ['studentName', 'Student name'],
      ['personalNumber', 'Personal number'],
      ['institution', 'Institution'],
      ['studyLevel', 'Study level'],
      ['averageGrade', 'Average grade', 'number']
    ]
  },
  policeReports: {
    title: 'Police report',
    description: 'Submit a police report request for documentation or follow-up.',
    fee: 0,
    referencePrefix: 'POL',
    fields: [
      ['reporterName', 'Reporter name'],
      ['incidentType', 'Incident type'],
      ['incidentDate', 'Incident date', 'date'],
      ['location', 'Location'],
      ['description', 'Description']
    ]
  },
  familyCertificates: {
    title: 'Family certificate',
    description: 'Request a family certificate for official use.',
    fee: 3,
    referencePrefix: 'FAM',
    fields: [
      ['applicantName', 'Applicant name'],
      ['personalNumber', 'Personal number'],
      ['familyHead', 'Family head'],
      ['purpose', 'Purpose'],
      ['deliveryMethod', 'Delivery method']
    ]
  },
  donations: {
    title: 'Donation',
    description: 'Register a donation for a public fund or initiative.',
    fee: 10,
    referencePrefix: 'DON',
    fields: [
      ['donorName', 'Donor name'],
      ['fund', 'Fund'],
      ['message', 'Message'],
      ['paymentMethod', 'Payment method']
    ]
  },
  citizens: {
    title: 'Citizen profile',
    description: 'Create a citizen profile record for service processing.',
    fee: 0,
    referencePrefix: 'CIT',
    fields: [
      ['fullName', 'Full name'],
      ['personalNumber', 'Personal number'],
      ['email', 'Email'],
      ['phone', 'Phone'],
      ['municipality', 'Municipality']
    ]
  }
};

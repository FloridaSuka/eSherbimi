const serviceDefinitions = [
  { key: 'citizens', tableName: 'citizens', publicName: 'Citizen' },
  { key: 'addresses', tableName: 'addresses', publicName: 'Address' },
  { key: 'documentRequests', tableName: 'document_requests', publicName: 'DocumentRequest' },
  { key: 'electronicPassports', tableName: 'electronic_passports', publicName: 'ElectronicPassport' },
  { key: 'familyCertificates', tableName: 'family_certificates', publicName: 'FamilyCertificate' },
  { key: 'healthAppointments', tableName: 'health_appointments', publicName: 'HealthAppointment' },
  { key: 'familyDoctorSelections', tableName: 'family_doctor_selections', publicName: 'FamilyDoctorSelection' },
  { key: 'educationApplications', tableName: 'education_applications', publicName: 'EducationApplication' },
  { key: 'projectApplications', tableName: 'project_applications', publicName: 'ProjectApplication' },
  { key: 'vehicleRegistrations', tableName: 'vehicle_registrations', publicName: 'VehicleRegistration' },
  { key: 'vehicleInspections', tableName: 'vehicle_inspections', publicName: 'VehicleInspection' },
  { key: 'policeReports', tableName: 'police_reports', publicName: 'PoliceReport' },
  { key: 'courtConfirmations', tableName: 'court_confirmations', publicName: 'CourtConfirmation' },
  { key: 'propertyPayments', tableName: 'property_payments', publicName: 'PropertyPayment' },
  { key: 'waterBills', tableName: 'water_bills', publicName: 'WaterBill' },
  { key: 'electricityBills', tableName: 'electricity_bills', publicName: 'ElectricityBill' },
  { key: 'taxDeclarations', tableName: 'tax_declarations', publicName: 'TaxDeclaration' },
  { key: 'donations', tableName: 'donations', publicName: 'Donation' },
  { key: 'consularStamps', tableName: 'consular_stamps', publicName: 'ConsularStamp' },
  { key: 'auditRequests', tableName: 'audit_requests', publicName: 'AuditRequest' },
  { key: 'complaints', tableName: 'complaints', publicName: 'Complaint' },
  { key: 'notifications', tableName: 'notifications', publicName: 'Notification' }
];

module.exports = { serviceDefinitions };

export type Language = 'en' | 'hi' | 'as' | 'bn' | 'ne' | 'mzo' | 'mni' | 'kha' | 'grt';

export interface LanguageMeta {
  code: Language;
  name: string;
  nativeName: string;
}

export const supportedLanguages: LanguageMeta[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
  { code: 'mzo', name: 'Mizo', nativeName: 'Mizo / ṭawng' },
  { code: 'mni', name: 'Manipuri / Meitei', nativeName: 'মণিপুরী' },
  { code: 'kha', name: 'Khasi', nativeName: 'Ka Ktien Khasi' },
  { code: 'grt', name: 'Garo', nativeName: 'A·chik' },
];

export interface TranslationDictionary {
  govIndia: string;
  motaFull: string;
  appTitle: string;
  appSubtitle: string;
  sihBadge: string;
  portalTagline: string;
  singleScholarshipRuleNotice: string;

  login: string;
  logout: string;
  demoLogin: string;
  createAccount: string;
  studentRole: string;
  officerRole: string;
  adminRole: string;
  welcomeBack: string;

  navDashboard: string;
  navSchemes: string;
  navEligibility: string;
  navMyApplications: string;
  navDocumentWallet: string;
  navPayments: string;
  navNotifications: string;
  navAskJago: string;
  navOutreach: string;
  navOfficerReview: string;
  navSystemMetrics: string;

  profileCompletion: string;
  stStatusVerified: string;
  pvtgIdentified: string;
  eligibleSchemesCount: string;
  activeApplicationTitle: string;
  noActiveApplication: string;
  viewDetails: string;
  quickActions: string;
  applyNow: string;
  trackStatus: string;
  recentNotifications: string;
  markAllRead: string;

  statusDraft: string;
  statusSubmitted: string;
  statusUnderVerification: string;
  statusDeficiency: string;
  statusResubmitted: string;
  statusVerified: string;
  statusApproved: string;
  statusSanctioned: string;
  statusDisbursed: string;
  statusRejected: string;

  eligibilityTitle: string;
  eligibilitySubtitle: string;
  evaluatingProfile: string;
  eligibleLabel: string;
  notEligibleLabel: string;
  needsVerificationLabel: string;
  matchedCriteria: string;
  failedCriteria: string;
  documentsRequired: string;
  maxIncomeLimit: string;
  applyForThisScheme: string;
  alreadyAppliedAnother: string;

  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  step6: string;
  step7: string;
  step8: string;
  step9: string;

  saveDraft: string;
  saving: string;
  previousStep: string;
  nextStep: string;
  submitApplication: string;
  submitting: string;
  appIdGenerated: string;
  reuseFromWallet: string;
  uploadNewFile: string;
  confirmSubmission: string;

  walletTitle: string;
  walletSubtitle: string;
  uploadDocument: string;
  docType: string;
  selectFile: string;
  dragDropText: string;
  documentName: string;
  uploadDate: string;
  fileSize: string;
  actions: string;
  preview: string;
  delete: string;
  noDocsInWallet: string;

  trackingTitle: string;
  timelineStage1: string;
  timelineStage2: string;
  timelineStage3: string;
  timelineStage4: string;
  timelineStage5: string;
  timelineStage6: string;
  timelineStage7: string;
  timelineStage8: string;
  statusHistoryTitle: string;

  deficiencyBannerTitle: string;
  deficiencyReason: string;
  requiredAction: string;
  deadline: string;
  resolveDeficiencyNow: string;
  uploadCorrectedDoc: string;
  resolutionNotes: string;
  resubmitApp: string;

  paymentTitle: string;
  paymentSubtitle: string;
  sanctionId: string;
  sanctionAmount: string;
  paymentStatus: string;
  transactionRef: string;
  dbtBatch: string;
  disbursementDate: string;
  bankAccount: string;

  jagoTitle: string;
  jagoSubtitle: string;
  jagoPlaceholder: string;
  jagoSuggestions: string[];

  officerTitle: string;
  officerSubtitle: string;
  totalApplications: string;
  pendingVerification: string;
  deficienciesOpen: string;
  approvedSanctioned: string;
  disbursedCount: string;
  manualReviewRequired: string;
  searchApplications: string;
  filterByScheme: string;
  filterByStatus: string;
  reviewAction: string;
  verifyAction: string;
  approveAction: string;
  rejectAction: string;
  raiseDeficiency: string;
  issueSanction: string;
  disburseDBT: string;

  adminTitle: string;
  adminSubtitle: string;
  analyticsOverview: string;
  mockIntegrationsHealth: string;
  outreachTitle: string;
  outreachSubtitle: string;
  candidateName: string;
  sourceDatabase: string;
  location: string;
  courseInst: string;
  matchConfidence: string;
  suggestedScheme: string;
  outreachAction: string;
  sendSmsAlert: string;

  loading: string;
  close: string;
  cancel: string;
  save: string;
  search: string;
  filter: string;
  all: string;
  demoBadge: string;
  mockNotice: string;
  offlineNotice: string;
  onlineNotice: string;
}

const en: TranslationDictionary = {
  govIndia: 'GOVERNMENT OF INDIA',
  motaFull: 'MINISTRY OF TRIBAL AFFAIRS',
  appTitle: 'TRIBAL SCHOLAR',
  appSubtitle: 'Unified Scholarship Platform for Tribal Students',
  sihBadge: 'Smart India Hackathon 2026 • PS ID: 26238',
  portalTagline: 'Empowering Scheduled Tribe & PVTG students through centralized digital access to all MoTA scholarship and fellowship schemes',
  singleScholarshipRuleNotice: 'MoTA Guideline: One Student Can Avail Only One Scholarship Scheme at a Time.',

  login: 'Login',
  logout: 'Logout',
  demoLogin: 'Demo Login',
  createAccount: 'Create Account',
  studentRole: 'Student',
  officerRole: 'Verification Officer',
  adminRole: 'MoTA Admin',
  welcomeBack: 'Welcome back',

  navDashboard: 'Dashboard',
  navSchemes: 'Scholarship Schemes',
  navEligibility: 'Check Eligibility',
  navMyApplications: 'My Applications',
  navDocumentWallet: 'Document Wallet',
  navPayments: 'DBT Payments',
  navNotifications: 'Notifications',
  navAskJago: 'Ask JAGO',
  navOutreach: 'Outreach & Identification',
  navOfficerReview: 'Officer Verification',
  navSystemMetrics: 'System Statistics',

  profileCompletion: 'Profile Completion',
  stStatusVerified: 'ST Status: Verified',
  pvtgIdentified: 'PVTG (Particularly Vulnerable Tribal Group)',
  eligibleSchemesCount: 'Eligible Schemes',
  activeApplicationTitle: 'Current Scholarship Application',
  noActiveApplication: 'No active application submitted yet. Check eligibility to apply.',
  viewDetails: 'View Details',
  quickActions: 'Quick Actions',
  applyNow: 'Apply for Scholarship',
  trackStatus: 'Track Status',
  recentNotifications: 'Recent Notifications',
  markAllRead: 'Mark all as read',

  statusDraft: 'Draft',
  statusSubmitted: 'Submitted',
  statusUnderVerification: 'Under Verification',
  statusDeficiency: 'Action Required (Deficiency)',
  statusResubmitted: 'Resubmitted',
  statusVerified: 'Verified',
  statusApproved: 'Approved',
  statusSanctioned: 'Sanctioned',
  statusDisbursed: 'Disbursed (DBT)',
  statusRejected: 'Rejected',

  eligibilityTitle: 'MoTA Rule-Based Eligibility Engine',
  eligibilitySubtitle: 'Automated evaluation according to Ministry of Tribal Affairs guidelines for ST students',
  evaluatingProfile: 'Evaluating your profile against all 5 Central ST Schemes...',
  eligibleLabel: 'Eligible',
  notEligibleLabel: 'Not Eligible',
  needsVerificationLabel: 'Needs Verification',
  matchedCriteria: 'Criteria Matched',
  failedCriteria: 'Ineligible Condition(s)',
  documentsRequired: 'Documents Required to Apply',
  maxIncomeLimit: 'Annual Family Income Limit',
  applyForThisScheme: 'Apply for this Scheme',
  alreadyAppliedAnother: 'Cannot apply: You already hold an active application in another scheme.',

  step1: 'Personal Details',
  step2: 'Academic Details',
  step3: 'Family & Income',
  step4: 'Bank Details',
  step5: 'Scheme Eligibility',
  step6: 'Documents',
  step7: 'Digital Verification',
  step8: 'Declaration',
  step9: 'Submission',

  saveDraft: 'Save Draft',
  saving: 'Saving...',
  previousStep: 'Previous',
  nextStep: 'Next Step',
  submitApplication: 'Submit Final Application',
  submitting: 'Submitting...',
  appIdGenerated: 'Generated Application ID',
  reuseFromWallet: 'Reuse from Document Wallet',
  uploadNewFile: 'Upload New File',
  confirmSubmission: 'I declare that the information provided is true and I am not availing any other scholarship scheme concurrently.',

  walletTitle: 'Digital Document Wallet',
  walletSubtitle: 'Upload once, reuse across applications. Direct integration with DigiLocker.',
  uploadDocument: 'Upload Document',
  docType: 'Document Type',
  selectFile: 'Select File',
  dragDropText: 'Drag and drop file here, or click to browse (PDF, PNG, JPG up to 10MB)',
  documentName: 'Document Name',
  uploadDate: 'Upload Date',
  fileSize: 'Size',
  actions: 'Actions',
  preview: 'Preview',
  delete: 'Delete',
  noDocsInWallet: 'No documents in wallet yet. Upload your ST Certificate, Income Proof, and Bonafide.',

  trackingTitle: 'Application Status Timeline',
  timelineStage1: 'Application Submitted',
  timelineStage2: 'Automated Registry Verification',
  timelineStage3: 'Document Verification',
  timelineStage4: 'Institution Verification',
  timelineStage5: 'Department Officer Verification',
  timelineStage6: 'Sanction Order Issued',
  timelineStage7: 'PFMS DBT Processing',
  timelineStage8: 'Disbursed to Bank Account',
  statusHistoryTitle: 'Detailed Status Audit Log',

  deficiencyBannerTitle: 'Attention: Deficiency Flagged by Verification Officer',
  deficiencyReason: 'Deficiency Reason',
  requiredAction: 'Required Action',
  deadline: 'Resolution Deadline',
  resolveDeficiencyNow: 'Resolve Deficiency & Resubmit',
  uploadCorrectedDoc: 'Upload Corrected Document',
  resolutionNotes: 'Explanation / Resolution Notes',
  resubmitApp: 'Resubmit Application for Re-verification',

  paymentTitle: 'Direct Benefit Transfer (DBT) Tracker',
  paymentSubtitle: 'MoTA scholarship funds transferred directly via PFMS into Aadhaar-seeded student bank account',
  sanctionId: 'Sanction Order No.',
  sanctionAmount: 'Sanctioned Amount',
  paymentStatus: 'DBT Status',
  transactionRef: 'PFMS Transaction Reference',
  dbtBatch: 'DBT Batch Number',
  disbursementDate: 'Disbursement Date',
  bankAccount: 'Bank Account',

  jagoTitle: 'JAGO - Scholarship Assistant',
  jagoSubtitle: 'Scholarship Assistance & Guidance Assistant • Connected to Live Database',
  jagoPlaceholder: 'Ask in English or Hindi (e.g., "What is my status?", "Why pending?")...',
  jagoSuggestions: ['What is my application status?', 'Why is my application pending?', 'Do I have any deficiency?', 'Which schemes am I eligible for?', 'What is the one-scholarship rule?'],

  officerTitle: 'Verification Officer Portal',
  officerSubtitle: 'District Welfare & State Verification Console • MoTA Scholarship Automation',
  totalApplications: 'Total Applications',
  pendingVerification: 'Pending Verification',
  deficienciesOpen: 'Open Deficiencies',
  approvedSanctioned: 'Approved & Sanctioned',
  disbursedCount: 'DBT Disbursed',
  manualReviewRequired: 'Manual Review Required',
  searchApplications: 'Search by student name, application ID, or ST cert...',
  filterByScheme: 'All Schemes',
  filterByStatus: 'All Statuses',
  reviewAction: 'Review',
  verifyAction: 'Verify',
  approveAction: 'Approve',
  rejectAction: 'Reject',
  raiseDeficiency: 'Raise Deficiency',
  issueSanction: 'Issue Sanction',
  disburseDBT: 'Disburse via Mock DBT',

  adminTitle: 'MoTA Central Administrative Console',
  adminSubtitle: 'National Dashboard, Scheme Analytics & Automated Outreach Engine',
  analyticsOverview: 'Scholarship Scheme Analytics',
  mockIntegrationsHealth: 'Mock Gov Integrations Health',
  outreachTitle: 'Smart Outreach & Identification Engine',
  outreachSubtitle: 'Identifying eligible ST/PVTG students not yet availing scholarships (UDISE+, APAAR & OTR Matching)',
  candidateName: 'Candidate',
  sourceDatabase: 'Source System',
  location: 'District, State',
  courseInst: 'Course & Institute',
  matchConfidence: 'Match Score',
  suggestedScheme: 'Suggested Scheme',
  outreachAction: 'Outreach Action',
  sendSmsAlert: 'Notify Student',

  loading: 'Loading...',
  close: 'Close',
  cancel: 'Cancel',
  save: 'Save',
  search: 'Search',
  filter: 'Filter',
  all: 'All',
  demoBadge: 'DEMO INTEGRATION',
  mockNotice: 'Demonstration simulation: Uses realistic structured responses mirroring live Government API standards.',
  offlineNotice: 'Offline Mode: Changes saved locally. Will synchronize once network restores.',
  onlineNotice: 'Online: Synchronized with MoTA central servers.'
};

const hi: TranslationDictionary = {
  govIndia: 'भारत सरकार',
  motaFull: 'जनजातीय कार्य मंत्रालय',
  appTitle: 'ट्राइबल स्कॉलर',
  appSubtitle: 'अनुसूचित जनजाति के छात्रों हेतु एकीकृत छात्रवृत्ति पोर्टल',
  sihBadge: 'स्मार्ट इंडिया हैकाथॉन 2026 • समस्या क्रमांक: 26238',
  portalTagline: 'जनजातीय कार्य मंत्रालय (MoTA) की सभी छात्रवृत्ति एवं फेलोशिप योजनाओं का केंद्रीकृत पारदर्शी डिजिटल मंच',
  singleScholarshipRuleNotice: 'मंत्रालय दिशानिर्देश: एक छात्र एक समय में केवल एक ही छात्रवृत्ति योजना का लाभ ले सकता है।',

  login: 'लॉग इन करें',
  logout: 'लॉग आउट',
  demoLogin: 'डेमो लॉगिन',
  createAccount: 'खाता बनाएं',
  studentRole: 'छात्र (Student)',
  officerRole: 'सत्यापन अधिकारी (Officer)',
  adminRole: 'मंत्रालय प्रशासक (Admin)',
  welcomeBack: 'स्वागत है',

  navDashboard: 'डैशबोर्ड',
  navSchemes: 'छात्रवृत्ति योजनाएं',
  navEligibility: 'पात्रता जांचें',
  navMyApplications: 'मेरे आवेदन',
  navDocumentWallet: 'दस्तावेज वॉलेट',
  navPayments: 'डीबीटी भुगतान',
  navNotifications: 'सूचनाएं',
  navAskJago: 'जागो (JAGO) से पूछें',
  navOutreach: 'पहचान एवं आउटरीच',
  navOfficerReview: 'अधिकारी सत्यापन',
  navSystemMetrics: 'सिस्टम सांख्यिकी',

  profileCompletion: 'प्रोफाइल पूर्णता',
  stStatusVerified: 'एसटी स्थिति: सत्यापित',
  pvtgIdentified: 'विशेष रूप से कमजोर जनजातीय समूह (PVTG)',
  eligibleSchemesCount: 'पात्र योजनाएं',
  activeApplicationTitle: 'वर्तमान सक्रिय आवेदन',
  noActiveApplication: 'वर्तमान में कोई सक्रिय आवेदन नहीं है। आवेदन हेतु पात्रता जांचें।',
  viewDetails: 'विवरण देखें',
  quickActions: 'त्वरित कार्य',
  applyNow: 'छात्रवृत्ति हेतु आवेदन करें',
  trackStatus: 'आवेदन स्थिति ट्रैक करें',
  recentNotifications: 'हाल की सूचनाएं',
  markAllRead: 'सभी को पढ़ा हुआ चिन्हित करें',

  statusDraft: 'प्रारूप (ड्राफ्ट)',
  statusSubmitted: 'जमा किया गया',
  statusUnderVerification: 'सत्यापन प्रक्रियाधीन',
  statusDeficiency: 'कार्रवाई आवश्यक (कमी/आपत्ति)',
  statusResubmitted: 'पुनः प्रस्तुत किया गया',
  statusVerified: 'सत्यापित',
  statusApproved: 'स्वीकृत',
  statusSanctioned: 'स्वीकृति आदेश जारी',
  statusDisbursed: 'डीबीटी भुगतान संपन्न',
  statusRejected: 'अस्वीकृत',

  eligibilityTitle: 'नियम-आधारित पात्रता गणना इंजन',
  eligibilitySubtitle: 'जनजातीय कार्य मंत्रालय के आधिकारिक नियमों अनुसार स्वचालित पात्रता निर्धारण',
  evaluatingProfile: 'सभी 5 केंद्रीय एसटी योजनाओं के नियमों से आपकी प्रोफाइल जांची जा रही है...',
  eligibleLabel: 'पात्र (Eligible)',
  notEligibleLabel: 'अपात्र (Not Eligible)',
  needsVerificationLabel: 'सत्यापन अपेक्षित',
  matchedCriteria: 'संतुष्ट शर्तें',
  failedCriteria: 'अपात्रता का कारण',
  documentsRequired: 'आवेदन हेतु आवश्यक दस्तावेज',
  maxIncomeLimit: 'अधिकतम पारिवारिक वार्षिक आय सीमा',
  applyForThisScheme: 'इस योजना में आवेदन करें',
  alreadyAppliedAnother: 'आवेदन संभव नहीं: आप पहले से अन्य योजना में सक्रिय आवेदन धारक हैं।',

  step1: 'व्यक्तिगत विवरण',
  step2: 'शैक्षणिक विवरण',
  step3: 'पारिवारिक एवं आय विवरण',
  step4: 'बैंक खाता विवरण',
  step5: 'योजना पात्रता',
  step6: 'दस्तावेज संलग्न',
  step7: 'डिजिटल सत्यापन',
  step8: 'स्व-घोषणा',
  step9: 'अंतिम प्रस्तुति',

  saveDraft: 'ड्राफ्ट सहेजें',
  saving: 'सहेजा जा रहा है...',
  previousStep: 'पिछला चरण',
  nextStep: 'अगला चरण',
  submitApplication: 'आवेदन अंतिम रूप से जमा करें',
  submitting: 'जमा किया जा रहा है...',
  appIdGenerated: 'उत्पन्न आवेदन संख्या',
  reuseFromWallet: 'डॉक्यूमेंट वॉलेट से पुनः उपयोग करें',
  uploadNewFile: 'नया दस्तावेज अपलोड करें',
  confirmSubmission: 'मैं प्रमाणित करता हूँ कि दी गई जानकारी पूर्णतः सत्य है तथा मैं एक साथ अन्य किसी छात्रवृत्ति का लाभ नहीं ले रहा हूँ।',

  walletTitle: 'डिजिटल दस्तावेज वॉलेट',
  walletSubtitle: 'एक बार अपलोड करें, भविष्य के सभी आवेदनों में पुनः उपयोग करें। डिजिलॉकर से सुसज्जित।',
  uploadDocument: 'दस्तावेज अपलोड करें',
  docType: 'दस्तावेज का प्रकार',
  selectFile: 'फ़ाइल चुनें',
  dragDropText: 'फ़ाइल यहाँ खींचें और छोड़ें या ब्राउज़ करें (PDF, PNG, JPG अधिकतम 10MB)',
  documentName: 'दस्तावेज का नाम',
  uploadDate: 'अपलोड तिथि',
  fileSize: 'आकार',
  actions: 'कार्रवाई',
  preview: 'देखें (Preview)',
  delete: 'हटाएं',
  noDocsInWallet: 'वॉलेट में अभी कोई दस्तावेज नहीं हैं। अपना जाति, आय व बोनाफाइड अपलोड करें।',

  trackingTitle: 'आवेदन प्रगति समय-रेखा (Tracking)',
  timelineStage1: 'आवेदन जमा हुआ',
  timelineStage2: 'स्वचालित रजिस्ट्री सत्यापन',
  timelineStage3: 'दस्तावेज सत्यापन',
  timelineStage4: 'संस्थान स्तर पर सत्यापन',
  timelineStage5: 'विभागीय अधिकारी सत्यापन',
  timelineStage6: 'स्वीकृति आदेश (Sanction Order)',
  timelineStage7: 'पीएफएमएस डीबीटी प्रक्रिया',
  timelineStage8: 'बैंक खाते में राशि अंतरित',
  statusHistoryTitle: 'विस्तृत ऑडिट एवं स्थिति इतिहास',

  deficiencyBannerTitle: 'सावधान: सत्यापन अधिकारी द्वारा आवेदन में कमी दर्ज की गई है',
  deficiencyReason: 'कमी का कारण',
  requiredAction: 'अपेक्षित सुधारात्मक कार्रवाई',
  deadline: 'निवारण की अंतिम तिथि',
  resolveDeficiencyNow: 'कमी दूर करें एवं पुनः जमा करें',
  uploadCorrectedDoc: 'संशोधित दस्तावेज अपलोड करें',
  resolutionNotes: 'छात्र स्पष्टीकरण / टिप्पणी',
  resubmitApp: 'पुनः सत्यापन हेतु आवेदन जमा करें',

  paymentTitle: 'प्रत्यक्ष लाभ अंतरण (DBT) ट्रैकर',
  paymentSubtitle: 'पीएफएमएस के माध्यम से छात्रवृत्ति राशि सीधे विद्यार्थी के आधार लिंक बैंक खाते में',
  sanctionId: 'स्वीकृति आदेश संख्या',
  sanctionAmount: 'स्वीकृत राशि',
  paymentStatus: 'डीबीटी स्थिति',
  transactionRef: 'लेनदेन संदर्भ संख्या (PFMS Txn Ref)',
  dbtBatch: 'डीबीटी बैच संख्या',
  disbursementDate: 'भुगतान तिथि',
  bankAccount: 'बैंक खाता',

  jagoTitle: 'जागो (JAGO) - छात्रवृत्ति सहायक',
  jagoSubtitle: 'छात्रवृत्ति मार्गदर्शन साथी • लाइव डेटाबेस से सीधे जुड़ा हुआ',
  jagoPlaceholder: 'हिंदी या अंग्रेजी में पूछें (जैसे: "मेरे आवेदन की क्या स्थिति है?")...',
  jagoSuggestions: ['मेरे आवेदन की स्थिति क्या है?', 'मेरा आवेदन लंबित क्यों है?', 'क्या मेरे आवेदन में कोई कमी है?', 'मैं किस छात्रवृत्ति के लिए पात्र हूँ?', 'एक छात्रवृत्ति का क्या नियम है?'],

  officerTitle: 'सत्यापन अधिकारी पोर्टल',
  officerSubtitle: 'जिला कल्याण एवं राज्य सत्यापन कंसोल • छात्रवृत्ति स्वचालन',
  totalApplications: 'कुल आवेदन',
  pendingVerification: 'सत्यापन प्रतीक्षित',
  deficienciesOpen: 'खुली आपत्तियां (Deficiencies)',
  approvedSanctioned: 'स्वीकृत व आवंटित',
  disbursedCount: 'डीबीटी भुगतान संपन्न',
  manualReviewRequired: 'मैनुअल समीक्षा अपेक्षित',
  searchApplications: 'छात्र नाम, आवेदन संख्या अथवा जाति प्रमाण पत्र से खोजें...',
  filterByScheme: 'सभी योजनाएं',
  filterByStatus: 'सभी स्थितियां',
  reviewAction: 'समीक्षा',
  verifyAction: 'सत्यापित करें',
  approveAction: 'स्वीकृत करें',
  rejectAction: 'अस्वीकृत करें',
  raiseDeficiency: 'कमी/आपत्ति दर्ज करें',
  issueSanction: 'स्वीकृति आदेश जारी करें',
  disburseDBT: 'मॉक डीबीटी भुगतान करें',

  adminTitle: 'जनजातीय कार्य मंत्रालय केंद्रीय प्रशासनिक कंसोल',
  adminSubtitle: 'राष्ट्रीय डैशबोर्ड, योजना सांख्यिकी एवं स्वचालित आउटरीच प्रणाली',
  analyticsOverview: 'छात्रवृत्ति योजना विश्लेषण',
  mockIntegrationsHealth: 'सरकारी डिजिटल एकीकरण स्थिति',
  outreachTitle: 'स्मार्ट आउटरीच एवं छात्र पहचान इंजन',
  outreachSubtitle: 'यूडीआईएसई+, अपार एवं ओटीआर से संभावित वंचित एसटी/पीवीटीजी विद्यार्थियों की पहचान',
  candidateName: 'विद्यार्थी का नाम',
  sourceDatabase: 'स्रोत डेटाबेस',
  location: 'जिला, राज्य',
  courseInst: 'कक्षा एवं संस्थान',
  matchConfidence: 'मिलान स्कोर',
  suggestedScheme: 'सुझाई गई योजना',
  outreachAction: 'संपर्क कार्रवाई',
  sendSmsAlert: 'एसएमएस सूचना भेजें',

  loading: 'लोड हो रहा है...',
  close: 'बंद करें',
  cancel: 'रद्द करें',
  save: 'सहेजें',
  search: 'खोजें',
  filter: 'फ़िल्टर',
  all: 'सभी',
  demoBadge: 'डेमो एकीकरण',
  mockNotice: 'डेमो सिमुलेशन: वास्तविक सरकारी एपीआई मानकों के अनुरूप संरचित प्रतिक्रियाएं।',
  offlineNotice: 'ऑफ़लाइन मोड: परिवर्तन स्थानीय रूप से सहेजे गए हैं। नेटवर्क जुड़ते ही सिंक होंगे।',
  onlineNotice: 'ऑनलाइन: केंद्रीय सर्वर से पूर्णतः सिंक्रोनाइज़्ड।'
};

const as: TranslationDictionary = {
  ...hi,
  govIndia: 'ভাৰত চৰকাৰ',
  motaFull: 'জনজাতীয় পৰিক্ৰমা মন্ত্ৰালয়',
  appTitle: 'ট্ৰাইবেল স্কলাৰ',
  appSubtitle: 'জনজাতীয় শিক্ষাৰ্থীসকলৰ বাবে একীকৃত জলপানি পৰ্টেল',
  portalTagline: 'জনজাতীয় পৰিক্ৰমা মন্ত্ৰালয়ৰ (MoTA) সকলো জলপানি আৰু ফেল’শ্বিপ আঁচনিৰ কেন্দ্ৰীভূত ডিজিটেল মঞ্চ',
  singleScholarshipRuleNotice: 'মন্ত্ৰালয়ৰ নিৰ্দেশনা: এজন শিক্ষাৰ্থীয়ে একে সময়তে কেৱল এখনহে জলপানি আঁচনিৰ সুবিধা ল’ব পাৰে।',
  login: 'লগ ইন কৰক',
  logout: 'লগ আউট',
  demoLogin: 'ডেমো লগইন',
  createAccount: 'নতুন একাউণ্ট খোলক',
  studentRole: 'শিক্ষাৰ্থী (Student)',
  officerRole: 'পৰীক্ষণ বিষয়া (Officer)',
  adminRole: 'প্ৰশাসক (Admin)',
  welcomeBack: 'স্বাগতম',
  navDashboard: 'ডেচবৰ্ড',
  navSchemes: 'জলপানি আঁচনিসমূহ',
  navEligibility: 'যোগ্যতা পৰীক্ষা',
  navMyApplications: 'মোৰ আবেদনসমূহ',
  navDocumentWallet: 'নথি ৱালেট',
  navPayments: 'ডিবিটি পেমেণ্ট',
  navNotifications: 'জাননীসমূহ',
  navAskJago: 'জাগো (JAGO) ক সোধক',
  navOutreach: 'চিনাক্তকৰণ আৰু আউটৰিচ',
  navOfficerReview: 'বিষয়াৰ পৰীক্ষণ',
  navSystemMetrics: 'ব্যৱস্থা পৰিসংখ্যা',
  applyNow: 'জলপানিৰ বাবে আবেদন কৰক',
  trackStatus: 'স্থিতি নিৰীক্ষণ কৰক',
  eligibleLabel: 'যোগ্য (Eligible)',
  notEligibleLabel: 'অযোগ্য (Not Eligible)',
  needsVerificationLabel: 'সত্যাপন প্ৰয়োজন',
  walletTitle: 'ডিজিটেল নথি ৱালেট',
  trackingTitle: 'আবেদন অগ্ৰগতিৰ সময়ৰেখা',
  jagoTitle: 'জাগো (JAGO) - সহায়ক',
  jagoPlaceholder: 'অসমীয়া বা ইংৰাজীত সোধক (যেনে: "মোৰ আবেদনৰ স্থিতি কি?")...'
};

const bn: TranslationDictionary = {
  ...hi,
  govIndia: 'ভারত সরকার',
  motaFull: 'জনজাতি বিষয়ক মন্ত্রক',
  appTitle: 'ট্রাইবাল স্কলার',
  appSubtitle: 'জনজাতি শিক্ষার্থীদের জন্য সমন্বিত বৃত্তি পোর্টাল',
  portalTagline: 'জনজাতি বিষয়ক মন্ত্রকের (MoTA) সমস্ত বৃত্তি ও ফেলোশিপ প্রকল্পের কেন্দ্রীভূত ডিজিটাল প্ল্যাটফর্ম',
  singleScholarshipRuleNotice: 'মন্ত্রকের নির্দেশিকা: একজন শিক্ষার্থী একই সময়ে কেবল একটি বৃত্তি স্কিম গ্রহণ করতে পারেন।',
  login: 'লগ ইন করুন',
  logout: 'লগ আউট',
  demoLogin: 'ডেমো লগইন',
  createAccount: 'নতুন অ্যাকাউন্ট তৈরি করুন',
  studentRole: 'শিক্ষার্থী (Student)',
  officerRole: 'যাচাইকারী আধিকারিক (Officer)',
  adminRole: 'মন্ত্রক প্রশাসক (Admin)',
  welcomeBack: 'স্বাগতম',
  navDashboard: 'ড্যাশবোর্ড',
  navSchemes: 'বৃত্তি প্রকল্পসমূহ',
  navEligibility: 'যোগ্যতা যাচাই',
  navMyApplications: 'আমার আবেদনপত্র',
  navDocumentWallet: 'ডকুমেন্ট ওয়ালেট',
  navPayments: 'ডিবিটি পেমেন্ট',
  navNotifications: 'বিজ্ঞপ্তি',
  navAskJago: 'জাগোকে (JAGO) জিজ্ঞাসা করুন',
  navOutreach: 'শনাক্তকরণ ও আউটরিচ',
  navOfficerReview: 'আধিকারিক যাচাইকরণ',
  navSystemMetrics: 'সিস্টেম পরিসংখ্যান',
  applyNow: 'বৃত্তির জন্য আবেদন করুন',
  trackStatus: 'অবস্থা ট্র্যাক করুন',
  eligibleLabel: 'যোগ্য (Eligible)',
  notEligibleLabel: 'অযোগ্য (Not Eligible)',
  needsVerificationLabel: 'যাচাইকরণ প্রয়োজন',
  walletTitle: 'ডিজিটাল ডকুমেন্ট ওয়ালেট',
  trackingTitle: 'আবেদনের অগ্রগতির সময়রেখা',
  jagoTitle: 'জাগো (JAGO) - সহায়তা সহকারী',
  jagoPlaceholder: 'বাংলা বা ইংরেজিতে জিজ্ঞাসা করুন (যেমন: "আমার আবেদনের বর্তমান অবস্থা কী?")...'
};

const ne: TranslationDictionary = {
  ...hi,
  govIndia: 'भारत सरकार',
  motaFull: 'जनजातीय कार्य मन्त्रालय',
  appTitle: 'ट्राइबल स्कलर',
  appSubtitle: 'जनजातीय विद्यार्थीहरूका लागि एकीकृत छात्रवृत्ति पोर्टल',
  portalTagline: 'जनजातीय कार्य मन्त्रालय (MoTA) का सबै छात्रवृत्ति तथा फेलोसिप योजनाहरूको एकीकृत डिजिटल मञ्च',
  singleScholarshipRuleNotice: 'मन्त्रालय निर्देशिका: एक विद्यार्थीले एक पटकमा केवल एक छात्रवृत्ति योजना लिन पाउँछ।',
  login: 'लग इन गर्नुहोस्',
  logout: 'लग आउट',
  demoLogin: 'डेमो लगइन',
  createAccount: 'नयाँ खाता बनाउनुहोस्',
  studentRole: 'विद्यार्थी (Student)',
  officerRole: 'प्रमाणीकरण अधिकारी (Officer)',
  adminRole: 'मन्त्रालय प्रशासक (Admin)',
  welcomeBack: 'स्वागत छ',
  navDashboard: 'ड्यासबोर्ड',
  navSchemes: 'छात्रवृत्ति योजनाहरू',
  navEligibility: 'योग्यता जाँच',
  navMyApplications: 'मेरा आवेदनहरू',
  navDocumentWallet: 'कागजात वालेट',
  navPayments: 'डीबीटी भुक्तानी',
  navNotifications: 'सूचनाहरू',
  navAskJago: 'जागो (JAGO) लाई सोध्नुहोस्',
  navOutreach: 'पहिचान र आउटरीच',
  navOfficerReview: 'अधिकारी प्रमाणीकरण',
  navSystemMetrics: 'प्रणाली तथ्याङ्क',
  applyNow: 'छात्रवृत्तिका लागि आवेदन दिनुहोस्',
  trackStatus: 'स्थिति ट्र्याक गर्नुहोस्',
  eligibleLabel: 'योग्य (Eligible)',
  notEligibleLabel: 'अयोग्य (Not Eligible)',
  needsVerificationLabel: 'प्रमाणीकरण आवश्यक',
  walletTitle: 'डिजिटल कागजात वालेट',
  trackingTitle: 'आवेदन प्रगति समय-रेखा',
  jagoTitle: 'जागो (JAGO) - सहायक',
  jagoPlaceholder: 'नेपाली वा अंग्रेजीमा सोध्नुहोस् (जस्तै: "मेरो आवेदनको स्थिति के छ?")...'
};

const mzo: TranslationDictionary = {
  ...en,
  govIndia: 'INDIA SAWRLKAR',
  motaFull: 'MINISTRY OF TRIBAL AFFAIRS',
  appTitle: 'TRIBAL SCHOLAR',
  appSubtitle: 'Tribal Zirlaite Tana Scholarship Portal Inzawm',
  portalTagline: 'Ministry of Tribal Affairs (MoTA) scholarship leh fellowship scheme zawng zawng lakkhawmna',
  singleScholarshipRuleNotice: 'MoTA Inkaihhruaina: Zirlai pakhatin scholarship scheme pakhat chauh a rualin a dawng thei.',
  login: 'Lut Rawh (Login)',
  logout: 'Chhuak Rawh',
  demoLogin: 'Demo Login',
  createAccount: 'Account Thar Siam Rawh',
  studentRole: 'Zirlai',
  officerRole: 'Endiktu Officer',
  adminRole: 'MoTA Admin',
  welcomeBack: 'Chibai',
  navDashboard: 'Dashboard',
  navSchemes: 'Scholarship Scheme-te',
  navEligibility: 'Tlin leh Tlin loh Enna',
  navMyApplications: 'Ka Dilnate',
  navDocumentWallet: 'Document Bawm',
  navPayments: 'DBT Pawisa Chhuak',
  navNotifications: 'Hriattirnate',
  navAskJago: 'JAGO Zawt Rawh',
  applyNow: 'Duhna Thehlut Rawh',
  trackStatus: 'Dinhmun Enna',
  eligibleLabel: 'Tling (Eligible)',
  notEligibleLabel: 'Tling lo (Not Eligible)',
  needsVerificationLabel: 'Finfeh ngai',
  walletTitle: 'Digital Document Bawm',
  trackingTitle: 'Dilna Kalphung Enzui',
  jagoTitle: 'JAGO - Zirlai Tanpuitu',
  jagoPlaceholder: 'Mizo ṭawng emaw English-in zawt rawh...'
};

const mni: TranslationDictionary = {
  ...hi,
  govIndia: 'ভারত সরকার',
  motaFull: 'জনজাতীয় পরিক্রমা মন্ত্রালয়',
  appTitle: 'ত্রাইবেল স্কলার',
  appSubtitle: 'ত্রাইবেল মহৈরোইশিংগী অপুনবা স্কোলারশিপ পোর্তেল',
  portalTagline: 'জনজাতীয় পরিক্রমা মন্ত্রালয়গী (MoTA) অপুনবা স্কোলারশিপ স্কিমশিংগী দিজিতেল পোর্তেল',
  singleScholarshipRuleNotice: 'মিনিস্ত্রীগী ৱাফম: মহৈরোই অমনা মতম অমদা স্কোলারশিপ স্কিম অমা খক্তমক ফংবা য়াগনি।',
  login: 'লগ ইন তৌবিয়ু',
  logout: 'লগ আউত',
  demoLogin: 'দেমো লগইন',
  createAccount: 'অনৌবা একাউন্ত শেম্বিয়ু',
  studentRole: 'মহৈরোই (Student)',
  officerRole: 'ভেরিফিকেসন ওফিসার',
  adminRole: 'মন্ত্রালয় এদমিন',
  welcomeBack: 'তরাম্না ওকচরি',
  navDashboard: 'দেশবোর্দ',
  navSchemes: 'স্কোলারশিপ স্কিমশিং',
  navEligibility: 'য়াব্রা য়েংশিনবা',
  navMyApplications: 'ঐগী অপ্লিকেসনশিং',
  navDocumentWallet: 'দোকুমেন্ত ৱালেট',
  navPayments: 'DBT পেমেন্ত',
  navNotifications: 'নোতিফিকেসনশিং',
  navAskJago: 'জাগোদা হংবিয়ু (JAGO)',
  applyNow: 'হৌজিক এপ্লাই তৌবিয়ু',
  trackStatus: 'স্তাতস য়েংবিয়ু',
  eligibleLabel: 'য়ারে (Eligible)',
  notEligibleLabel: 'য়াদে (Not Eligible)',
  needsVerificationLabel: 'য়েংশিনবা তঙাইফদে',
  walletTitle: 'দিজিতেল দোকুমেন্ত ৱালেট',
  trackingTitle: 'অপ্লিকেসন প্রোগ্রেস তারেক তৌবা',
  jagoTitle: 'জাগো (JAGO) - মতেং পাংবা',
  jagoPlaceholder: 'মণিপুরী নত্রগা ইংলিসতা হংবিয়ু...'
};

const kha: TranslationDictionary = {
  ...en,
  govIndia: 'KA SORKAR INDIA',
  motaFull: 'MINISTRY OF TRIBAL AFFAIRS',
  appTitle: 'TRIBAL SCHOLAR',
  appSubtitle: 'Ka Portal ba Kyrpang na ka bynta ki Samla Pule Tribal',
  portalTagline: 'Ka jingiarap na ka Ministry of Tribal Affairs (MoTA) ia baroh ki samla pule Scheduled Tribe',
  singleScholarshipRuleNotice: 'Adong ka MoTA: Uwei/kawei ka samla pule lah ban ioh tang kawei ka scholarship ha kajuh ka por.',
  login: 'Pule / Login',
  logout: 'Mih noh',
  demoLogin: 'Demo Login',
  createAccount: 'Thaw Account Thymmai',
  studentRole: 'Samla Pule (Student)',
  officerRole: 'Nongbishar (Officer)',
  adminRole: 'MoTA Admin',
  welcomeBack: 'Khublei',
  navDashboard: 'Dashboard',
  navSchemes: 'Ki Skim Scholarship',
  navEligibility: 'Bishar ia ka Jingbit',
  navMyApplications: 'Ki jingdawa jong nga',
  navDocumentWallet: 'Ka pla kot (Document Wallet)',
  navPayments: 'Ka jingsiew DBT',
  navNotifications: 'Ki jingpyntip',
  navAskJago: 'Kylli na u JAGO',
  applyNow: 'Aiti ia ka Jingdawa',
  trackStatus: 'Bud ia ka Jinglong Jingman',
  eligibleLabel: 'Ba Bit (Eligible)',
  notEligibleLabel: 'Khlem Bit (Not Eligible)',
  needsVerificationLabel: 'Donkam ban bishar',
  walletTitle: 'Ka Pla Kot Digital',
  trackingTitle: 'Jingiaid shaphrang jong ka jingdawa',
  jagoTitle: 'JAGO - Nongiarap Samla Pule',
  jagoPlaceholder: 'Kylli ha ka ktien Khasi lane English...'
};

const grt: TranslationDictionary = {
  ...en,
  govIndia: 'INDIA SORKAR',
  motaFull: 'MINISTRY OF TRIBAL AFFAIRS',
  appTitle: 'TRIBAL SCHOLAR',
  appSubtitle: 'A·chik aro Tribal Chatrorangna Scholarship Portal',
  portalTagline: 'Ministry of Tribal Affairs (MoTA) ni pilak scholarship aro fellowship schemerangko apsan biapo man·ani',
  singleScholarshipRuleNotice: 'MoTA Niam: Saksa chatro apsan somoio scholarship scheme damsanasan ra·na man·gen.',
  login: 'Napbo (Login)',
  logout: 'Ong·katbo',
  demoLogin: 'Demo Login',
  createAccount: 'Gital Account Bikotbo',
  studentRole: 'Chatro / Chatri (Student)',
  officerRole: 'Nirikgipa Officer',
  adminRole: 'MoTA Admin',
  welcomeBack: 'Salam',
  navDashboard: 'Dashboard',
  navSchemes: 'Scholarship Schemerang',
  navEligibility: 'Kragipa ong·a ma ong·ja nina',
  navMyApplications: 'Angni Diltokgiminrang',
  navDocumentWallet: 'Lekha Rokkom Wallet',
  navPayments: 'DBT Tangka Man·ani',
  navNotifications: 'U·iatani',
  navAskJago: 'JAGO-ko Sing·bo',
  applyNow: 'Apply Ka·bo',
  trackStatus: 'Status-ko Nibo',
  eligibleLabel: 'Kragipa (Eligible)',
  notEligibleLabel: 'Krajagipa (Not Eligible)',
  needsVerificationLabel: 'Nirikchengna nangkuenga',
  walletTitle: 'Digital Lekha Wallet',
  trackingTitle: 'Diltokgiminni Apsan re·baani',
  jagoTitle: 'JAGO - Chatroni Dakchakgipa',
  jagoPlaceholder: 'A·chik ku·sik ba English-o sing·bo...'
};

export const translations: Record<Language, TranslationDictionary> = {
  en,
  hi,
  as,
  bn,
  ne,
  mzo,
  mni,
  kha,
  grt
};

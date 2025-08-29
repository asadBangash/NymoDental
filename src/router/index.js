import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import DashboardLayout from '../pages/Dashboard.vue';

// Dashboard main views
import DashboardView from '../pages/sections/DashboardView.vue';

// Appointments
// We've removed AppointmentsView and will use AppointmentsLayout instead.
import AppointmentsLayout from '../pages/sections/Appointments/AppointmentsLayout.vue'; 
import Scheduler from '../pages/sections/Appointments/Components/Scheduler.vue';
import AppointmentHistory from '../pages/sections/Appointments/Components/AppointmentHistory.vue';
import PatientCommunication from '../pages/sections/Appointments/Components/PatientCommunication.vue';
import BillingInformation from '../pages/sections/Appointments/Components/BillingInformation.vue';
import WaitingList from '../pages/sections/Appointments/Components/WaitingList.vue';
import AppointmentTypes from '../pages/sections/Appointments/Components/AppointmentTypes.vue';
import NewAppointment from '../pages/sections/Appointments/Components/NewAppointment.vue';

// Chart module
import ChartView from '../pages/sections/Chart/ChartView.vue';

//clinical notes and treatment plan
import ClinicalNotes from '../pages/sections/ClinicalNotes/ClinicalNotes-TreatmentPlan.vue';

//Private Treatment & Invoicing
import PrivateTreatmentInvoicing from '../pages/sections/PrivateTreatmentInvoicing/PrivateTreatmentInvoicing.vue';
 
//Patient management
import PatientsView from '../pages/sections/Patients/Patients.vue';

// File storage
import FileStorage from '../pages/sections/FileStorage.vue';

// NHS FP17 Claims
import NHSFP17Claims from '../pages/sections/NHSFP17Claims/Claims.vue';

//UDA Management
import UDAManagement from '../pages/sections/UDAManagement/UDAManagement.vue';

//Performer & Contract Management
import PerformerContractManagement from '../pages/sections/Performer&ContractManagement/PerformerContractManagement.vue';

//Lab & Referral Workflow
import LabReferralWorkflow from '../pages/sections/Lab&ReferralWorkflow/LabReferralWorkflow.vue';

import StaffView from '../pages/sections/StaffView.vue';
import ReportsView from '../pages/sections/ReportsView.vue';
import SettingsView from '../pages/sections/SettingsView.vue';

// CRM views
import CRMView from '../pages/sections/CRM/CRMView.vue';
import AddPatient from '../pages/sections/CRM/AddPatient.vue';
import ViewPatient from '../pages/sections/CRM/ViewPatient.vue';

const routes = [
  { path: '/', name: 'Login', component: Login },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      { path: '', name: 'DashboardHome', component: DashboardView },
      { path: 'crm', name: 'CRM', component: CRMView },

      // CRM children are correctly placed here.
      { path: 'crm/add-patient', name: 'AddPatient', component: AddPatient },
      {
        path: 'crm/view-patient/:id',
        name: 'ViewPatient',
        component: ViewPatient,
        props: true,
      },

      // ⚠️ CORRECTED APPOINTMENTS ROUTES
      {
        path: 'appointments',
        component: AppointmentsLayout,
        children: [
          // { path: '', redirect: 'scheduler' }, // Default redirect for /dashboard/appointments
          { path: 'scheduler', name: 'Scheduler', component: Scheduler },
          { path: 'history', name: 'AppointmentHistory', component: AppointmentHistory },
          { path: 'communication', name: 'PatientCommunication', component: PatientCommunication },
          { path: 'billing', name: 'BillingInformation', component: BillingInformation },
          { path: 'waiting-list', name: 'WaitingList', component: WaitingList },
          { path: 'types', name: 'AppointmentTypes', component: AppointmentTypes },
          { path: 'new', name: 'NewAppointment', component: NewAppointment },
        ],
      },

      // chart
      { path: 'chart', name: 'ChartView', component: ChartView },
     
      // clinical notes
      { path: 'notes', name: 'ClinicalNotes', component: ClinicalNotes },
      //patient management
      { path: 'patients', name: 'Patients', component: PatientsView },
     
      // file storage
      { path: 'files', name: 'FileStorage', component: FileStorage },

      // PrivateTreatmentInvoicing
      { path: 'private-treatment-invoicing', name: 'PrivateTreatmentInvoicing', component: PrivateTreatmentInvoicing },
      // NHS FP17 Claims
      { path: 'claims', name: 'NHSFP17Claims', component: NHSFP17Claims },

      //UDAManagement
      { path: 'uda', name: 'UDAManagement', component: UDAManagement },

      //Performer & Contract Management
      { path: 'pcm', name: 'PerformerContractManagement', component: PerformerContractManagement },

      //Lab & Referral Workflow
      { path: 'lab', name: 'LabReferralWorkflow', component: LabReferralWorkflow },

      { path: 'staff', name: 'Staff', component: StaffView },
      { path: 'reports', name: 'Reports', component: ReportsView },
      { path: 'settings', name: 'Settings', component: SettingsView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
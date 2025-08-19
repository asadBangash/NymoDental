<template>
  <div id="app">
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <header class="modal-header">
          <h3>{{ isEditing ? "Edit Patient" : "Add New Patient" }}</h3>
          <button @click="closeModal" class="close-button">×</button>
        </header>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="form-section">
              <h4>Patient Details</h4>
              <div class="form-grid">
                <div class="form-group">
                  <label>ID</label>
                  <input type="text" v-model="form.id" disabled />
                </div>
                <div class="form-group">
                  <label>Title</label>
                  <select v-model="form.title">
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                    <option>Dr</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>First name</label>
                  <input type="text" v-model="form.firstName" required />
                </div>
                <div class="form-group">
                  <label>Middle name</label>
                  <input type="text" v-model="form.middleName" />
                </div>
                <div class="form-group">
                  <label>Last name</label>
                  <input type="text" v-model="form.lastName" required />
                </div>
                <div class="form-group">
                  <label>Preferred name</label>
                  <input type="text" v-model="form.preferredName" />
                </div>
                <div class="form-group">
                  <label>Gender</label>
                  <select v-model="form.gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Date of birth</label>
                  <input type="date" v-model="form.dob" required />
                </div>
                <div class="form-group">
                  <label>NI number</label>
                  <input type="text" v-model="form.niNumber" />
                </div>
                <div class="form-group">
                  <label>NHS number</label>
                  <input type="text" v-model="form.nhsNumber" />
                </div>
                <div class="form-group">
                  <label>Insurance number</label>
                  <input type="text" v-model="form.insuranceNumber" />
                </div>
                <div class="form-group">
                  <label>Legacy ID</label>
                  <input type="text" v-model="form.legacyId" />
                </div>
                <div class="form-group">
                  <label>Ethnicity</label>
                  <select v-model="form.ethnicity">
                    <option>British</option>
                    <option>Irish</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>GP</label>
                  <input type="text" v-model="form.gp" />
                </div>
              </div>
            </div>

            <div class="form-section">
              <h4>Contact Details</h4>
              <div class="form-grid">
                <div class="form-group">
                  <label>Address line 1</label>
                  <input type="text" v-model="form.address1" required />
                </div>
                <div class="form-group">
                  <label>Address line 2</label>
                  <input type="text" v-model="form.address2" />
                </div>
                <div class="form-group">
                  <label>Town</label>
                  <input type="text" v-model="form.town" required />
                </div>
                <div class="form-group">
                  <label>County</label>
                  <input type="text" v-model="form.county" required />
                </div>
                <div class="form-group">
                  <label>Postcode</label>
                  <input type="text" v-model="form.postcode" required />
                </div>
                <div class="form-group">
                  <label>Home phone</label>
                  <input type="tel" v-model="form.homePhone" />
                </div>
                <div class="form-group">
                  <label>Work phone</label>
                  <input type="tel" v-model="form.workPhone" />
                </div>
                <div class="form-group">
                  <label>Mobile phone</label>
                  <input type="tel" v-model="form.mobilePhone" required />
                </div>
                <div class="form-group">
                  <label>Preferred phone</label>
                  <select v-model="form.preferredPhone">
                    <option>Home</option>
                    <option>Work</option>
                    <option>Mobile</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" v-model="form.email" />
                </div>
                <div class="form-group">
                  <label>Doctor</label>
                  <input type="text" v-model="form.doctor" />
                </div>
                <div class="form-group">
                  <label>Occupation</label>
                  <input type="text" v-model="form.occupation" />
                </div>
              </div>
            </div>

            <div class="form-section">
              <h4>Practice Details</h4>
              <div class="form-grid">
                <div class="form-group">
                  <label>Location</label>
                  <input type="text" v-model="form.location" />
                </div>
                <div class="form-group">
                  <label>Payment plan</label>
                  <select v-model="form.paymentPlan">
                    <option>Private</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Account</label>
                  <input type="text" v-model="form.account" />
                </div>
                <div class="form-group">
                  <label>Dentist</label>
                  <input type="text" v-model="form.dentist" />
                </div>
                <div class="form-group">
                  <label>Hygienist</label>
                  <input type="text" v-model="form.hygienist" />
                </div>
                <div class="form-group">
                  <label>Receive email</label>
                  <select v-model="form.receiveEmail">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Receive SMS</label>
                  <select v-model="form.receiveSms">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Marketing Consent</label>
                  <select v-model="form.marketingConsent">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Dentist recall interval</label>
                  <input type="text" v-model="form.dentistRecallInterval" />
                </div>
                <div class="form-group">
                  <label>Next dentist recall</label>
                  <input type="date" v-model="form.nextDentistRecall" />
                </div>
                <div class="form-group">
                  <label>Hygienist recall interval</label>
                  <input type="text" v-model="form.hygienistRecallInterval" />
                </div>
                <div class="form-group">
                  <label>Next hygienist recall</label>
                  <input type="date" v-model="form.nextHygienistRecall" />
                </div>
                <div class="form-group">
                  <label>Recall method</label>
                  <select v-model="form.recallMethod">
                    <option>SMS</option>
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Acquisition source</label>
                  <input type="text" v-model="form.acquisitionSource" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <footer class="modal-footer">
          <button class="save-button" @click="submitForm">
            {{ isEditing ? "Save Changes" : "Save Patient" }}
          </button>
        </footer>
      </div>
    </div>
    <main class="main-content">
      <header class="header">
        <h1 class="page-title">Patients</h1>
        <div class="header-actions">
          <div class="search-container">
            <span class="material-icons search-icon">search</span>
            <input type="text" placeholder="Search patients..." class="search-input" />
          </div>
          <button class="add-button" @click="openModal(false)">
            <span class="material-icons">add</span>
            Add New Patient
          </button>
        </div>
      </header>

      <div class="content-wrapper">
        <div class="patient-list-panel">
          <h2 class="panel-title">All Patients</h2>
          <div class="patient-list">
            <div
              v-for="patient in paginatedPatients"
              :key="patient.id"
              :class="[
                'patient-list-item',
                { active: selectedPatient && selectedPatient.id === patient.id },
              ]"
              @click="selectPatient(patient)"
            >
              <img :src="patient.image" :alt="patient.name" class="patient-avatar" />
              <div>
                <p class="patient-name">{{ patient.name }}</p>
                <p class="patient-last-visit">{{ patient.lastVisit }}</p>
              </div>
            </div>
          </div>
          <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1" class="page-button">
              Previous
            </button>
            <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="page-button"
            >
              Next
            </button>
          </div>
        </div>

        <div class="patient-details-panel">
          <div v-if="selectedPatient">
            <div class="details-header">
              <div class="flex-center">
                <img
                  :src="selectedPatient.image"
                  :alt="selectedPatient.name"
                  class="details-avatar"
                />
                <div>
                  <h2 class="details-name">{{ selectedPatient.name }}</h2>
                  <p class="details-id">ID: {{ selectedPatient.id }}</p>
                  <div class="vip-status">
                    <span class="material-icons">star</span>
                    <span class="vip-text">VIP Patient</span>
                  </div>
                </div>
              </div>
              <div class="action-buttons">
                <button class="action-button" @click="openModal(true)">
                  <span class="material-icons">edit</span>
                </button>
                <button class="action-button">
                  <span class="material-icons">print</span>
                </button>
                <button class="action-button delete-button">
                  <span class="material-icons">delete</span>
                </button>
              </div>
            </div>

            <div class="details-body">
              <div class="tabs-container">
                <nav class="tabs-nav">
                  <a
                    v-for="tab in tabs"
                    :key="tab"
                    :class="['tab-link', { 'tab-active': activeTab === tab }]"
                    @click="activeTab = tab"
                  >
                    {{ tab }}
                  </a>
                </nav>
              </div>

              <div class="tab-content">
                <div v-if="activeTab === 'Patient Info'" class="grid-content">
                  <div class="info-item">
                    <h4 class="info-label">Full Name</h4>
                    <p class="info-text">{{ selectedPatient.fullName }}</p>
                  </div>
                  <div class="info-item">
                    <h4 class="info-label">Date of Birth</h4>
                    <p class="info-text">{{ selectedPatient.dob }}</p>
                  </div>
                  <div class="info-item">
                    <h4 class="info-label">Email Address</h4>
                    <p class="info-text">{{ selectedPatient.email }}</p>
                  </div>
                  <div class="info-item">
                    <h4 class="info-label">Phone Number</h4>
                    <p class="info-text">{{ selectedPatient.phone }}</p>
                  </div>
                  <div class="info-item-full">
                    <h4 class="info-label">Address</h4>
                    <p class="info-text">{{ selectedPatient.address }}</p>
                  </div>
                  <div class="info-item-full">
                    <h4 class="info-label">Primary Dental Concerns</h4>
                    <div class="concern-tags">
                      <span
                        v-for="concern in selectedPatient.concerns"
                        :key="concern"
                        class="concern-tag"
                        >{{ concern }}</span
                      >
                    </div>
                  </div>
                </div>

                <div
                  v-else-if="activeTab === 'Appointments'"
                  class="tab-scroll-container"
                >
                  <div
                    v-for="appointment in selectedPatient.appointments"
                    :key="appointment.id"
                    class="appointment-item"
                  >
                    <div class="appointment-date">{{ appointment.date }}</div>
                    <div class="appointment-details">
                      <p class="appointment-title">{{ appointment.title }}</p>
                      <p class="appointment-time">{{ appointment.time }}</p>
                    </div>
                  </div>
                </div>

                <div v-else-if="activeTab === 'Family'" class="info-item-full">
                  <h4 class="info-label-members">Family Members</h4>
                  <div class="family-members">
                    <div
                      v-for="member in selectedPatient.family"
                      :key="member.name"
                      class="member-card"
                    >
                      <img :src="member.image" :alt="member.name" class="member-avatar" />
                      <div>
                        <p class="member-name">{{ member.name }}</p>
                        <p class="member-relation">{{ member.relation }}</p>
                      </div>
                    </div>
                    <button class="add-member-button">
                      <span class="material-icons">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="select-prompt">
            <p>Please select a patient to view their details.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Mock data for the patient list
      patients: [
        {
          id: "PT-00123",
          name: "Jane Doe",
          lastVisit: "Last visit: 2 weeks ago",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuASP_ZWvXG8FRDk54yxGec7wvyUyQ--1c7Iggvpy9IYBEUpaKIZiiaGcDak7RmpKXdG1tSGORu4-hGVKiU9z78P14eRgxbfqVnV4q4Fq8LbvoTFu7d29jVf1BABFXlqOSCsdjI-5Kvjt-fDUaqjBU3zyadjYcpqfsUAms68DcNNPnU1V9ALk3fEsuueje-LFco0spQgmtbiGRL0zdsgrO8NV_tYFkG9dx6dCG6tYWcEyga69ZgFSTqK6bEAVh09abBXKYYeNe3Pa6w",
          fullName: "Jane Amelia Doe",
          dob: "July 15, 1985 (39 years)",
          email: "jane.doe@example.com",
          phone: "(123) 456-7890",
          address: "123 Main Street, Anytown, USA 12345",
          concerns: ["Gum Disease", "Bleeding Gums"],
          family: [
            {
              name: "John Doe",
              relation: "Spouse",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCrMc0rx6ty1xpA0GSLTXPRz1CCT5w9m60TFFx-1mcIVQGdCHqFUsn0QMR2UfuVy06S8ZCkHQubDdF9zr1dETppjN6PuG-yzgiAi-5Dz7-xZNOKMVQTIOHrF2NC1-v70_xzJ1IISeF-qsdXnnGscDBPRUwZW_PXABgBT37zv7ygoegM_41jblu8vrems3npd9o_ks3iLf1lNbnoDM-ep051OxQpaANpFhR0RgSTQD6Pa2oxArfHHW5lr0Jp48ChrGqC7QlZCipGAmw",
            },
            {
              name: "Jill Doe",
              relation: "Daughter",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAWrkGOdXrbtfo4m80Y1I0AFysz9SaOwOdpiWXHiBKSMNMTvI0GSKLaURQUJK-dmOBOhtrBJYP2yMh3-INfzp0I0WeGWbyEPKI3v6r6BgSj3a37zbRH5i6Sh_NF5Ga9138MlRPXyoO-minDRxqr1rtJrqsgtLYJGIAB7SrJ5t3-IJChHg-1UKb0K00UprQLZDVvfezKPoGhC_bJC4uPWlMp06M4-4GLcQmhpkQxS-ANI40RRpcVJP0jN0h0ifpZhMA2wG5kdlh0wyg",
            },
          ],
          appointments: [
            { id: 1, date: "11/15/2024", time: "10:00 AM", title: "Routine Check-up" },
            { id: 2, date: "08/01/2024", time: "2:30 PM", title: "Teeth Cleaning" },
          ],
        },
        {
          id: "PT-00124",
          name: "John Smith",
          lastVisit: "Last visit: 1 month ago",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDzhv0qDhRdkeKwrhEfSPknPwyV6qqU2erlzf2xE_Mx93AWFnu_3g0_bmGYTa5SR3vH5NHV7FtTuCDWiWoCV947G7vSD-rG-l5O4HU4YoYRRgXTXlZlV_gTia9FRauEEOBpYPAX1TZcn46-BNpmBzuxbkdvq5ZXw9VfvO07XuASpiQlXWssebmXRDR41M5deJdmHI4k2ZFxgLEDucZt28TdjHlrVUN-uWpQ87x5GQ7i9aZcv38v5nyqo_19gURVNt1y0Crh0s-gzO4",
          fullName: "John Michael Smith",
          dob: "March 20, 1990 (34 years)",
          email: "john.smith@example.com",
          phone: "(987) 654-3210",
          address: "456 Oak Avenue, Springfield, USA 67890",
          concerns: ["Cavity Filling"],
          family: [
            {
              name: "Sarah Smith",
              relation: "Wife",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCrMc0rx6ty1xpA0GSLTXPRz1CCT5w9m60TFFx-1mcIVQGdCHqFUsn0QMR2UfuVy06S8ZCkHQubDdF9zr1dETppjN6PuG-yzgiAi-5Dz7-xZNOKMVQTIOHrF2NC1-v70_xzJ1IISeF-qsdXnnGscDBPRUwZW_PXABgBT37zv7ygoegM_41jblu8vrems3npd9o_ks3iLf1lNbnoDM-ep051OxQpaANpFhR0RgSTQD6Pa2oxArfHHW5lr0Jp48ChrGqC7QlZCipGAmw",
            },
          ],
          appointments: [
            {
              id: 3,
              date: "12/10/2024",
              time: "9:00 AM",
              title: "Follow-up Consultation",
            },
            { id: 4, date: "10/15/2024", time: "11:00 AM", title: "X-ray" },
          ],
        },
        {
          id: "PT-00125",
          name: "Alice Johnson",
          lastVisit: "Last visit: 3 months ago",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDrZ8OtoumMtHdGZfU56YkhoRE4HWAsvIgtP6QcUtUcyraGoah1Ht1LfilRY5lUlpljei_J1NyWrqs1NmDF31OPYayxcJ9Jrm8ZUkeRONOaLU0meaGjzObeq336QXeESt44pW0xVxUmU6XaJIdqge8ALgO0VnPS6AW9ZB5F2w4Pi1aGUxfNebHSOgXXkTxbhxWG3OP_eTxNmdSq2jzXVCviGul0W6D3ZeUR7ykdGOQzS0Lv-SsgDIAywIN-kNQnWHrRE3wYmiW0ghY",
          fullName: "Alice Marie Johnson",
          dob: "February 5, 2000 (24 years)",
          email: "alice.johnson@example.com",
          phone: "(555) 123-4567",
          address: "789 Pine Lane, Cityville, USA 98765",
          concerns: ["Teeth Whitening"],
          family: [],
          appointments: [
            {
              id: 5,
              date: "01/20/2025",
              time: "3:00 PM",
              title: "Consultation for Whitening",
            },
          ],
        },
        {
          id: "PT-00126",
          name: "Bob Williams",
          lastVisit: "Last visit: 5 days ago",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDjgOyFwKgZJZxvyDpi7ATYs4W6XqkMOShUOShE5F8QQ89EiW00ZxSNv1d_JTLqx2VGYzf08AzG-L5NDNwNmPhOD0m1k_0Tnwmwx3Akab2ETSYHyxXkW6lrjxYPWztxnOgimSmg0D5Fe31JX3UIVQOEXIU4zqYETPyNtPYbsVYICSznR7wPlTAuFrHK5-EhAP2dRE5vV2daZIiG0Pw9W5GBB6T_R8Id48lPlwMDyxMT_JxRJWk8XI0O2EJ7t1MyKWQfNHDTzDRPlrU",
          fullName: 'Robert "Bob" Williams',
          dob: "October 10, 1975 (49 years)",
          email: "bob.williams@example.com",
          phone: "(111) 222-3333",
          address: "321 Elm Street, Townsville, USA 54321",
          concerns: ["Toothache"],
          family: [
            {
              name: "Mary Williams",
              relation: "Wife",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCrMc0rx6ty1xpA0GSLTXPRz1CCT5w9m60TFFx-1mcIVQGdCHqFUsn0QMR2UfuVy06S8ZCkHQubDdF9zr1dETppjN6PuG-yzgiAi-5Dz7-xZNOKMVQTIOHrF2NC1-v70_xzJ1IISeF-qsdXnnGscDBPRUwZW_PXABgBT37zv7ygoegM_41jblu8vrems3npd9o_ks3iLf1lNbnoDM-ep051OxQpaANpFhR0RgSTQD6Pa2oxArfHHW5lr0Jp48ChrGqC7QlZCipGAmw",
            },
            {
              name: "Tim Williams",
              relation: "Son",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDjgOyFwKgZJZxvyDpi7ATYs4W6XqkMOShUOShE5F8QQ89EiW00ZxSNv1d_JTLqx2VGYzf08AzG-L5NDNwNmPhOD0m1k_0Tnwmwx3Akab2ETSYHyxXkW6lrjxYPWztxnOgimSmg0D5Fe31JX3UIVQOEXIU4zqYETPyNtPYbsVYICSznR7wPlTAuFrHK5-EhAP2dRE5vV2daZIiG0Pw9W5GBB6T_R8Id48lPlwMDyxMT_JxRJWk8XI0O2EJ7t1MyKWQfNHDTzDRPlrU",
            },
            {
              name: "Sally Williams",
              relation: "Daughter",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAWrkGOdXrbtfo4m80Y1I0AFysz9SaOwOdpiWXHiBKSMNMTvI0GSKLaURQUJK-dmOBOhtrBJYP2yMh3-INfzp0I0WeGWbyEPKI3v6r6BgSj3a37zbRH5i6Sh_NF5Ga9138MlRPXyoO-minDRxqr1rtJrqsgtLYJGIAB7SrJ5t3-IJChHg-1UKb0K00UprQLZDVvfezKPoGhC_bJC4uPWlMp06M4-4GLcQmhpkQxS-ANI40RRpcVJP0jN0h0ifpZhMA2wG5kdlh0wyg",
            },
          ],
          appointments: [
            {
              id: 6,
              date: "11/15/2024",
              time: "4:00 PM",
              title: "Emergency Appointment",
            },
          ],
        },
        {
          id: "PT-00127",
          name: "Susan Lee",
          lastVisit: "Last visit: 1 week ago",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDzhv0qDhRdkeKwrhEfSPknPwyV6qqU2erlzf2xE_Mx93AWFnu_3g0_bmGYTa5SR3vH5NHV7FtTuCDWiWoCV947G7vSD-rG-l5O4HU4YoYRRgXTXlZlV_gTia9FRauEEOBpYPAX1TZcn46-BNpmBzuxbkdvq5ZXw9VfvO07XuASpiQlXWssebmXRDR41M5deJdmHI4k2ZFxgLEDucZt28TdjHlrVUN-uWpQ87x5GQ7i9aZcv38v5nyqo_19gURVNt1y0Crh0s-gzO4",
        },
        {
          id: "PT-00128",
          name: "David Wilson",
          lastVisit: "Last visit: 2 months ago",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDjgOyFwKgZJZxvyDpi7ATYs4W6XqkMOShUOShE5F8QQ89EiW00ZxSNv1d_JTLqx2VGYzf08AzG-L5NDNwNmPhOD0m1k_0Tnwmwx3Akab2ETSYHyxXkW6lrjxYPWztxnOgimSmg0D5Fe31JX3UIVQOEXIU4zqYETPyNtPYbsVYICSznR7wPlTAuFrHK5-EhAP2dRE5vV2daZIiG0Pw9W5GBB6T_R8Id48lPlwMDyxMT_JxRJWk8XI0O2EJ7t1MyKWQfNHDTzDRPlrU",
        },
        {
          id: "PT-00129",
          name: "Emily Clark",
          lastVisit: "Last visit: 4 weeks ago",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDrZ8OtoumMtHdGZfU56YkhoRE4HWAsvIgtP6QcUtUcyraGoah1Ht1LfilRY5lUlpljei_J1NyWrqs1NmDF31OPYayxcJ9Jrm8ZUkeRONOaLU0meaGjzObeq336QXeESt44pW0xVxUmU6XaJIdqge8ALgO0VnPS6AW9ZB5F2w4Pi1aGUxfNebHSOgXXkTxbhxWG3OP_eTxNmdSq2jzXVCviGul0W6D3ZeUR7ykdGOQzS0Lv-SsgDIAywIN-kNQnWHrRE3wYmiW0ghY",
        },
        {
          id: "PT-00130",
          name: "James Brown",
          lastVisit: "Last visit: 6 months ago",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDzhv0qDhRdkeKwrhEfSPknPwyV6qqU2erlzf2xE_Mx93AWFnu_3g0_bmGYTa5SR3vH5NHV7FtTuCDWiWoCV947G7vSD-rG-l5O4HU4YoYRRgXTXlZlV_gTia9FRauEEOBpYPAX1TZcn46-BNpmBzuxbkdvq5ZXw9VfvO07XuASpiQlXWssebmXRDR41M5deJdmHI4k2ZFxgLEDucZt28TdjHlrVUN-uWpQ87x5GQ7i9aZcv38v5nyqo_19gURVNt1y0Crh0s-gzO4",
        },
      ],
      selectedPatient: null,
      tabs: ["Patient Info", "Appointments", "Billing & Payments", "Family"],
      activeTab: "Patient Info",
      currentPage: 1,
      itemsPerPage: 5,
      // New data properties for the modal
      showModal: false,
      isEditing: false, // New data property to track edit mode
      form: {
        id: "",
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        preferredName: "",
        gender: "",
        dob: "",
        niNumber: "",
        nhsNumber: "",
        insuranceNumber: "",
        legacyId: "",
        ethnicity: "",
        gp: "",
        address1: "",
        address2: "",
        town: "",
        county: "",
        postcode: "",
        homePhone: "",
        workPhone: "",
        mobilePhone: "",
        preferredPhone: "",
        email: "",
        doctor: "",
        occupation: "",
        location: "",
        paymentPlan: "",
        account: "",
        dentist: "",
        hygienist: "",
        receiveEmail: "",
        receiveSms: "",
        marketingConsent: "",
        dentistRecallInterval: "",
        nextDentistRecall: "",
        hygienistRecallInterval: "",
        nextHygienistRecall: "",
        recallMethod: "",
        acquisitionSource: "",
      },
    };
  },
  mounted() {
    this.selectPatient(this.paginatedPatients[0]);
  },
  computed: {
    totalPages() {
      return Math.ceil(this.patients.length / this.itemsPerPage);
    },
    paginatedPatients() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.patients.slice(startIndex, endIndex);
    },
  },
  methods: {
    // Method to handle patient selection
    selectPatient(patient) {
      this.selectedPatient = patient;
      if (this.selectedPatient) {
        this.activeTab = "Patient Info";
      }
    },
    // Methods for pagination
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.selectPatient(this.paginatedPatients[0]);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.selectPatient(this.paginatedPatients[0]);
      }
    },
    // New methods for the modal
    openModal(isEditMode) {
      this.isEditing = isEditMode;
      if (this.isEditing && this.selectedPatient) {
        // Populate form with existing patient data
        this.form.id = this.selectedPatient.id;
        const nameParts = this.selectedPatient.name.split(" ");
        this.form.firstName = nameParts[0];
        this.form.lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
        this.form.email = this.selectedPatient.email;
        this.form.mobilePhone = this.selectedPatient.phone;
        const addressParts = this.selectedPatient.address.split(", ");
        this.form.address1 = addressParts[0];
        this.form.address2 = addressParts[1];
        this.form.town = addressParts[2];
        this.form.county = addressParts[3];
        this.form.postcode = addressParts[4];
        this.form.dob = this.selectedPatient.dob.split(" ")[0]; // Basic parsing for demo
      } else {
        // Reset form for a new patient
        this.resetForm();
      }
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    submitForm() {
      if (this.isEditing) {
        // Find the patient in the list and update their details
        const patientToUpdate = this.patients.find(
          (p) => p.id === this.selectedPatient.id
        );
        if (patientToUpdate) {
          patientToUpdate.name = `${this.form.firstName} ${this.form.lastName}`;
          patientToUpdate.fullName = `${this.form.firstName} ${this.form.middleName} ${this.form.lastName}`;
          patientToUpdate.email = this.form.email;
          patientToUpdate.phone = this.form.mobilePhone;
          patientToUpdate.address = `${this.form.address1}, ${this.form.address2}, ${this.form.town}, ${this.form.county}, ${this.form.postcode}`;
          patientToUpdate.dob = this.form.dob;
        }
      } else {
        // Create a new patient object from the form data
        const newPatient = {
          id: "PT-" + Math.floor(Math.random() * 100000), // Generate a random ID
          name: `${this.form.firstName} ${this.form.lastName}`,
          lastVisit: "Just added",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuASP_ZWvXG8FRDk54yxGec7wvyUyQ--1c7Iggvpy9IYBEUpaKIZiiaGcDak7RmpKXdG1tSGORu4-hGVKiU9z78P14eRgxbfqVnV4q4Fq8LbvoTFu7d29jVf1BABFXlqOSCsdjI-5Kvjt-fDUaqjBU3zyadjYcpqfsUAms68DcNNPnU1V9ALk3fEsuueje-LFco0spQgmtbiGRL0zdsgrO8NV_tYFkG9dx6dCG6tYWcEyga69ZgFSTqK6bEAVh09abBXKYYeNe3Pa6w", // Default image
          fullName: `${this.form.firstName} ${this.form.middleName} ${this.form.lastName}`,
          dob: this.form.dob,
          email: this.form.email,
          phone: this.form.mobilePhone,
          address: `${this.form.address1}, ${this.form.address2}, ${this.form.town}, ${this.form.county}, ${this.form.postcode}`,
          concerns: [],
          family: [],
          appointments: [],
        };
        // Add the new patient to the beginning of the list
        this.patients.unshift(newPatient);
      }
      this.closeModal();
    },
    resetForm() {
      this.form = {
        id: "PT-" + Math.floor(Math.random() * 100000),
        title: "Mr",
        firstName: "",
        middleName: "",
        lastName: "",
        preferredName: "",
        gender: "Male",
        dob: "",
        niNumber: "",
        nhsNumber: "",
        insuranceNumber: "",
        legacyId: "",
        ethnicity: "British",
        gp: "",
        address1: "",
        address2: "",
        town: "",
        county: "",
        postcode: "",
        homePhone: "",
        workPhone: "",
        mobilePhone: "",
        preferredPhone: "Home",
        email: "",
        doctor: "",
        occupation: "",
        location: "",
        paymentPlan: "Private",
        account: "",
        dentist: "",
        hygienist: "",
        receiveEmail: "Yes",
        receiveSms: "Yes",
        marketingConsent: "Yes",
        dentistRecallInterval: "",
        nextDentistRecall: "",
        hygienistRecallInterval: "",
        nextHygienistRecall: "",
        recallMethod: "SMS",
        acquisitionSource: "",
      };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

/* Base Styles */
#app {
  display: flex;
  font-family: "Poppins", sans-serif;
  background-color: #f7f8fc;
  min-height: 100vh;
}

.material-icons {
  vertical-align: middle;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 32px;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.page-title {
  font-size: 36px;
  font-weight: 700;
  color: #1f2937;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-container {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.search-input {
  padding: 8px 16px 8px 40px;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  width: 256px;
  outline: none;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.search-input:focus {
  box-shadow: 0 0 0 2px #4f46e5;
  border-color: #4f46e5;
}

.add-button {
  display: flex;
  align-items: center;
  background-color: #4f46e5;
  color: #fff;
  padding: 8px 16px;
  border-radius: 9999px;
  border: none;
  transition: background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.add-button:hover {
  background-color: #4338ca;
}

.add-button .material-icons {
  margin-right: 8px;
}

/* Content Layout */
.content-wrapper {
  display: flex;
  gap: 16px; /* Reduced gap from 32px to 16px */
}

.patient-list-panel {
  width: 33.333333%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.panel-title {
  font-size: 20px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
}

.patient-list {
  display: flex;
  flex-direction: column;
  gap: 8px; /* Reduced gap between list items */
}

.patient-list-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.patient-list-item:hover {
  background-color: #f9fafb;
}

.patient-list-item.active {
  background-color: #eef2ff;
  border-left: 4px solid #4f46e5;
}

.patient-avatar {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  margin-right: 16px;
}

.patient-name {
  font-weight: 600;
  color: #1f2937;
}

.patient-last-visit {
  font-size: 14px;
  color: #6b7280;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.page-button {
  background-color: #4f46e5;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.page-button:hover {
  background-color: #4338ca;
}

.page-button:disabled {
  background-color: #d1d5db;
  cursor: not-allowed;
}

.page-info {
  font-size: 14px;
  color: #6b7280;
}

/* Patient Details Panel */
.patient-details-panel {
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.select-prompt {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: #6b7280;
  padding: 32px;
}

.details-header {
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
}

.flex-center {
  display: flex;
  align-items: center;
}

.details-avatar {
  width: 96px;
  height: 96px;
  border-radius: 9999px;
  margin-right: 24px;
}

.details-name {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
}

.details-id {
  color: #4b5563;
}

.vip-status {
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #4b5563;
}

.vip-status .material-icons {
  color: #fcd34d;
}

.vip-text {
  margin-left: 4px;
}

.action-buttons {
  margin-left: auto;
  display: flex;
  gap: 8px;
}

.action-button {
  color: #6b7280;
  padding: 8px;
  border-radius: 9999px;
  background-color: transparent;
  border: none;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
}

.action-button:hover {
  background-color: #f3f4f6;
  color: #4f46e5;
}

.delete-button {
  color: #ef4444;
}

.delete-button:hover {
  background-color: #fef2f2;
  color: #dc2626;
}

.details-body {
  padding: 24px;
}

.tabs-container {
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
}

.tabs-nav {
  display: flex;
  gap: 32px;
}

.tab-link {
  white-space: nowrap;
  padding: 16px 4px;
  border-bottom: 2px solid transparent;
  font-weight: 500;
  font-size: 14px;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;
  cursor: pointer;
}

.tab-link:hover {
  color: #4b5563;
  border-color: #d1d5db;
}

.tab-link.tab-active {
  color: #4f46e5;
  border-color: #4f46e5;
}

.tab-content {
  overflow-y: auto;
  max-height: 500px; /* Adjust as needed */
  padding-right: 15px; /* for scrollbar */
}

/* Tab-specific content styles */
.grid-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 32px;
}

.info-item-full {
  grid-column: span 2;
}

.info-label {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 4px;
}

.info-text {
  color: #1f2937;
}

.concern-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.concern-tag {
  background-color: #fee2e2;
  color: #991b1b;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 9999px;
}

.info-label-members {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 8px;
}

.family-members {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.member-card {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
}

.member-avatar {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  margin-right: 12px;
}

.member-name {
  font-weight: 500;
  color: #1f2937;
}

.member-relation {
  font-size: 12px;
  color: #6b7280;
}

.add-member-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: #e5e7eb;
  color: #4b5563;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-member-button:hover {
  background-color: #d1d5db;
}

.appointment-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.appointment-item:last-child {
  border-bottom: none;
}

.appointment-date {
  font-weight: 600;
  font-size: 14px;
  color: #4f46e5;
  width: 120px;
  flex-shrink: 0;
}

.appointment-details {
  flex: 1;
}

.appointment-title {
  font-weight: 500;
  color: #1f2937;
}

.appointment-time {
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 28px;
  font-weight: 300;
  cursor: pointer;
  color: #6b7280;
  transition: color 0.2s;
}

.close-button:hover {
  color: #ef4444;
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  flex-grow: 1;
}

.form-section {
  margin-bottom: 32px;
}

.form-section h4 {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 8px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 4px;
}

.form-group input,
.form-group select {
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-color: #f9fafb;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 2px #eef2ff;
}

.form-group input:disabled {
  background-color: #e5e7eb;
  cursor: not-allowed;
}

.modal-footer {
  padding: 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
}

.save-button {
  background-color: #4f46e5;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.save-button:hover {
  background-color: #4338ca;
}
</style>

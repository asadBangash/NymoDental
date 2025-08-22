<template>
  <div class="main-container">
    <header class="header">
      <h1 class="header__title">John Doe</h1>
      <span class="header__patient-id">Patient ID: 12345</span>
      <div class="header__actions">
        <button class="header__button">
          <i class="fas fa-history"></i> Review History
        </button>
        <button class="header__button header__button--primary">
          <i class="fas fa-plus"></i> New Entry
        </button>
      </div>
    </header>

    <div class="tabs">
      <div
        class="tab"
        :class="{ 'tab--active': activeTab === 'soap' }"
        @click="activeTab = 'soap'"
      >
        SOAP Notes
      </div>
      <div
        class="tab"
        :class="{ 'tab--active': activeTab === 'treatment' }"
        @click="activeTab = 'treatment'"
      >
        Treatment Plans
      </div>
    </div>

    <div class="content-container">
      <div class="left-panel" v-show="activeTab === 'soap'">
        <div class="card">
          <div class="card__header">
            <h2 class="card__title">New SOAP Note</h2>
            <div class="card__header-right">
              <label for="template-select">Template:</label>
              <select id="template-select" class="template-select">
                <option>General Checkup</option>
              </select>
            </div>
          </div>
          <div class="card__body">
            <div class="form-group">
              <label for="subjective">Subjective</label>
              <textarea
                id="subjective"
                class="form-control"
                placeholder="Patient's chief complaint, history..."
              ></textarea>
            </div>
            <div class="form-group">
              <label for="objective">Objective</label>
              <textarea
                id="objective"
                class="form-control"
                placeholder="Clinical findings from examination..."
              ></textarea>
            </div>
            <div class="form-group">
              <label for="assessment">Assessment</label>
              <textarea
                id="assessment"
                class="form-control"
                placeholder="Diagnosis or differential diagnosis..."
              ></textarea>
            </div>
            <div class="form-group">
              <label for="plan">Plan</label>
              <textarea
                id="plan"
                class="form-control"
                placeholder="Treatment plan, medications, procedures..."
              ></textarea>
            </div>
            <div class="card__footer">
              <button class="button">Save Draft</button>
              <button class="button button--primary">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div class="right-panel">
        <div class="card" v-if="activeTab === 'soap'">
          <div class="card__header">
            <h2 class="card__title">Sample SOAP Notes</h2>
          </div>
          <div class="card__body">
            <div class="note-entry">
              <div class="note-header">
                <span class="note-date">2024-05-15</span>
                <span class="note-type">General Checkup</span>
              </div>
              <p>
                <strong>S:</strong> Patient reports sensitivity in the upper right
                quadrant, especially to cold beverages. No pain upon biting. Has not seen
                a dentist in two years.
              </p>
              <p>
                <strong>O:</strong> Clinical examination reveals an old amalgam filling on
                tooth #3. Small recurrent decay is visible on the distal margin. No
                mobility or signs of infection.
              </p>
              <p><strong>A:</strong> Recurrent decay, tooth #3.</p>
              <p>
                <strong>P:</strong> Discussed treatment options, including a new composite
                filling. Patient consented. Scheduled for next week.
              </p>
            </div>
            <div class="note-entry">
              <div class="note-header">
                <span class="note-date">2024-03-20</span>
                <span class="note-type">Emergency Visit</span>
              </div>
              <p>
                <strong>S:</strong> Patient presented with severe pain on the lower left
                side. The pain is sharp and constant.
              </p>
              <p>
                <strong>O:</strong> Examination shows a large carious lesion on tooth #19.
                Percussion and palpation tests were positive. X-ray confirms extensive
                decay into the pulp.
              </p>
              <p><strong>A:</strong> Irreversible pulpitis, tooth #19.</p>
              <p>
                <strong>P:</strong> Performed an emergency pulpectomy to alleviate pain.
                Prescribed antibiotics and anti-inflammatory medication. Recommended a
                root canal procedure with a crown.
              </p>
            </div>
          </div>
        </div>

        <div class="card" v-if="activeTab === 'treatment'">
          <div class="card__header">
            <h2 class="card__title">Current Treatment Plan</h2>
            <button class="button button--secondary">Edit Plan</button>
          </div>
          <div class="card__body">
            <table class="treatment-table">
              <thead>
                <tr>
                  <th>PROCEDURE</th>
                  <th>TOOTH</th>
                  <th>COST</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Examination</td>
                  <td>All</td>
                  <td>$50</td>
                  <td>
                    <span class="status-badge status-badge--completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>Filling</td>
                  <td>18</td>
                  <td>$120</td>
                  <td>
                    <span class="status-badge status-badge--scheduled">Scheduled</span>
                  </td>
                </tr>
                <tr>
                  <td>Extraction</td>
                  <td>21</td>
                  <td>$200</td>
                  <td>
                    <span class="status-badge status-badge--pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Crown</td>
                  <td>12</td>
                  <td>$800</td>
                  <td>
                    <span class="status-badge status-badge--proposed">Proposed</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="additional-notes">
              <h3 class="notes-title">Additional Notes</h3>
              <p class="notes-text">
                Patient has expressed some anxiety about the upcoming extraction. Consider
                offering sedation options.
              </p>
            </div>
            <div class="digital-signature">
              <h3 class="signature-title">Digital Signature</h3>
              <div class="signature-box">
                <span class="signature-text">Patient Signature Required</span>
                <button class="button button--primary signature-button">
                  <i class="fas fa-signature"></i> Capture Signature
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DentistApp",
  data() {
    return {
      activeTab: "soap",
    };
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

body {
  font-family: "Roboto", sans-serif;
  background-color: #f4f7f9;
  margin: 0;
  padding: 0;
  color: #333;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #e0e0e0;
}

.header__title {
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  color: #1a1a1a;
}

.header__patient-id {
  margin-left: 15px;
  color: #666;
}

.header__actions {
  margin-left: auto;
  display: flex;
  gap: 10px;
}

.header__button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.header__button:hover {
  background-color: #f0f0f0;
}

.header__button--primary {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

.header__button--primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.tabs {
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 40px;
}

.tab {
  padding: 12px 20px;
  cursor: pointer;
  font-weight: 500;
  color: #555;
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.2s, color 0.2s;
}

.tab:hover {
  color: #000;
}

.tab--active {
  border-bottom-color: #007bff;
  color: #000;
}

.content-container {
  display: flex;
  padding: 20px 40px;
  gap: 20px;
}

.left-panel,
.right-panel {
  flex: 1;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}

.card__header {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
}

.card__title {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.card__header-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

.template-select {
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.card__body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 80px;
  font-size: 14px;
}

.card__footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 10px;
}

.button {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.button--primary {
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
}

.button--primary:hover {
  background-color: #0069d9;
}

.button--secondary {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #e0e0e0;
}

.button--secondary:hover {
  background-color: #e2e6ea;
}

.treatment-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.treatment-table th,
.treatment-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.treatment-table th {
  background-color: #f8f9fa;
  font-weight: 500;
  color: #555;
  text-transform: uppercase;
  font-size: 12px;
}

.status-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
}

.status-badge--completed {
  background-color: #d4edda;
  color: #155724;
}

.status-badge--scheduled {
  background-color: #fff3cd;
  color: #856404;
}

.status-badge--pending {
  background-color: #f8d7da;
  color: #721c24;
}

.status-badge--proposed {
  background-color: #cce5ff;
  color: #004085;
}

.additional-notes {
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
}

.notes-title,
.signature-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
}

.notes-text {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
}

.digital-signature {
  margin-top: 20px;
}

.signature-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 15px;
  background-color: #f9f9f9;
}

.signature-text {
  font-style: italic;
  color: #999;
}

.signature-button {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Styles for the new notes section */
.note-entry {
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.note-entry:last-child {
  border-bottom: none;
}

.note-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
}

.note-date {
  color: #555;
}

.note-type {
  color: #007bff;
}

.note-entry p {
  margin: 5px 0;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
}
</style>

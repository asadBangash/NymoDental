<template>
  <div class="main-container">
    <main class="content-container">
      <div class="card patient-info">
        <div class="patient-header">
          <div>
            <h2 class="patient-name">Patient: {{ patient.name }}</h2>
            <p class="patient-details">
              DOB: {{ patient.dob }} | Patient ID: {{ patient.id }} | Last Visit:
              {{ patient.lastVisit }}
            </p>
          </div>
          <!-- <div class="button-group">
            <button class="btn secondary">View History</button>
            <button class="btn primary">
              <span class="material-symbols-outlined add-icon">add</span> New Entry
            </button>
          </div> -->
        </div>
      </div>

      <div class="card dental-chart">
        <div class="chart-header">
          <h3 class="chart-title">Dental Chart</h3>
          <div class="mode-switch">
            <button
              :class="{ 'mode-btn': true, active: chartMode === 'adult' }"
              @click="switchChartMode('adult')"
            >
              Adult (FDI)
            </button>
            <button
              :class="{ 'mode-btn': true, active: chartMode === 'pediatric' }"
              @click="switchChartMode('pediatric')"
            >
              Pediatric
            </button>
          </div>
        </div>
        <div class="chart-grid-container">
          <div class="chart-grid">
            <div class="jaw-row">
              <div class="quadrant quadrant-right">
                <div
                  v-for="tooth in currentTeeth.slice(0, 8)"
                  :key="tooth.number"
                  :class="getToothClass(tooth)"
                  @click="selectTooth(tooth)"
                >
                  <span class="tooth-number">{{ tooth.number }}</span>
                  <div v-if="tooth.hasNote" class="note-indicator">
                    <div class="note-dot"></div>
                  </div>
                </div>
              </div>
              <div class="quadrant quadrant-left">
                <div
                  v-for="tooth in currentTeeth.slice(8, 16)"
                  :key="tooth.number"
                  :class="getToothClass(tooth)"
                  @click="selectTooth(tooth)"
                >
                  <span class="tooth-number">{{ tooth.number }}</span>
                  <div v-if="tooth.hasNote" class="note-indicator">
                    <div class="note-dot"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="jaw-row">
              <div class="quadrant quadrant-right">
                <div
                  v-for="tooth in currentTeeth.slice(16, 24)"
                  :key="tooth.number"
                  :class="getToothClass(tooth)"
                  @click="selectTooth(tooth)"
                >
                  <span class="tooth-number">{{ tooth.number }}</span>
                  <div v-if="tooth.hasNote" class="note-indicator">
                    <div class="note-dot"></div>
                  </div>
                </div>
              </div>
              <div class="quadrant quadrant-left">
                <div
                  v-for="tooth in currentTeeth.slice(24, 32)"
                  :key="tooth.number"
                  :class="getToothClass(tooth)"
                  @click="selectTooth(tooth)"
                >
                  <span class="tooth-number">{{ tooth.number }}</span>
                  <div v-if="tooth.hasNote" class="note-indicator">
                    <div class="note-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="legend">
        <h4 class="legend-title">Legend:</h4>
        <div class="legend-item">
          <div class="legend-box decay"></div>
          <span>Decay</span>
        </div>
        <div class="legend-item">
          <div class="legend-box filling"></div>
          <span>Filling</span>
        </div>
        <div class="legend-item">
          <div class="legend-box crown"></div>
          <span>Crown</span>
        </div>
        <div class="legend-item">
          <div class="legend-box implant"></div>
          <span>Implant</span>
        </div>
        <div class="legend-item">
          <div class="legend-box missing"></div>
          <span>Missing</span>
        </div>
        <div class="legend-item">
          <div class="legend-note-dot"></div>
          <span>Note</span>
        </div>
      </div>

      <div class="navigation-area">
        <div class="navigation-controls">
          <button
            :class="{ 'nav-btn': true, 'nav-btn-active': activeView === 'images' }"
            @click="selectView('images')"
          >
            Images
          </button>
          <button
            :class="{ 'nav-btn': true, 'nav-btn-active': activeView === 'history' }"
            @click="selectView('history')"
          >
            History
          </button>
          <button
            :class="{ 'nav-btn': true, 'nav-btn-active': activeView === 'bpe' }"
            @click="selectView('bpe')"
          >
            BPE
          </button>
          <button
            :class="{ 'nav-btn': true, 'nav-btn-active': activeView === 'base' }"
            @click="selectView('base')"
          >
            Base Chart
          </button>
          <button
            :class="{ 'nav-btn': true, 'nav-btn-active': activeView === 'ortho' }"
            @click="selectView('ortho')"
          >
            Ortho
          </button>
        </div>
        <div class="dynamic-content">
          <div v-if="activeView === 'images'">
            <h4 class="content-title">
              Imaging for Tooth #{{ activeTooth ? activeTooth.number : "N/A" }}
            </h4>
            <div v-if="activeTooth && activeTooth.images.length > 0" class="image-grid">
              <div
                class="image-item"
                v-for="(image, index) in activeTooth.images"
                :key="index"
              >
                <img :alt="image.description" class="image-preview" :src="image.src" />
                <div class="image-overlay">
                  <span class="material-symbols-outlined zoom-icon">zoom_in</span>
                </div>
              </div>
            </div>
            <div v-else>
              <p class="no-content-text">
                No images available for this tooth. Please select a tooth with an image or
                upload one.
              </p>
            </div>
          </div>
          <div v-if="activeView === 'history'">
            <h4 class="content-title">Patient History</h4>
            <div class="history-list">
              <div class="history-item">
                <p class="history-date">03/15/2024</p>
                <p class="history-description">
                  Routine check-up and cleaning. No new issues found.
                </p>
              </div>
              <div class="history-item">
                <p class="history-date">10/21/2023</p>
                <p class="history-description">
                  Filling placed on tooth #17 due to minor decay.
                </p>
              </div>
              <div class="history-item">
                <p class="history-date">05/01/2023</p>
                <p class="history-description">
                  Initial consultation. Crown recommended for tooth #18.
                </p>
              </div>
            </div>
          </div>
          <div v-if="activeView === 'bpe'">
            <h4 class="content-title">BPE Chart</h4>
            <p class="bpe-text">
              **Basic Periodontal Examination (BPE)**: 
              BPE is a simple, rapid screening tool used to assess periodontal health.
              <br /><br />
              **Scores for today's visit (03/15/2024):**
              <ul class="bpe-list">
                <li>**Sextant 1 (17-14):** 1</li>
                <li>**Sextant 2 (13-23):** 0</li>
                <li>**Sextant 3 (24-27):** 1</li>
                <li>**Sextant 4 (37-34):** 2</li>
                <li>**Sextant 5 (33-43):** 1</li>
                <li>**Sextant 6 (44-47):** 2</li>
              </ul>
              *Note: Score 2 indicates calculus present, requiring removal. Score 1 indicates bleeding on probing.*
            </p>
          </div>
          <div v-if="activeView === 'base'">
            <h4 class="content-title">Base Chart</h4>
            <div class="base-chart-content">
              <p class="base-text">
                **Patient's Baseline Dental Condition (Initial Visit: 05/01/2023):**
              </p>
              <ul class="base-list">
                <li>**Existing Conditions:**</li>
                <li>- Tooth #18: Existing Crown.</li>
                <li>- Tooth #26: Implant.</li>
                <li>- Tooth #28: Missing.</li>
                <li>- Tooth #17: Small occlusal decay noted.</li>
              </ul>
              <p class="base-text">
                This chart serves as a foundation for tracking all future dental work and changes.
              </p>
            </div>
          </div>
          <div v-if="activeView === 'ortho'">
            <h4 class="content-title">Orthodontic Chart</h4>
            <div class="ortho-content">
              <p class="ortho-text">
                **Orthodontic Assessment:**
              </p>
              <ul class="ortho-list">
                <li>**Crowding:** Mild crowding in the lower anterior region.</li>
                <li>**Occlusion:** Class I occlusion with no crossbite.</li>
                <li>**Notes:** No immediate orthodontic treatment required. Patient to be monitored for any changes during routine visits.</li>
              </ul>
              <p class="ortho-text">
                *Patient declined orthodontic referral on 03/15/2024.*
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const patient = ref({
  name: "Emily Carter",
  dob: "05/12/1988",
  id: "123456",
  lastVisit: "03/15/2024",
});

const chartMode = ref("adult");
const activeTooth = ref(null);
const activeView = ref("images");

const adultTeeth = ref([
  // Upper Right Quadrant (18-11)
  {
    number: 18,
    isCrown: true,
    isImplant: false,
    isMissing: false,
    hasNote: true,
    surfaces: null,
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYIZ42a9f8CiUzhZNrVsaPFAPe2HfUaSpakjtMjDiY38QtxGVR_iFmBa7gRHPn50m5l9UUY5LebMuIZNuBLulA8wdvMup_x1SKKxg51Uin0bf0b6MpUb9d31lCoQQY56vhAkzuYH4870xODgbrbExVtuiaOyvNQvHNblo8zgDJh5Bm8CkaXyH8bIaNeWvk4tMfYEQHhkN0DW3_j9ujjpF83Ci7TbIo22yLXsV2FkWSE5vP6ux00U3phGhbF9MGEu_yNPa8lbfCy3M",
        description: "Crown x-ray",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYIZ42a9f8CiUzhZNrVsaPFAPe2HfUaSpakjtMjDiY38QtxGVR_iFmBa7gRHPn50m5l9UUY5LebMuIZNuBLulA8wdvMup_x1SKKxg51Uin0bf0b6MpUb9d31lCoQQY56vhAkzuYH4870xODgbrbExVtuiaOyvNQvHNblo8zgDJh5Bm8CkaXyH8bIaNeWvk4tMfYEQHhkN0DW3_j9ujjpF83Ci7TbIo22yLXsV2FkWSE5vP6ux00U3phGhbF9MGEu_yNPa8lbfCy3M",
        description: "Clinical photo",
      },
    ],
  },
  {
    number: 17,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: true, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYIZ42a9f8CiUzhZNrVsaPFAPe2HfUaSpakjtMjDiY38QtxGVR_iFmBa7gRHPn50m5l9UUY5LebMuIZNuBLulA8wdvMup_x1SKKxg51Uin0bf0b6MpUb9d31lCoQQY56vhAkzuYH4870xODgbrbExVtuiaOyvNQvHNblo8zgDJh5Bm8CkaXyH8bIaNeWvk4tMfYEQHhkN0DW3_j9ujjpF83Ci7TbIo22yLXsV2FkWSE5vP6ux00U3phGhbF9MGEu_yNPa8lbfCy3M",
        description: "Filling x-ray",
      },
    ],
  },
  {
    number: 16,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 15,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 14,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: true },
    },
    images: [
      {
        src: "https://i.imgur.com/4t9zLh5.jpg",
        description: "Decay x-ray",
      },
    ],
  },
  {
    number: 13,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 12,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 11,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  // Upper Left Quadrant (21-28)
  {
    number: 21,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 22,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 23,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 24,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 25,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 26,
    isCrown: false,
    isImplant: true,
    isMissing: false,
    hasNote: false,
    surfaces: null,
    images: [
      {
        src: "https://i.imgur.com/gK9x80Z.jpg",
        description: "Implant x-ray",
      },
      {
        src: "https://i.imgur.com/9nFkQW7.jpg",
        description: "Clinical photo",
      },
    ],
  },
  {
    number: 27,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 28,
    isCrown: false,
    isImplant: false,
    isMissing: true,
    hasNote: false,
    surfaces: null,
    images: [
      {
        src: "https://i.imgur.com/5E6Qj5P.jpg",
        description: "Missing tooth x-ray",
      },
    ],
  },
  // Lower Right Quadrant (48-41)
  {
    number: 48,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 47,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 46,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 45,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 44,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 43,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 42,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 41,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  // Lower Left Quadrant (31-38)
  {
    number: 31,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 32,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 33,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 34,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 35,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 36,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 37,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 38,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
]);

const pediatricTeeth = ref([
  // Upper Right Quadrant (55-51)
  {
    number: 55,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 54,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 53,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 52,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 51,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  // Upper Left Quadrant (61-65)
  {
    number: 61,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 62,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 63,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 64,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 65,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  // Lower Right Quadrant (85-81)
  {
    number: 85,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 84,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 83,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 82,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 81,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  // Lower Left Quadrant (71-75)
  {
    number: 71,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 72,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 73,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 74,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
  {
    number: 75,
    isCrown: false,
    isImplant: false,
    isMissing: false,
    hasNote: false,
    surfaces: {
      occlusal: { hasFilling: false, hasDecay: false },
      mesial: { hasFilling: false, hasDecay: false },
    },
    images: [],
  },
]);

const currentTeeth = computed(() => {
  return chartMode.value === "adult" ? adultTeeth.value : pediatricTeeth.value;
});

const switchChartMode = (mode) => {
  chartMode.value = mode;
  activeTooth.value = null;
  activeView.value = "images";
};

const selectTooth = (tooth) => {
  activeTooth.value = tooth;
  activeView.value = "images";
};

const selectView = (view) => {
  activeView.value = view;
};

const getToothClass = (tooth) => {
  const classes = ["tooth"];
  if (tooth.number === activeTooth.value?.number) {
    classes.push("active");
  }
  if (tooth.isCrown) classes.push("crown");
  if (tooth.isImplant) classes.push("implant");
  if (tooth.isMissing) classes.push("missing");

  if (tooth.surfaces?.occlusal?.hasDecay) {
    classes.push("decay");
  } else if (tooth.surfaces?.occlusal?.hasFilling) {
    classes.push("filling");
  }

  return classes.join(" ");
};

watch(chartMode, (newMode) => {
  if (newMode === "adult" && adultTeeth.value.length > 0) {
    activeTooth.value = adultTeeth.value[0];
  } else if (newMode === "pediatric" && pediatricTeeth.value.length > 0) {
    activeTooth.value = pediatricTeeth.value[0];
  }
});

if (adultTeeth.value.length > 0) {
  activeTooth.value = adultTeeth.value[0];
}
</script>

<style scoped>
:root {
  --primary-color: #4f46e5;
  --primary-hover: #4338ca;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --background-color: #f3f4f6;
  --border-color: #d1d5db;
  --white: #ffffff;
  --danger-color: #ef4444;
  --info-color: #3b82f6;
  --gold-color: #f59e0b;
  --silver-color: #9ca3af;
  --grey-color: #6b7280;
  --decay-color: #ef4444;
  --filling-color: #3b82f6;
  --crown-color: #f59e0b;
  --implant-color: #64748b;
  --missing-color: #9ca3af;
  --note-color: #fcd34d;
}

body {
  font-family: "Inter", sans-serif;
  background-color: var(--background-color);
  color: var(--text-primary);
  margin: 0;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.content-container {
  flex-grow: 1;
  max-width: 100%;
  padding: 32px;
}

.card {
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 24px;
}

.patient-info {
  margin-bottom: 32px;
}

.patient-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

@media (min-width: 640px) {
  .patient-header {
    flex-direction: row;
    align-items: center;
  }
}

.patient-name {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
}

.patient-details {
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
}

.button-group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
}

@media (min-width: 640px) {
  .button-group {
    margin-top: 0;
  }
}

.btn {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition-property: background-color, border-color, color, fill, stroke, opacity,
    box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--primary-color);
}

.primary {
  background-color: var(--primary-color);
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 8px;
}

.primary:hover {
  background-color: var(--primary-hover);
}

.secondary {
  background-color: #f3f4f6;
  color: #4b5563;
}

.secondary:hover {
  background-color: #e5e7eb;
}

.add-icon {
  font-size: 16px;
}

.dental-chart {
  margin-bottom: 32px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.chart-title {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
}

.mode-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f3f4f6;
  padding: 4px;
  border-radius: 8px;
}

.mode-btn {
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: all 0.3s ease-in-out;
  color: #4b5563;
}

.mode-btn.active {
  color: var(--white);
  background-color: var(--primary-color);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.mode-btn:hover:not(.active) {
  background-color: var(--white);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.chart-grid-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.chart-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 0;
  flex-shrink: 0;
}

.jaw-row {
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
}

@media (min-width: 640px) {
  .jaw-row {
    gap: 8px;
  }
}

.quadrant {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

@media (min-width: 640px) {
  .quadrant {
    gap: 6px;
  }
}

.quadrant-right {
  flex-direction: row-reverse;
}

.tooth {
  position: relative;
  width: 44px;
  height: 44px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: var(--white);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

@media (min-width: 768px) {
  .tooth {
    width: 48px;
    height: 48px;
  }
}

.tooth-number {
  font-size: 14px;
  font-weight: 700;
  color: #4b5563;
  position: relative;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
}

.tooth.active,
.tooth:hover {
  border-color: var(--primary-color);
  transform: scale(1.05);
  background-color: #eef2ff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.tooth.active .tooth-number,
.tooth:hover .tooth-number {
  transform: translateY(-2px);
}

.tooth.crown {
  background: linear-gradient(to bottom right, #fcd34d, #f59e0b);
  border-color: #f59e0b;
  color: var(--white);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.tooth.implant {
  background: linear-gradient(to bottom right, #cbd5e1, #64748b);
  border-color: #64748b;
  color: var(--white);
  box-shadow: 0 4x 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.tooth.missing {
  background-color: #d1d5db;
  border-color: #9ca3af;
  color: #6b7280;
  opacity: 0.6;
  text-decoration: line-through;
}

.tooth.decay {
  background-color: var(--decay-color);
  color: var(--white);
}

.tooth.filling {
  background-color: var(--filling-color);
  color: var(--white);
}

.note-indicator {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 16px;
  height: 16px;
  background-color: var(--note-color);
  border-radius: 50%;
  border: 2px solid var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.note-dot {
  width: 6px;
  height: 6px;
  background-color: #fcd34d;
  border-radius: 50%;
}

.card-section {
  margin-top: 32px;
  border-top: 1px solid #d1d5db;
  padding-top: 24px;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;
  font-size: 14px;
}

.legend-title {
  font-weight: 700;
  color: #4b5563;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-box {
  width: 14px;
  height: 14px;
  border-radius: 2px;
}

.legend-note-dot {
  width: 14px;
  height: 14px;
  background-color: var(--note-color);
  border-radius: 50%;
  border: 2px solid var(--white);
  position: relative;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.decay {
  background-color: var(--decay-color);
}

.filling {
  background-color: var(--filling-color);
}

.crown {
  background-image: linear-gradient(to bottom right, #fcd34d, #f59e0b);
}

.implant {
  background-image: linear-gradient(to bottom right, #cbd5e1, #64748b);
}

.missing {
  background-color: var(--missing-color);
}

.navigation-area {
  border-top: 1px solid #d1d5db;
  padding-top: 24px;
}

.navigation-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.nav-btn {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease-in-out;
  border: none;
  background-color: #f3f4f6;
  color: #4b5563;
  cursor: pointer;
}

.nav-btn:hover {
  background-color: #e5e7eb;
}

.nav-btn-active {
  color: var(--white);
  background-color: var(--primary-color);
}

.nav-btn-active:hover {
  background-color: var(--primary-hover);
}

.dynamic-content {
  background-color: #f9fafb;
  padding: 16px;
  border-radius: 8px;
}

.content-title {
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

@media (min-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .image-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.image-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
}

.image-preview {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: transform 0.3s ease-in-out;
}

.image-item:hover .image-preview {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 8px;
}

.image-item:hover .image-overlay {
  opacity: 1;
}

.zoom-icon {
  font-size: 32px;
  color: var(--white);
}

.no-content-text {
  font-size: 14px;
  color: #4b5563;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.history-item {
  background-color: var(--white);
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.history-date {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 4px;
}

.history-description {
  font-size: 14px;
  color: #1f2937;
}

.bpe-text, .base-text, .ortho-text {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
}

.bpe-list, .base-list, .ortho-list {
  margin: 8px 0 16px 20px;
  list-style-type: disc;
}
</style>
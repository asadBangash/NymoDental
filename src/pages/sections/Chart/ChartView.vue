<template>
  <div class="main-container">
    <main class="content-container">
      <div class="card patient-info full-width">
        <div class="patient-header">
          <div>
            <h2 class="patient-name">Patient: {{ patient.name }}</h2>
            <p class="patient-details">
              DOB: {{ patient.dob }} | Patient ID: {{ patient.id }} | Last Visit:
              {{ patient.lastVisit }}
            </p>
          </div>
        </div>
      </div>

      <div class="card dental-chart full-width">
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

      <div class="legend full-width">
        <h4 class="legend-title">Legend:</h4>
        <div class="legend-items-container">
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
      </div>

      <div class="navigation-area full-width">
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

const getToothClass = (tooth) => {
  return {
    tooth: true,
    selected: activeTooth.value === tooth,
    decay: hasDecay(tooth),
    filling: hasFilling(tooth),
    crown: tooth.isCrown,
    implant: tooth.isImplant,
    missing: tooth.isMissing,
    "has-images": tooth.images.length > 0,
    "has-note": tooth.hasNote,
  };
};

const hasDecay = (tooth) => {
  if (!tooth.surfaces) return false;
  return Object.values(tooth.surfaces).some((surface) => surface.hasDecay);
};

const hasFilling = (tooth) => {
  if (!tooth.surfaces) return false;
  return Object.values(tooth.surfaces).some((surface) => surface.hasFilling);
};

const switchChartMode = (mode) => {
  chartMode.value = mode;
  activeTooth.value = null; // Reset selection when switching modes
};

const selectTooth = (tooth) => {
  activeTooth.value = tooth;
  // Automatically switch to images view when a tooth is selected
  activeView.value = "images";
};

const selectView = (view) => {
  activeView.value = view;
};

// If a tooth is selected and the chart mode changes, clear the active tooth
watch(chartMode, () => {
  activeTooth.value = null;
});

watch(activeTooth, (newTooth) => {
  if (newTooth) {
    console.log("Selected tooth:", newTooth.number);
  }
});
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  background-color: #f3f4f6;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
}

.content-container {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}

.card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 24px;
}

.patient-info {
  margin-bottom: 24px;
}

.full-width {
  width: 100%;
  max-width: 100%;
}

.patient-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.patient-name {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.patient-details {
  font-size: 14px;
  color: #6b7280;
  margin: 4px 0 0 0;
}

.dental-chart {
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.chart-title {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.mode-switch {
  display: flex;
  background-color: #e5e7eb;
  border-radius: 8px;
  padding: 4px;
}

.mode-btn {
  background-color: transparent;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  color: #4b5563;
}

.mode-btn.active {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #4f46e5;
}

.chart-grid-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.chart-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 1000px;
}

.jaw-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.quadrant {
  display: flex;
  gap: 8px;
}

.quadrant-right {
  flex-direction: row-reverse;
}

.tooth {
  width: 48px;
  height: 48px;
  background-color: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.tooth:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tooth.selected {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px #c7d2fe;
}

.tooth-number {
  z-index: 1;
}

.note-indicator {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 6px;
  height: 6px;
  background-color: #fcd34d;
  border-radius: 50%;
}

.tooth.decay::after,
.tooth.filling::after,
.tooth.crown::after,
.tooth.implant::after,
.tooth.missing::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  opacity: 0.8;
  z-index: 0;
}

.tooth.decay::after {
  background-color: #ef4444;
}

.tooth.filling::after {
  background-color: #3b82f6;
}

.tooth.crown::after {
  background-color: #9ca3af;
}

.tooth.implant::after {
  background-color: #10b981;
}

.tooth.missing::after {
  background-color: #6b7280;
}

.legend {
}

.legend-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
}

.legend-items-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-box {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.legend-box.decay {
  background-color: #ef4444;
}
.legend-box.filling {
  background-color: #3b82f6;
}
.legend-box.crown {
  background-color: #9ca3af;
}
.legend-box.implant {
  background-color: #10b981;
}
.legend-box.missing {
  background-color: #6b7280;
}

.legend-note-dot {
  width: 16px;
  height: 16px;
  background-color: #fcd34d;
  border-radius: 50%;
}

.navigation-area {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.navigation-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.nav-btn {
  background-color: #e5e7eb;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-btn:hover {
  background-color: #d1d5db;
}

.nav-btn-active {
  background-color: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.dynamic-content {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 24px;
}

.content-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.no-content-text {
  font-style: italic;
  color: #6b7280;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.history-item {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 16px;
}

.history-date {
  font-size: 14px;
  font-weight: 600;
  color: #4f46e5;
  margin: 0 0 4px 0;
}

.history-description {
  font-size: 14px;
  margin: 0;
  color: #4b5563;
}

.bpe-text, .base-text, .ortho-text {
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
}

.bpe-list, .base-list, .ortho-list {
  margin: 12px 0 0 20px;
  padding: 0;
  list-style: disc;
}
</style>
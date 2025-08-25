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

const currentTeeth = computed(() =>
  chartMode.value === "adult" ? adultTeeth.value : pediatricTeeth.value
);

const switchChartMode = (mode) => {
  chartMode.value = mode;
  activeTooth.value = null; // Reset selection on mode switch
};

const selectTooth = (tooth) => {
  activeTooth.value = tooth;
};

const selectView = (view) => {
  activeView.value = view;
};

// Watch for changes in activeTooth and log them for debugging
watch(activeTooth, (newVal) => {
  if (newVal) {
    console.log(`Tooth #${newVal.number} selected.`);
  }
});

const getToothClass = (tooth) => {
  const classes = ["tooth"];
  if (tooth.isCrown) classes.push("crown");
  if (tooth.isImplant) classes.push("implant");
  if (tooth.isMissing) classes.push("missing");
  if (activeTooth.value && activeTooth.value.number === tooth.number) {
    classes.push("active");
  }
  return classes.join(" ");
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Main container and content area styles */
.main-container {
  background-color: #f3f4f6;
  font-family: 'Poppins', sans-serif;
  color: #374151;
  display: flex;
  justify-content: center;
  padding: 24px;
  min-height: 100vh;
}

/* Set specific color for headings for consistency */
.chart-header h3, .legend h4, .content-title, .patient-name {
  color: #333;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
}
/* ... rest of the styles ... */
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 24px;
}

.patient-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.patient-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
}

.patient-name {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.patient-details {
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
}

.dental-chart {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.chart-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.mode-switch {
  display: flex;
  border-radius: 4px;
  background-color: #e5e7eb;
}

.mode-btn {
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  color: #6b7280;
  transition: background-color 0.2s ease, color 0.2s ease;
  border-radius: 4px;
}

.mode-btn.active {
  background-color: #fff;
  color: #1f2937;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.chart-grid-container {
  overflow-x: auto;
  padding-bottom: 12px;
}

.chart-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.jaw-row {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.quadrant {
  display: flex;
  gap: 4px;
  flex-wrap: nowrap;
}

.quadrant-right {
  flex-direction: row-reverse;
}

.tooth {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  background-color: #e5e7eb;
  border: 2px solid transparent;
  border-radius: 4px;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  flex-shrink: 0;
}

.tooth.active {
  border-color: #4f46e5;
  background-color: #c7d2fe;
}

.tooth-number {
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 4px;
}

.note-indicator {
  position: absolute;
  top: 4px;
  right: 4px;
}

.note-dot {
  width: 6px;
  height: 6px;
  background-color: #f59e0b;
  border-radius: 50%;
}

/* Legend styles */
.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.legend-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #4b5563;
}

.legend-box {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.decay {
  background-color: #ef4444;
}

.filling {
  background-color: #3b82f6;
}

.crown {
  background-color: #10b981;
}

.implant {
  background-color: #9333ea;
}

.missing {
  background-color: #6b7280;
}

.legend-note-dot {
  width: 10px;
  height: 10px;
  background-color: #f59e0b;
  border-radius: 50%;
}

/* Navigation and dynamic content styles */
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
  padding: 10px 18px;
  border: 1px solid #d1d5db;
  background-color: #fff;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.nav-btn:hover {
  background-color: #f9fafb;
}

.nav-btn-active {
  background-color: #4f46e5;
  color: #fff;
  border-color: #4f46e5;
}

.dynamic-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.content-title {
  font-size: 18px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 16px;
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
  font-size: 48px;
  color: #fff;
}
</style>
<template>
  <div class="patient-dashboard-container">
    <aside class="patient-list-container">
      <div class="patient-list-header">
        <h1 class="patient-list-title">All Patients</h1>
        <button class="new-patient-btn">
          <span class="material-icons icon">add</span>
          New Patient
        </button>
      </div>
      <div class="patient-list">
        <div class="patient-card active">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_0xOuNnV1jQVrpOwqGr-EemBuDCy_IRJRSUxw6kSHFVaNwLDUXiuOf7SvW0PXEj9kG6fpWbVuU_AT7uf3lunjjPn6e5ERefMU485vMH6wdmxmlhVDDEPw2yq0eyuMBaLYPukucaneQM9H8qEfRRDFrf_nhZgkwcPknJkCdWecoSKTsrQWO7gb0HWGBLlWM-2tMiQpj59JEwzzPdIx5s96TqEjDmP_g7K60CTZW7e9eh88WiVruBDMY0PUBdbiCptiw99QEcgPBQU"
            alt="Dr. Alistair Finch"
            class="profile-pic"
          />
          <div>
            <p class="name">Dr. Alistair Finch</p>
            <p class="last-visit">Last Visit: 2 days ago</p>
          </div>
        </div>
        <div class="patient-card">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu52Pcv-F9mVsQQwHlEu15Zrf67X4ULEHe7lYGGlX6P27yjDoGg9YIyuV4z-Y2NrTlNw_q2DDa85xVNBlFd0Jtkdf5fyfUdxCEBkFL0p-8AXc4RhEP4RuxB2XQLrfyOcnKz6g2Vpae0Ch7d46U4Zdc851M2gFofabqGKV7bu3O-poU5mne173G_CefcEBGMetuNGS0K_tLoAw34wDv5JmgmbUAfJRq-F5G8besQqLKSngT2YNEX_wcLDG1iQsTIw96tX_wt9P_Ck4"
            alt="Isabella Chen"
            class="profile-pic"
          />
          <div>
            <p class="name">Isabella Chen</p>
            <p class="last-visit">Last Visit: 5 days ago</p>
          </div>
        </div>
        <div class="patient-card">
          <img
            alt="Marcus Thorne"
            class="profile-pic"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDlETUgBbE61gFNR9TmH2GV5rzQb7F5aVhASiX7lghNOHdvfGnT7FwkhFTwsd8RUvPuh7v6PhVlWgUTQ6APaP3RPaubsCPur9M4MN7XhU84jp7EmFyZ5bRBMdmx6fsoEA3BEmyPMSsM5cZjPndXW24bta6RDYKKM-7sB_3JqSi6NV3lc4mfksf26QvjTGrysg-qTOmv3ETLkaVjgcSpgnTLviKZfn8_wLKuwWn5r8lxHs6RkVC-_K5idrDDoBEvxaU3V6fAh1SPww"
          />
          <div>
            <p class="name">Marcus Thorne</p>
            <p class="last-visit">Last Visit: 1 week ago</p>
          </div>
        </div>
        <div class="patient-card">
          <img
            alt="Sophia Rodrigues"
            class="profile-pic"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9TjLOD1YFmWdHKLNSekIssYca35pVIDyMkdRljuCys1Wgzg8-siP0mlejQ93BzM2PYP75_-SJhwRCw0-ASEkhGRVmUf0iDGUPPGcc6sO3vabpLeflKChh-vvx6ip1QDoWvCIz5qmS15BpWcwmebb0CzfHhKQZ_TWw7FOeNTAERknUcDWa6qrGBCyrZMFOJWy7jJ2cfgFOgxO3hl4PnADy2GFP4-Ga3YuPh8nQmRYhhRhPXArWUdl5Oj8lQsEYS17vAkslbRjipWg"
          />
          <div>
            <p class="name">Sophia Rodrigues</p>
            <p class="last-visit">Last Visit: 1 month ago</p>
          </div>
        </div>
        <div class="patient-card">
          <img
            alt="Leo Carter"
            class="profile-pic"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDK6WS-xIQiT_PrpVbBDZpsClS5qEpQQrgCJ2IcJrwJ8kiSmnQXs8p-LKlf0YorLdlXvkHw_akJukyR6hKrLcyCqDK87XpxDxnr-4qGQnfP8elPiqq-dhWE10I2pi8xTCEbXDTfx5bpOTCm6ldbZuKNDOSSgrSoJuwgepaDG1GgHZRydXdj2bFhBFGkwm7_FpCi-aChqf3EJf0CoQCFxEpbRXme6MJDIwvhAPW_tUvRnQ_rB_w0Lj_peQc1BxfzlEBkdjSgF1Ybsk"
          />
          <div>
            <p class="name">Leo Carter</p>
            <p class="last-visit">Last Visit: 2 months ago</p>
          </div>
        </div>
        <div class="patient-card">
          <img
            alt="Dr. Olivia Hayes"
            class="profile-pic"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq3nnHcjPKpzPEkYsZn4AJ1_jucSCCsRYG-9XewpmmygOfB4XF9sC7VNugA0hVEFAyWPov0wzV3URhq6vmABQ5uCkFGei3xcsNgXt7g1aLp6UbhaA7LSU7bKfLyzZdSVYzQU6cah8EmD4t37oIIOdrJZRW6c7TDkP4LyYuwc9-x4VD3D__YCw1VQCamVcnLxnOGD-jzbqNq0M0cqZ_vfJ0YOEZqlZQXiFezHUF9DxmBz4fzvOohIVwRa4ir7FZLVyh6hA8DPpdHaw"
          />
          <div>
            <p class="name">Dr. Olivia Hayes</p>
            <p class="last-visit">Last Visit: 3 weeks ago</p>
          </div>
        </div>
      </div>
    </aside>

    <main class="main-content-container">
      <div class="dental-chart-card">
        <h2 class="chart-title">Dental Chart</h2>
        <div class="chart-grid">
          <div class="tooth-group">
            <div class="tooth-box">18</div>
            <div class="tooth-box lower">48</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">17</div>
            <div class="tooth-box lower">47</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">16</div>
            <div class="tooth-box lower">46</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box restoration">15</div>
            <div class="tooth-box lower">45</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box caries">14</div>
            <div class="tooth-box lower">44</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">13</div>
            <div class="tooth-box lower">43</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">12</div>
            <div class="tooth-box lower">42</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">11</div>
            <div class="tooth-box lower">41</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">21</div>
            <div class="tooth-box lower">31</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">22</div>
            <div class="tooth-box lower">32</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">23</div>
            <div class="tooth-box lower">33</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">24</div>
            <div class="tooth-box lower">34</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">25</div>
            <div class="tooth-box lower">35</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box restoration">26</div>
            <div class="tooth-box lower">36</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">27</div>
            <div class="tooth-box lower">37</div>
          </div>
          <div class="tooth-group">
            <div class="tooth-box">28</div>
            <div class="tooth-box lower">38</div>
          </div>
        </div>
        <div class="legend-section">
          <h3 class="legend-title">Legend</h3>
          <div class="legend-items">
            <div class="legend-item">
              <span class="legend-color-box red-bg"></span>Caries
            </div>
            <div class="legend-item">
              <span class="legend-color-box blue-bg"></span>Restoration
            </div>
            <div class="legend-item">
              <span class="legend-color-box yellow-bg"></span>Impacted
            </div>
            <div class="legend-item">
              <span class="legend-color-box green-bg"></span>Sealant
            </div>
            <div class="legend-item">
              <span class="legend-color-box missing"></span>Missing
            </div>
          </div>
        </div>
      </div>

      <div class="patient-details-card">
        <div class="details-header">
          <div class="profile-section">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP5WpTu4qluvThwQkYMFWmq2DaGuJq5Luj79q2CmcIXVFsO6TarxJeq1UcOgbrwwbNA8Yy-FE9bmnBn34eGtMpRq21yyZKVNc_JHYAO9n8D23mVplPAGFOZvw0UWPymre7NepJLmwWkaoRDMTeCLIE87Cc3La625Q-euVcCcGYfjQz5fv2TYt41rcm6i-Krh7rV_dK2Y5KV3u0s98nPEvNCAv7W119zqoDDSlYJg9n8x712M14-nz-VCzC6p0gxscGC5mkDy21uh4"
              alt="Dr. Alistair Finch"
              class="large-profile-pic"
            />
            <div>
              <h2 class="patient-name">Dr. Alistair Finch</h2>
              <p class="patient-id">ID: 1</p>
              <span class="vip-tag">
                <span class="material-icons star-icon">star</span>
                VIP Patient
              </span>
            </div>
          </div>
          <div class="action-buttons">
            <button class="action-btn">
              <span class="material-icons">edit</span>
            </button>
            <button class="action-btn">
              <span class="material-icons">print</span>
            </button>
            <button class="action-btn delete-btn">
              <span class="material-icons">delete</span>
            </button>
          </div>
        </div>
        <div class="details-content">
          <div class="images-section">
            <h3 class="section-title">Images & Thumbnails</h3>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyxkmeehmdUajG41EYO16CI4RY45MOs3iKCPRlBIgkPqSs815eH0c-TLMfD1UqZpxtbpYzDl3nbO0Xkxm6d2H9Tkgwwht83IBaEZ89CmluiKgXTM2dJCxCIMgyFVzdT7Fkpd7_V67nUqeXaqMdz6HpuZ3nVIXbvpBV3RgihIyblYe_u6g6j-w-lOrPhcX_6LW0Zc0n9eDJoPbw2oX6NBk6W4_J_0v2_wMO6DAIUcWcvQpPcSC-Rk1ANaqySEfwlq2MsQyoTrHDj-Q"
              alt="Dental x-ray of patient's jaw"
              class="main-image"
            />
            <div class="thumbnails-grid">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuoU85xu0JMmEN1lqsqI4QEQ7gr_f8x_VNaOJp_JFS8bEb9pcUT8A7yms2rIqSlP19tOTb9kwBNtxdsoF8f6TusbDd6IpYuJhWUkFONxkVZwE19PxGhoNkObsxzt9vj9IISUEPVW-Kii13zSKGpZ1_OxqgC7ah-7GFCyWGGT967w1lCIkkO6FxY0lVpwL_dyOIETVKW3TZzc36rY_PpCETBeMcgj8kgB7INGfFScv_VY_N5LesIBOxj8CmoKg9c7kM2BCvXEQXSUM"
                alt="Thumbnail of dental x-ray 1"
                class="thumbnail"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-U_nb1MTSiqCEM0y6kIyDTajTofKCRt4hrRRkaRnzIZlb5MNCfzGjkTeNvuOJj_yEKEdY6T1Z5rDCO-wd2nf6TAt45tLI972hd--2EuTIwV4R2mf1OnZuZP0BXK7ML0JEKHqn9S8ZYFXnQtEFNpuIuDvW87s_0kai49JBL3WNEu5fK4PlexbiT0l-opyMNvu1j7afe43mOzF71vyVaNKuTgEHDj0pz_EkO6-WeafKc_71YT4ixk5tAWhGmsiXOBceE9eqqDuVYoQ"
                alt="Thumbnail of dental x-ray 2"
                class="thumbnail active"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu5r9Tet9VxnYDhTGgXabrgo4ylqhO6i0LegVaNqXPVBtVDNFsT8RxNu4dfkjPx3XpfrLTTWh6DpMYC_XqOet9OAgOL5lCXJg6ZpyR-fj-prPKXH2k3NzhirfRVoVm_0OJ_rwCAUG19KPEcCUuSJ19ZEcKSjlojKhA34KrTiax-q1M0z16yn2wfktWWzKoiwn7Vci8EeyHHrEBkxkwZeZbez_qyZrd4pAlAJqBwIiE0lkCEX2zE5u3SuUoQJfgY-jBq2g8C_9WfBM"
                alt="Thumbnail of dental x-ray 3"
                class="thumbnail"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFoJ01H21JtJ48R_tLp8jXyJt7-3U8lWjV8tS0bH0kR-5lX3wW_9cT-2hFjY_hP9zQx_kL2jGkPzR-gPjC_7cT-6wJzX_3tB-vG_6sT8xJ-pP_lYwZ7wX-vRjD9eK-vJ_wW_vP_lYwZ7wX-vRjD9eK-vJ_wW_vP_lYwZ7wX-vRjD9eK-vJ_wW_vP_lYwZ7wX-vRjD9eK-vJ_w"
                alt="Thumbnail of dental x-ray 4"
                class="thumbnail"
              />
            </div>
          </div>
          <div class="info-section">
            <h3 class="section-title">Patient Info</h3>
            <div class="info-group">
              <p class="info-label">Full Name:</p>
              <p class="info-value">Dr. Alistair Finch</p>
            </div>
            <div class="info-group">
              <p class="info-label">Date of Birth:</p>
              <p class="info-value">1985-05-15</p>
            </div>
            <div class="info-group">
              <p class="info-label">Email:</p>
              <p class="info-value">alistair.finch@example.com</p>
            </div>
            <div class="info-group">
              <p class="info-label">Phone:</p>
              <p class="info-value">+44 7700 900001</p>
            </div>

            <h3 class="section-title concerns-title">Primary Dental Concerns</h3>
            <div class="concerns-tags">
              <span class="concern-tag blue-tag">Toothache</span>
              <span class="concern-tag red-tag">Cavity</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "PatientDashboard",
};
</script>

<style scoped>
/* General Layout */
.patient-dashboard-container {
  display: flex;
  height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: #f9fafb; /* bg-gray-50 */
}

/* Patient List Section (formerly Sidebar) */
.patient-list-container {
  width: 320px; /* w-80 */
  background-color: white;
  padding: 24px; /* p-6 */
  border-right: 1px solid #e5e7eb; /* border-r border-gray-200 */
  overflow-y: auto;
}

.patient-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px; /* mb-6 */
}

.patient-list-title {
  font-size: 20px; /* text-xl */
  font-weight: 700; /* font-bold */
  color: #1f2937; /* text-gray-800 */
}

.new-patient-btn {
  display: flex;
  align-items: center;
  background-color: #4f46e5; /* bg-indigo-600 */
  color: white;
  padding: 8px 16px; /* px-4 py-2 */
  border-radius: 8px; /* rounded-lg */
  transition-property: background-color;
  transition-duration: 150ms;
}

.new-patient-btn:hover {
  background-color: #4338ca; /* hover:bg-indigo-700 */
}

.icon {
  margin-right: 8px; /* mr-2 */
}

.patient-list {
  display: flex;
  flex-direction: column;
  gap: 16px; /* space-y-4 */
}

.patient-card {
  display: flex;
  align-items: center;
  padding: 12px; /* p-3 */
  border-radius: 8px; /* rounded-lg */
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 150ms;
}

.patient-card:hover {
  background-color: #f3f4f6; /* hover:bg-gray-100 */
}

.patient-card.active {
  background-color: #eef2ff; /* bg-indigo-100 */
}

.profile-pic {
  width: 48px; /* w-12 */
  height: 48px; /* h-12 */
  border-radius: 9999px; /* rounded-full */
  margin-right: 16px; /* mr-4 */
}

.name {
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* text-gray-800 */
}

.last-visit {
  font-size: 14px; /* text-sm */
  color: #6b7280; /* text-gray-500 */
}

/* Main Content Section */
.main-content-container {
  flex: 1; /* flex-1 */
  padding: 32px; /* p-8 */
  overflow-y: auto;
}

/* Dental Chart Card */
.dental-chart-card {
  background-color: white;
  padding: 24px; /* p-6 */
  border-radius: 8px; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-bottom: 32px; /* mb-8 */
}

.chart-title {
  font-size: 20px; /* text-xl */
  font-weight: 700; /* font-bold */
  color: #111827; /* text-gray-900 */
  margin-bottom: 16px; /* mb-4 */
}

.chart-grid {
  display: flex;
  justify-content: center;
  gap: 8px; /* space-x-2 */
  font-size: 14px; /* text-sm */
  color: #4b5563; /* text-gray-600 */
  margin-bottom: 16px; /* mb-4 */
}

.tooth-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tooth-box {
  width: 32px; /* w-8 */
  height: 32px; /* h-8 */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d5db; /* border */
  border-radius: 6px; /* rounded-md */
}

.tooth-box.lower {
  margin-top: 4px; /* mt-1 */
}

.tooth-box.restoration {
  border-color: #3b82f6; /* border-blue-500 */
  background-color: #dbeafe; /* bg-blue-100 */
  color: #2563eb; /* text-blue-600 */
}

.tooth-box.caries {
  border-color: #ef4444; /* border-red-500 */
  background-color: #fee2e2; /* bg-red-100 */
  color: #dc2626; /* text-red-600 */
}

.legend-section {
  border-top: 1px solid #e5e7eb; /* border-t */
  padding-top: 16px; /* pt-4 */
}

.legend-title {
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* text-gray-800 */
  margin-bottom: 12px; /* mb-3 */
}

.legend-items {
  display: flex;
  align-items: center;
  gap: 24px; /* space-x-6 */
  font-size: 14px; /* text-sm */
  color: #374151; /* text-gray-700 */
}

.legend-item {
  display: flex;
  align-items: center;
}

.legend-color-box {
  width: 16px; /* w-4 */
  height: 16px; /* h-4 */
  border-radius: 9999px; /* rounded-full */
  margin-right: 8px; /* mr-2 */
}

.red-bg {
  background-color: #ef4444; /* bg-red-500 */
}

.blue-bg {
  background-color: #3b82f6; /* bg-blue-500 */
}

.yellow-bg {
  background-color: #f59e0b; /* bg-yellow-500 */
}

.green-bg {
  background-color: #22c55e; /* bg-green-500 */
}

.missing {
  border: 1px solid #9ca3af; /* border border-gray-400 */
}

/* Patient Details Card */
.patient-details-card {
  background-color: white;
  padding: 32px; /* p-8 */
  border-radius: 8px; /* rounded-lg */
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.details-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px; /* mt-10 */
}

.profile-section {
  display: flex;
  align-items: center;
}

.large-profile-pic {
  width: 96px; /* w-24 */
  height: 96px; /* h-24 */
  border-radius: 9999px; /* rounded-full */
  margin-right: 24px; /* mr-6 */
  border: 4px solid #eef2ff; /* border-4 border-indigo-100 */
}

.patient-name {
  font-size: 30px; /* text-3xl */
  font-weight: 700; /* font-bold */
  color: #111827; /* text-gray-900 */
}

.patient-id {
  font-size: 16px; /* text-base */
  color: #6b7280; /* text-gray-500 */
}

.vip-tag {
  display: inline-flex;
  align-items: center;
  background-color: #fefce8; /* bg-yellow-100 */
  color: #92400e; /* text-yellow-800 */
  font-size: 14px; /* text-sm */
  font-weight: 500; /* font-medium */
  padding: 4px 12px; /* px-3 py-1 */
  border-radius: 9999px; /* rounded-full */
  margin-top: 12px; /* mt-3 */
}

.star-icon {
  font-size: 16px; /* text-base */
  margin-right: 4px; /* mr-1 */
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 8px; /* space-x-2 */
  color: #4b5563; /* text-gray-600 */
}

.action-btn {
  padding: 12px; /* p-3 */
  border-radius: 9999px; /* rounded-full */
  transition-property: background-color;
  transition-duration: 150ms;
}

.action-btn:hover {
  background-color: #f3f4f6; /* hover:bg-gray-100 */
}

.delete-btn:hover {
  background-color: #fef2f2; /* hover:bg-red-50 */
  color: #ef4444; /* text-red-500 */
}

.details-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px; /* gap-12 */
}

@media (min-width: 768px) {
  .details-content {
    grid-template-columns: 2fr 1fr;
  }
}

.images-section {
  grid-column: span 1;
}

@media (min-width: 768px) {
  .images-section {
    grid-column: span 2;
  }
}

.section-title {
  font-size: 20px; /* text-xl */
  font-weight: 700; /* font-bold */
  color: #111827; /* text-gray-900 */
  margin-bottom: 16px; /* mb-4 */
}

.main-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px; /* rounded-xl */
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-bottom: 16px; /* mb-4 */
}

.thumbnails-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px; /* gap-4 */
}

.thumbnail {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px; /* rounded-lg */
  cursor: pointer;
  transition-property: opacity;
  transition-duration: 150ms;
  border: 4px solid transparent;
}

.thumbnail:hover {
  opacity: 0.8;
}

.thumbnail.active {
  border-color: #4f46e5; /* border-indigo-500 */
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.info-section {
  grid-column: span 1;
}

.info-group {
  margin-bottom: 20px; /* space-y-5 */
}

.info-label {
  color: #6b7280; /* text-gray-500 */
  font-size: 14px; /* text-sm */
}

.info-value {
  color: #1f2937; /* text-gray-800 */
  font-weight: 600; /* font-semibold */
}

.concerns-title {
  margin-top: 40px; /* mt-10 */
}

.concerns-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* gap-2 */
}

.concern-tag {
  font-size: 14px; /* text-sm */
  font-weight: 500; /* font-medium */
  padding: 8px 16px; /* px-4 py-2 */
  border-radius: 9999px; /* rounded-full */
}

.blue-tag {
  background-color: #dbeafe; /* bg-blue-100 */
  color: #1e40af; /* text-blue-800 */
}

.red-tag {
  background-color: #fee2e2; /* bg-red-100 */
  color: #991b1b; /* text-red-800 */
}
</style>

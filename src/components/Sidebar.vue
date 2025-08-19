<template>
  <div class="sidebar">
    <div class="sidebar-logo">
      <img src="/logo/logo.svg" alt="logo" />
    </div>

    <i
      class="fas fa-table-columns"
      :class="{ active: active === 'dashboard' }"
      @click="$emit('navigate', 'dashboard')"
      title="Dashboard"
    ></i>
    <!-- <i
      class="fas fa-user-friends"
      :class="{ active: active === 'crm' }"
      @click="$emit('navigate', 'crm')"
      title="CRM"
    ></i> -->
    <!--fas fa-book-medical-->
    <i
      class="fas fa-user-friends"
      :class="{ active: active === 'patients' }"
      @click="$emit('navigate', 'patients')"
      title="Service Booking & History"
    ></i>
    <i
      class="fas fa-calendar-alt"
      :class="{ active: active === 'appointments' }"
      @click="$emit('navigate', 'appointments')"
      title="Appointments Calendar"
    ></i>
    <i
      class="fas fa-chart-pie"
      :class="{ active: active === 'chart' }"
      @click="$emit('navigate', 'chart')"
      title="Chart"
    ></i>
    <i
      class="fas fa-folder-open"
      :class="{ active: active === 'files' }"
      @click="$emit('navigate', 'files')"
      title="File Storage"
    ></i>

    <i
      class="fas fa-user-md"
      :class="{ active: active === 'staff' }"
      @click="$emit('navigate', 'staff')"
      title="Staff Management"
    ></i>
    <!-- <i
      class="fas fa-envelope"
      :class="{ active: active === 'messaging' }"
      @click="$emit('navigate', 'messaging')"
      title="Messaging"
    ></i>
    <i
      class="fas fa-file-invoice-dollar"
      :class="{ active: active === 'billing' }"
      @click="$emit('navigate', 'billing')"
      title="Billing & Invoicing"
    ></i>
    <i
      class="fas fa-pills"
      :class="{ active: active === 'inventory' }"
      @click="$emit('navigate', 'inventory')"
      title="Inventory Tracking"
    ></i> -->
    <!-- <i
      class="fas fa-file-signature"
      :class="{ active: active === 'consent' }"
      @click="$emit('navigate', 'consent')"
      title="Consent Forms"
    ></i>
    <i
      class="fas fa-notes-medical"
      :class="{ active: active === 'notes' }"
      @click="$emit('navigate', 'notes')"
      title="Medical Notes"
    ></i>
    <i
      class="fas fa-sitemap"
      :class="{ active: active === 'treatment' }"
      @click="$emit('navigate', 'treatment')"
      title="Treatment Plans"
    ></i> -->
    <!-- <i
      class="fas fa-dog"
      :class="{ active: active === 'species' }"
      @click="$emit('navigate', 'species')"
      title="Pet Species Tracking"
    ></i>
    <i
      class="fas fa-users"
      :class="{ active: active === 'families' }"
      @click="$emit('navigate', 'families')"
      title="Multi-pet CRM"
    ></i>
    <i
      class="fas fa-network-wired"
      :class="{ active: active === 'nhs' }"
      @click="$emit('navigate', 'nhs')"
      title="NHS Integration"
    ></i> -->
    <i
      class="fas fa-boxes-stacked"
      :class="{ active: active === 'reports' }"
      @click="$emit('navigate', 'reports')"
      title="Reports"
    ></i>

    <div class="sidebar-footer">
      <!-- <i class="fas fa-cog" title="Settings" @click="$emit('navigate', 'settings')"></i> -->
      <i class="fas fa-sign-out-alt" title="Logout" @click="$emit('logout')"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["active"],
  emits: ["navigate", "logout"],
};
</script>

<style scoped>
.sidebar {
  position: fixed; /* Fixes it in place */
  top: 0; /* Stick to the top */
  left: 0; /* Stick to the left */
  width: 90px;
  height: 100vh; /* Full height of the viewport */
  background: #f3f5f7;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  z-index: 1000; /* Ensure it stays above other content */
}
.sidebar-logo img {
  width: 36px;
  margin-bottom: 40px;
}
.sidebar i {
  font-size: 18px;
  cursor: pointer;
  margin: 10px 0;
  color: #6a6969;
  padding: 12px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.sidebar i.active {
  background-color: #4b3c97;
  color: #fff;
}
.sidebar-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-bottom: 20px;
}
</style>

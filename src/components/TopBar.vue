<template>
  <div class="top-bar">
    <div>
      <!-- <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div> -->
    </div>
    <div class="user">
      <div>
        <div class="user-name">Dr Joseph Smith</div>
        <div class="user-role">Super Admin</div>
      </div>
      <img src="https://randomuser.me/api/portraits/men/75.jpg" />
    </div>
  </div>
  <!-- Search Row -->
  <!-- <div class="search-row">
    <input type="text" placeholder="Search for patients..." />
    <button><i class="fas fa-filter"></i> Filter</button>
    <button><i class="fas fa-calendar-alt"></i> Today</button>
  </div> -->
</template>

<script>
export default {
  name: "TopBar",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  background: #ffffff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* Sidebar styles (unchanged)... */
.sidebar {
  width: 90px;
  background: #f3f5f7;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  height: 100vh;
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

.main {
  flex-grow: 1;
  padding: 20px 30px;
  background: #fff;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font: 600 28px Poppins;
  color: #303030;
}
.subtitle {
  font: bold 16px Poppins;
  color: #34d8d1;
}
.user {
  display: flex;
  align-items: center;
  gap: 12px;
}
.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
/* Search Row */
.search-row {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}
.search-row input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.search-row button {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px 16px;
  font-weight: 500;
  color: #555;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
}
/* Cards */
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px 0;
}
.card {
  padding: 20px;
  border-radius: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.icon-wrapper i {
  font-size: 32px;
}
.card-content .value {
  font: bold 37px Poppins;
}
.card-content .label {
  font: 600 19px Poppins;
}
.card.good {
  background: #34d8d1;
}
.card.revenue {
  background: #34a7d8;
}
.card.available {
  background: #34d899;
}
.card.shortage {
  background: #d69759;
}

/* Grid Section */
.grid-section {
  background: #f3f5f7;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.sub-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}
.subcard-header {
  background: #fff;
  padding: 20px 24px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6a6969;
}
.config-link {
  font-size: 12px;
  color: #00a6a6;
  text-decoration: none;
  font-weight: 500;
}
.subcard-body {
  background: #f3f5f7;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.stat-icon i {
  font-size: 32px;
  color: #4b3c97;
}
.stat-info {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.stat-block {
  display: flex;
  flex-direction: column;
}
.stat-label {
  font-size: 14px;
  color: #666;
}
.stat-value {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}
.tag {
  margin-top: 12px;
  color: #007bff;
  font-weight: 600;
}
</style>

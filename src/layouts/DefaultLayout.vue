<script setup>

const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
}

</script>

<template>
    <div class="default-layout">
        <header class="navbar">
            <h1>Admin Panel</h1>
            <button @click="logout">Đăng xuất</button>
        </header>

        <div class="layout-body">
            <aside class="sidebar">
                <ul>
                    <li><router-link to="/">Dashboard</router-link></li>
                    <li><router-link to="/users">Người dùng</router-link></li>
                    <li><router-link to="/attendance">Chấm công</router-link></li>
                    <li><router-link to="/penalties">Xử phạt</router-link></li>
                </ul>
            </aside>

            <main class="main-content">
                <router-view />
            </main>
        </div>
    </div>
</template>

<style scoped>
.default-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.navbar {
    background: #2c3e50;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
}

.layout-body {
    display: flex;
    flex: 1;
}

.sidebar {
    width: 200px;
    background: #34495e;
    color: white;
    padding: 1rem;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    margin-bottom: 10px;
}

.main-content {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
}
</style>
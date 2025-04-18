<template>
    <aside class="sidebar">
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/attendance">Attendance</router-link>
        <router-link to="/penalties">Penalties</router-link>
    </aside>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
    width: 200px;
    height: 100vh;
    background-color: #002244;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.sidebar a {
    color: white;
    margin-bottom: 1rem;
    text-decoration: none;
}

.sidebar a.router-link-active {
    font-weight: bold;
    text-decoration: underline;
}
</style>
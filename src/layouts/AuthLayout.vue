<template>
    <div class="auth-layout">
        <main class="auth-content">
            <router-view />
        </main>
    </div>
</template>

<style scoped>
.auth-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #ecf0f1;
}

.auth-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    min-width: 300px;
}
</style>
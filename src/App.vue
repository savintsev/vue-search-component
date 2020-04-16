<template>
    <main class="main">
        <Search />
    </main>
</template>

<script>
export default {
    name: 'App',

    components: {
        Search: () => import('@/components/Search')
    }
};
</script>

<style lang="scss">
/* main styles */
body {
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: 'PT Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    background: #fff;
    color: #333;
}

.main {
    position: relative;
    margin: 0;
    padding-top: constant(safe-area-inset-top);
    padding-right: constant(safe-area-inset-right);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-left: constant(safe-area-inset-left);
}
</style>

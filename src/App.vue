<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style>
a {
  padding: 1rem;
}
</style>

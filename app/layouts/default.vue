<template>
  <div class="layout-wrapper">
    <header>
      <nav>NAVBAR</nav>
    </header>

    <main>
      <BaseAppContainer>
        <slot />
      </BaseAppContainer>
    </main>

    <footer>
      <p>FOOTER</p>
    </footer>
  </div>
</template>

<template>
  <nav class="myNavbar">
    <div class="myNavbar-container">
      <div class="logo">Nolwazi Dladla</div>
      <div class="hamburger-menu" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <a href="#home-section" class="nav-link" @click="closeMenu">Home</a>
        <a href="#about-section" class="nav-link" @click="closeMenu">About</a>
        <a href="#expertise-section" class="nav-link" @click="closeMenu">Expertise</a>
        <a href="#projects-section" class="nav-link" @click="closeMenu">Projects</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarItem',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
*{
  background-color: #2d2d2d;
}

.myNavbar {
  padding: 1rem 2rem;
  color: white;
}

.myNavbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
}

.bar {
  width: 100%;
  height: 3px;
  background-color: white;
  transition: 0.4s;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff;
}

@media (min-width: 769px) {
  .nav-links {
    margin-left: auto;
  }
}

@media (max-width: 768px) {
  .hamburger-menu {
    display: flex;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #2d2d2d;
    gap: 0.5rem;
    padding: 1rem 2rem;
    display: none;
  }

  .nav-links.active {
    display: flex;
  }
}
</style>

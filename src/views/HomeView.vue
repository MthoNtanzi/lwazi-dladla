<template>
  <div id="home-section">
    <div class="row">
      <div class="image-column">
        <img :src="portfolioImg" alt="Nolwazi Dladla" class="responsive-img">
      </div>
      <div class="text-column">
        <h1>Nolwazi <br>Dladla</h1>
        <p>Executive Assistant</p>
      </div>
    </div>
  </div>


  <About id="about-section" />
  <Expertise id="expertise-section" />
  <Projects id="projects-section" />
</template>

<script>
import portfolioImg from '@/assets/portfolio_img.jpg';
import Expertise from '@/components/Expertise.vue';
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: 'HomePage',
  components: {
    Expertise,
    About,
    Projects,
  },
  data() {
    return {
      portfolioImg,
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap; /* Allow columns to wrap on smaller screens */
  margin: 0;
}

.image-column {
  flex: 4; /* 4/10 of the row width */
  padding: 0;
  margin-right: 20px;
}

.text-column {
  flex: 6; /* 6/10 of the row width */
  display: flex; /* Make text-column a flex container */
  flex-direction: column; /* Stack h1 and p vertically */
  justify-content: center; /* Center horizontally */
  h1{
    font-size: 6rem;
    font-weight: 600;
  }
  p{
    padding: 1rem 0;
    font-size: 1.5rem;
  }
}

.responsive-img {
  max-width: 100%; /* Make the image responsive */
  height: auto;
  display: block; /* Remove default inline spacing */
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .row {
    flex-direction: column; /* Stack columns vertically on smaller screens */
  }

  .image-column,
  .text-column {
    flex: 1; /* Take full width on smaller screens */
    padding-right: 0; /* Remove padding */
    h1{
      padding: 1rem 0.5rem;
      font-size: 3rem;
      font-weight: 500;
    }
    p{
      padding: 0.5rem;
      font-size: 1rem;
    }
  }

  .container {
    text-align: center; /* Center text on smaller screens */
  }
}
</style>

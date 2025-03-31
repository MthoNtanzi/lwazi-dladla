<template>
  <div class="aboutPage">
    <!-- <h1>About Me</h1> -->
    <!-- <h2>Personal Statement</h2> -->
    <div>
      <p>
        I have a background in administrative support and logistics, with a focus on organisation and efficiency. I am eager to apply my skills in an executive assistant role, contributing to smooth operations and enhancing productivity in a dynamic environment.
      </p>
      <p>
        I believe in the power of efficiency and organisation to support executives and drive business success. I am proactive, adaptable, and detail-oriented, with a passion for creatively contributing to marketing and campaign strategies. I strive to streamline processes while supporting the growth and success of the teams I work with.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
  .aboutPage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10rem 8rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    .aboutPage{
      padding: 2rem 2rem;
    }
  }
</style>

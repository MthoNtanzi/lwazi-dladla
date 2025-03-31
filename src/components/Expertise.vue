<template>
  <div class="expertisePage">
    <!-- <h1>Technical Skills</h1> -->
    <div class="skills_box">
      <div class="icon_desc_box">
        <img :src="bufferLogo" alt="Buffer Logo">
        <p>Buffer</p>
      </div>

      <!-- Canva -->
      <div class="icon_desc_box">
        <img :src="canvaLogo" alt="Buffer Logo">
        <p>Canva</p>
      </div>

      <!-- Microsoft -->
      <div class="icon_desc_box">
        <img :src="windowsLogo" alt="Buffer Logo">
        <p>Microsoft Office</p>
      </div>

      <!-- Google Suite -->
      <div class="icon_desc_box">
        <img :src="googleLogo" alt="Buffer Logo">
        <p>Google Suite</p>
      </div>
    </div>
  </div>
</template>

<script>
  import bufferLogo from '@/components/icons/buffer.svg'
  import canvaLogo from '@/components/icons/canva.svg'
  import googleLogo from '@/components/icons/google.svg'
  import windowsLogo from '@/components/icons/windows.svg'

export default {
  name: 'ExpertisePage',
  data() {
    return {
      bufferLogo,
      canvaLogo,
      googleLogo,
      windowsLogo,
    };
  },
}
</script>

<style scoped>
  .expertisePage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 4rem 8rem;
  }

  .skills_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .skills_box img{
    max-width: 100px;
    height: auto;
  }

  .icon_desc_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    .expertisePage{
      padding: 2rem 2rem;
    }

    .skills_box {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    .skills_box .icon_desc_box {
      margin-bottom: 2rem;
    }
  }
</style>

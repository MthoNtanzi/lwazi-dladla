<template>
  <div class="projectsPage">
    <div class="vid_desc_box">
      <iframe width="310" height="190" src="https://www.youtube.com/embed/DiGVpyIEU-4?si=OBgUIl2PXSk4kHA7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>Clicks Campaign Strategy</p>
    </div>
    <div class="vid_desc_box">
      <iframe width="310" height="190" src="https://www.youtube.com/embed/DiGVpyIEU-4?si=OBgUIl2PXSk4kHA7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>Pretty Much Beauty Inventory Management</p>
    </div>
    <div class="vid_desc_box">
      <iframe width="310" height="190" src="https://www.youtube.com/embed/DiGVpyIEU-4?si=OBgUIl2PXSk4kHA7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>Sustainability Strategy MrPrice</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage'
}
</script>

<style scoped>
  .projectsPage{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10rem 8rem;
    min-height: 80vh;
    gap: 10px;
  }

  .vid_desc_box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vid_desc_box p{
    width: 80%;
    font-weight: 800;
    text-align: center;
    font-size: 30px;
  }

  iframe {
    aspect-ratio: 16 / 9;
  }


  @media (max-width: 768px) {
    .projectsPage{
      padding: 5rem 2rem;
      flex-direction: column;
      padding: 5rem 2rem;
      align-items: center;
      gap: 2rem;
    }

    .vid_desc_box {
      width: 100%;
    }

    .vid_desc_box p {
      font-size: 1.5rem;
    }
  }
</style>

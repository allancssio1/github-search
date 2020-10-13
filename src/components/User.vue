<template>
  <div id="resum">
    <section class="resum">
      <div class="apresentation">
        <div class="avatar_url">
          <img :src="user.avatar_url">
        </div>
        <h2 id="name">{{user.name}}</h2>
        <h3 id="userName">{{user.login}}</h3>
      </div>

      <div class="oraganization">
        <div class="icons_organization">
          <img src="../assets/work.png">
        </div>
        <div class="title_organization">{{user.company}}</div>
        <div class="icons_organization">
          <img src="../assets/localization.png">
        </div>
        <div class="title_organization">{{user.location}}</div>
        <div class="icons_organization">
          <img src="../assets/star.png">
        </div>
        <div class="title_organization">{{user.totalStars}}</div>
        <div class="icons_organization">
          <img src="../assets/note.png">
        </div>
        <div class="title_organization">{{user.public_repos}}</div>
        <div class="icons_organization">
          <img src="../assets/contact.png">
        </div>
        <div class="title_organization">{{user.followers}}</div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.resum{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
  }
  .resum .avatar_url img{
  width: 300px;
  height: 300px;
  border-radius: 2px;
  filter: drop-shadow(0px 0px 4px #000000);
  }
  .resum h2, .resum h3{
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  .resum h2{
    font-size: 36px;
    font-weight: normal;
    margin-top: 24px;
  }
  .resum h3{
    font-size: 24px;
    font-weight: normal;
    line-height: 24px;
    margin-bottom: 32px;
  }
  .oraganization{
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 8px;
    line-height: 20px;
    color: rgba(117, 117, 117, 1)
  }
  .icons_organization img{
    width: 20px;
  }
  .oraganization .icons_organization:nth-child(9) img{
    width: 30px;
  }
</style>
<template>
  <div id="Details">
    <section class="details_repos" >
      <div class="item" v-for="(repo, index) in repos" :key="index">
        <div class="title-repos">{{repo.name}}</div>
        <p class="resum_repo">{{repo.description}}</p>
        <div class="stars">
          <div><img src="../assets/star.png"></div>
          <div>{{repo.stargazers_count}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    repos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.oraganization{
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 8px;
    line-height: 20px;
  }
  .icons_organization img{
    width: 20px;
  }
  .oraganization .icons_organization:nth-child(9) img{
    width: 30px;
  }
  .details_repos{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
  .details_repos .item{
    line-height: 30px;
  }
  .details_repos .item .title-repos{
    font-size: 36px;
  }
  .details_repos .item .resum_repo{
    min-height: 2rem;
    display: block;
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 24px;
  }
  .details_repos .item .stars{
    display: flex;
    align-items: center;
  }
  .details_repos .item img{
    width: 20px;
    margin: 0 8px 0 0;
  }
  .details_repos .item .stars div:last-child{
    font-size: 20px;
  }
  .oraganization .title_organization,
  .item .resum_repo{
    color: rgba(117, 117, 117, 1);
  }
</style>
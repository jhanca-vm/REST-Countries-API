<template>
  <section class="options">
    <Search />
    <Filter />
  </section>
  <CardList />
</template>

<script>
  import Search from '../components/Search';
  import Filter from '../components/Filter';
  import CardList from '../components/CardList';

  export default {
    components: {
      Search,
      Filter,
      CardList,
    },
  };
</script>

<style scoped>
  @media screen and (min-width: 568px) {
    .options {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }
</style>

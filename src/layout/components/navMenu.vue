<template>
  <div>
    <a-menu
      v-model="currentSelectChild"
      :default-selected-keys="['101']"
      :default-open-keys="['100']"
      @click="navClick"
      theme="dark"
      mode="inline"
    >
      <!--横向：horizontal-->
      <!--有openKeys时 :defaultOpenKeys="[200]"无效 -->
      <!--有v-model时 :ddefaultSelectedKeys="[202]"无效 -->
      <template v-for="itParent in NavData">
        <a-menu-item v-if="itParent.single" :key="itParent.navId">
          <a-icon :type="itParent.icon" />
          <span>{{ itParent.title }}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="itParent.navId">
          <span slot="title">
            <a-icon :type="itParent.icon" />
            <span>{{ itParent.title }}</span>
          </span>
          <a-menu-item v-for="itChild in itParent.children" :key="itChild.navId"> </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import routers from '@/router/router.config';

export default {
  data() {
    return {
      currentSelectChild: null,
      currentParent: [100],
      collapsed: false,
      NavData: [],
    };
  },
  mounted() {
    this.NavData = routers.map((item) => {
      item.single = !(item.children && item.children.length > 0);
      return item;
    });
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    navClick(e) {
      console.log(e);
    },
    onOpenChange() {},
  },
};
</script>

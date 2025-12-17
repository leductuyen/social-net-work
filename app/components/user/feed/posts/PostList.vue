<script setup lang="ts">
interface Post {
  user: {
    name: string;
    avatar: string;
  };
  time: string;
  images: string[];
  stats: {
    like: number;
    comment: number;
    share: number;
  };
}

const posts: Post[] = [
  {
    user: {
      name: "Cameron Williamson",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuClIFySGN4W6uZyYvdhucZSRRf96kW3iy0SWUSKMBnhw8T4efq8FQxWtIx1vcVmcsXen_q2HGayQGch8G8D7OUR9fPohrmdQ0fU8b4OQ86dzsOmZX3-7qOwqh8jzpFZrLAlmdoPxleYInMTbZUrgT9UgdozFWRPOBBmBTg0lHtMfapYHfm-Vt1dViJlMlhpXFe77fLeTCWddYAaEZBa65mxChbZHzpyQPKUTjG-EU2wk0pLMfVzh2tbJDFiIxsJQoo-Q4keWWL_X8Q",
    },
    time: "23 Aug at 4:21 PM",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe5j79lZFvi7NVvab-rWjhcxrDisPfSGOlyRwcti4tAMGsZitHKiABOKeWhGUmdsifdryZCTw0VJKqYAOJPPbASiaEyfX2B5dkkfaL_24JsjTgIqNWpZhwFbS7GwfOrG50B0bW424tGoY9G-5srvXkZGb1Pkmlagu3z63H5-xHs1fhYh64xHKL2oN9s-2bxljctV2qKlFB7WlVMNoN-ujrFbIXp8Wlxw1sI9m7jtV0kQCPAv9euXNpqOfLzXqSOyURN4orNTyzYqo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBES9cYlQmq_WGpGta5_0ppH2KCYOTXkOOL3SX11N8io6QJ0xoRPuy4X7o89bfjBh-nYS7tmvI-R-gJrt-mdFRqgfJEgUN6AcN6icUzVZEQrBmkLQeXYrm5VND-uOTpu96x1qd7jeDjVp3-tepdDhXTC4HAeRyixezXjafEzyMq4w_Gvgu1muAcBgJVQYX5vLKA48YHOhmAbwiGIGHUSIharrSIe54SlJODLBKTeHYjilpTSbwWL6ErbIfUamXNkF_C4GIhGCRpIPQ",
    ],
    stats: {
      like: 30,
      comment: 12,
      share: 5,
    },
  },

  {
    user: {
      name: "Terry Lipshutz",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuClIFySGN4W6uZyYvdhucZSRRf96kW3iy0SWUSKMBnhw8T4efq8FQxWtIx1vcVmcsXen_q2HGayQGch8G8D7OUR9fPohrmdQ0fU8b4OQ86dzsOmZX3-7qOwqh8jzpFZrLAlmdoPxleYInMTbZUrgT9UgdozFWRPOBBmBTg0lHtMfapYHfm-Vt1dViJlMlhpXFe77fLeTCWddYAaEZBa65mxChbZHzpyQPKUTjG-EU2wk0pLMfVzh2tbJDFiIxsJQoo-Q4keWWL_X8Q",
    },
    time: "22 Aug at 7:15 PM",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJcJxXmyTFJxoccU9yeSBV-szk_kTVjUi_8MdDIgBZDuY64qQLFLK5_puNeQbZB0E3lLUojO0NOAG0FOFTIQ1g5qbrPs0WW7pMgZix5cebANz4pf7VkGu3mXuD8Z_b6DvVJaj1JbXP0qUOS6j7vlLUpCDUtGRKgXJ98RaZCLX3nVTMLNeHuevIQ44eZ0uB8oY1PJsMCaY1C499Usb6FB5liDOa2KR2b4y_BEnAYxwMaLmINY9zCCkQsACaVf4e9RFo1Eujz4_JfOs",
    ],
    stats: {
      like: 52,
      comment: 20,
      share: 8,
    },
  },
];
</script>

<template>
  <div
    v-for="(post, i) in posts"
    :key="i"
    class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm mt-4 mb-4"
  >
    <div class="flex justify-between items-start">
      <div class="flex items-center space-x-3">
        <img :src="post.user.avatar" class="w-12 h-12 rounded-full" />
        <div>
          <p class="font-bold">{{ post.user.name }}</p>
          <p
            class="text-xs text-text-light-secondary dark:text-text-dark-secondary"
          >
            {{ post.time }}
          </p>
        </div>
      </div>

      <button class="text-text-light-secondary dark:text-text-dark-secondary">
        <span class="material-symbols-outlined">more_horiz</span>
      </button>
    </div>

    <div v-if="post.images.length === 1" class="mt-4">
      <img :src="post.images[0]" class="rounded-lg w-full object-cover" />
    </div>

    <div v-else class="grid grid-cols-2 gap-2 mt-4">
      <img
        v-for="(img, idx) in post.images"
        :key="idx"
        :src="img"
        class="rounded-lg w-full object-cover aspect-square"
      />
    </div>

    <div
      class="flex justify-between items-center mt-4 text-text-light-secondary dark:text-text-dark-secondary text-sm font-medium"
    >
      <div class="flex space-x-6">
        <button class="flex items-center space-x-1.5">
          <span class="material-symbols-outlined text-base"
            >favorite_border</span
          >
          <span>{{ post.stats.like }} Like</span>
        </button>

        <button class="flex items-center space-x-1.5">
          <span class="material-symbols-outlined text-base"
            >chat_bubble_outline</span
          >
          <span>{{ post.stats.comment }} Comment</span>
        </button>

        <button class="flex items-center space-x-1.5">
          <span class="material-symbols-outlined text-base">reply</span>
          <span>{{ post.stats.share }} Share</span>
        </button>
      </div>

      <button>
        <span class="material-symbols-outlined text-base">bookmark_border</span>
      </button>
    </div>
  </div>
</template>

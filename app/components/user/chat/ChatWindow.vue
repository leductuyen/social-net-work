<template>
  <div class="fixed bottom-0 right-5 z-50">
    <div
      class="w-full max-w-sm h-[480px] bg-white dark:bg-card-dark rounded-t-lg shadow-2xl flex flex-col overflow-hidden border border-divider-light dark:border-divider-dark"
    >
     
      <div
        class="flex items-center justify-between p-2 border-divider-light dark:border-divider-dark flex-shrink-0"
      >
        <div class="flex items-center space-x-2">
          <div class="relative">
            <img
              alt="Avatar của Trương Thị Mỹ Duyên"
              class="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9L0kh1ygpy89Tck_0S6pG3so8EOW663f5-cfBseWEZfvxaMu8sev_kGNSgehBiHAvG88DDk6BJUPeYAqqqIP8jmzy9zUDOtEtR91dKLoSP1f7CYTwcMoICAo5SQb1QvbiEdSggQeGw9AKjytTVIYatD8oyIWCBci-Jmf4O-wv1xM6UEjymGJCPAiJ0TbFgloMOS-Dct2G3av5Dv9mw6loomG5BBsF8-t2jfMAkfQtdLBrFr-WRtaRi0sgWgLsLYaS2Dyfgb3eWulE"
            />
            <span
              class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-background-light dark:border-background-dark"
            ></span>
          </div>

          <div>
            <h1 class="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">
              Trương Thị Mỹ
            </h1>
            <p class="text-xs text-text-secondary-light dark:text-text-secondary-dark">
              Đang hoạt động
            </p>
          </div>

          <button
            class="text-icon-light dark:text-icon-dark hover:bg-surface-light dark:hover:bg-surface-dark p-1 rounded-full"
          >
            <span class="material-symbols-outlined md-18">expand_more</span>
          </button>
        </div>

        <div class="flex items-center space-x-1 text-primary">
         
          <button class="p-2 rounded-full hover:bg-primary/10">
            <span class="material-symbols-outlined">remove</span>
          </button>
          <button class="p-2 rounded-full hover:bg-primary/10">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <div class="flex-grow flex flex-col items-center justify-center p-4 text-center border-b border-t">
        <div class="relative mb-4">
          <img
            alt="Avatar lớn"
            class="w-16 h-16 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy1F9gqPecl5B482B3ygvnGIQ1RUHEw5lAuh3aufuIVXxMGU88QMyAMQIKF8bWTvw9RBa6xcDwUV5PmFUkDjKjq5WUaZblqwN6TknSZubSGtfODw1JPV4KZ9GsIe7BNdgMCqJr5ngls0xZN7l3fBwQvtuJ1qld1nrugt8jKoc-I9HlHnUQirc_Mm3--vVMEQ64y9uthOyN7mbaMDKHXYwizulX2Av04FOxvDLoeeoCCGEyzwnrRuQFMCweZP0OB4bXnBQY23vEXLpm"
          />
          <span
            class="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 border-2 border-background-light dark:border-background-dark"
          ></span>
        </div>

        <h2 class="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
          Trương Thị Mỹ Duyên
        </h2>

        <div class="mt-6 text-xs text-text-secondary-light dark:text-text-secondary-dark max-w-xs mx-auto">
          <p class="flex items-start justify-center text-center">
            <span class="material-symbols-outlined md-18 mr-1 mt-0.5">lock</span>
            <span>
              Tin nhắn và cuộc gọi được bảo mật bằng mã hóa đầu cuối.
              <a class="text-primary font-medium hover:underline" href="#">
                Tìm hiểu thêm
              </a>
            </span>
          </p>
        </div>
      </div>

    
      <div class="p-2 flex items-center space-x-2 flex-shrink-0">
        <div class="flex-grow relative">
          <input
            class="w-full bg-surface-light dark:bg-surface-dark border-none rounded-xl py-1.5 pl-3 pr-8 text-sm text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            placeholder="Aa"
            type="text"
          />
          <button class="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-primary rounded-full hover:bg-primary/10">
            <span class="material-symbols-outlined">mood</span>
          </button>
        </div>

        <button class="p-2 text-primary rounded-full hover:bg-primary/10">
          <span class="material-symbols-outlined">thumb_up</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// purely UI
</script>

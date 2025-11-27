<script setup lang="ts">
import Feed from "~/components/user/feed/Feed.vue";
import SideBar from "~/components/user/sidebar/SideBar.vue";

</script>

<template>
  <div
    class="font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary"
  >
    <div class="min-h-screen">
      <main class="pt-16">
        <div class="flex">
          <aside class="hidden lg:block w-80 pt-6 pl-6 pr-4 flex-shrink-0">
            <div class="sticky top-20">
              <SideBar />
            </div>
          </aside>
          <div class="flex-1 min-w-0 pt-6 px-6">
            <div class="max-w-3xl mx-auto">
              <Feed />
             
              
            </div>
          </div>
          <aside class="hidden xl:block w-80 pt-6 pr-6 pl-4 flex-shrink-0">
            <div class="sticky top-20 space-y-6">
              <div class="bg-white dark:bg-card-dark p-4 rounded-lg shadow-sm">
                <div class="flex justify-between items-center">
                  <h3 class="font-bold text-lg">Messages</h3>
                  <button>
                    <span class="material-symbols-outlined">edit_square</span>
                  </button>
                </div>
                <div class="relative mt-4">
                  <span
                    class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-text-dark-secondary"
                    >search</span
                  >
                  <input
                    class="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border border-transparent rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Search"
                    type="text"
                  />
                </div>
                <div
                  class="flex justify-between border-b border-border-light dark:border-border-dark mt-4 text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary"
                >
                  <button
                    class="text-text-light-primary dark:text-text-dark-primary border-b-2 border-primary pb-2"
                  >
                    Primary
                  </button>
                  <button
                    class="hover:text-text-light-primary dark:hover:text-text-dark-primary"
                  >
                    General
                  </button>
                  <button
                    class="hover:text-text-light-primary dark:hover:text-text-dark-primary flex items-center"
                  >
                    Requests<span class="ml-1 text-primary">(4)</span>
                  </button>
                </div>
                <div class="mt-4 space-y-4">
                  <div class="flex items-center space-x-3">
                    <div class="relative">
                      <img
                        alt="Roger Korsgaard's avatar"
                        class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3bplTLlZC4eruhhjp02k7z6ssZIVWcGy9_ianqoWY199f2bTNjQG7LfxNhZJreA6czA6X1HJlI2VjOUgiWFZupVrvy9iFua7j3cP-z7qPSXv6QfLzWGGvEW5nBmS2iqzmFVEYwP1PgjiwiwcFr2hv36_sZuHGufyHB-QfhHO-FUQffLDWoJsH9oNTSXz5QYo-WTXphD0BcMay0f1C50qUJp8IuJsPJDIe2GsR6ZidnQLUukgNbFZaZFijMJK48e7-q3HcHBmStj4"
                      />
                    </div>
                    <p class="font-semibold text-sm">Roger Korsgaard</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="relative">
                      <img
                        alt="Terry Torff's avatar"
                        class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFLWYCJZl0_VUtM7B9os5GYQP2PHBNkqOoaskDQh23LUn6Nbbm0U3F8OYzEjpCCmD6AqKnYsqC1T6JZ8YfBwdW9H0r_ATZ-OOJEmV2ZugCsb_yQZKXbK9OJjC93Fjsac1kF1T_DSC7WhFmUdAbPHhOsB2oiU10dJG9gR6StiBY6Pm7NF4Sf1CoZE-3FBGt7hfEpoTDRMy203OHLF-abrBckX1-s_UoReAeYbobnUBHIIUfg-z1OZ61DKegCzjJT9N7LCuoUxmy4Hc"
                      />
                    </div>
                    <p class="font-semibold text-sm">Terry Torff</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="relative">
                      <img
                        alt="Angel Bergson's avatar"
                        class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoP8n7gnnvqYDEMg574K5zWc28FzC-cDvalU2atrAJZT1O51pCMvGb_JQdof49EzTgcs8M1_Hev2lo5IB6x2dMEs2AV7VrXuo5VN-PXvdy1ZYBy7CuSU6BMaEfq3wF3k1DVU2UoN3rB1tWY12Gju7M1cwcfue6CSg-yQN2tEGawrGv0FYLdsL2Qhf5vzivAnVoeKYMO2ba3mNwQIGDithkMTjmtlJUzi2Da9rlbdkKHErceFOkpjLRGJIHboqI4ivFJ6kD2xyiizw"
                      />
                      <span
                        class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-card-light dark:ring-card-dark"
                      ></span>
                    </div>
                    <p class="font-semibold text-sm">Angel Bergson</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="relative">
                      <img
                        alt="Emerson Gouse's avatar"
                        class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZPR2H5fyoor3RDaverTAAhPR2IpD7TV4zCo1jz_w5j9zxPyifidVtcKXFZVwuMcfIytx4KfG0SMtOvLe_AHPETl5IM2zt7pTTCwWWiSyIpJf-22r2NGff8PuyhMZqHdooJEEA88yhlp9DO_uWKps34lXbTRm6z7h6se7ywvYTEaGDJFnHYGbxakcIzCz-bGWP5j1pJvVzV8GPPP3G7fB0LfCpL8tW36gSlyVfsiEdPe3Sq8-_Nyuantl1NczXSzSZLPrtzHUvnDA"
                      />
                    </div>
                    <p class="font-semibold text-sm">Emerson Gouse</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="relative">
                      <img
                        alt="Corey Baptista's avatar"
                        class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDO96USY_iC1J5flyu8CD3PoxGnhM3TH4pk-uZ2Q0CSK9yCOhIAJE2lOjxFeDo0oQ6IGILUKcSDWQQb4zlkGd6S64dHKfGBLiBavjaAb3NDkeRgzqN0ZVapRiGUAZf-U_fNljwFAI06DMOampYtcMBXHxzYZj8xWarlBk5dsOVmWFjG-zjpvs-fLjeIIVZMAGQ8qoEqD-h_rKh-mXJir5k_PaPG5od2xzreyQWxSRMhEXSpz9Wo3E9u1Ke6gVrWPdMluq_BsaU-SY"
                      />
                      <span
                        class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-card-light dark:ring-card-dark"
                      ></span>
                    </div>
                    <p class="font-semibold text-sm">Corey Baptista</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="relative">
                      <img
                        alt="Zain Culhane's avatar"
                        class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjAl3ELwmQRo2QncK4kEwoy5Fhdnzz42U3_8XC4i9lvRIttj8ecS_-lyopwEBZRJjVBVRUTio0Azxr5berO7LDEvTFS3-HzCiz6M_9sZhv34jcLlW4VTvW141HSfJXHStbOGXIJbhPcWB2xyTS_SNPfRS9G5NR8T-2-KiN_HactrrPftNQA1h12B9oYtxCxOAdKqTJ1A1S20e8LIj1rZ2fVGLmMy0fbf2opTSwX409D4j-YXCQDNFBzrkwoat_hI2Gnx73N8U0EpI"
                      />
                    </div>
                    <p class="font-semibold text-sm">Zain Culhane</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="relative">
                      <img
                        alt="Randy Lipshutz's avatar"
                        class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiKSFPpmO2hwPSYHaDgGMTfnlLHIrYLeKOh60pLPf2GdymNkwixsph98sMHrSvOZlTQ_-nvkfSkQlOH7ru0roKXh3VEcVSR-ZUFJdC2Funz2M8ll-2tc6_Ud0V5R0ckxc3vxUKdKP4t8v58TjEtv9XnZNDsF-OYRO_H7PUjjNhocNV73FCimM_4AFG9AP7UR7Ej3S7QhP_5TsXYrTKpxHrdfFkgkv0Sf3XybbR2TOAT0FIeNERjrngVCOrhTcuXkTVrnP1KVfHbGc"
                      />
                    </div>
                    <p class="font-semibold text-sm">Randy Lipshutz</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="relative">
                      <img
                        alt="Craig Botosh's avatar"
                        class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOhVwkvxbwuN4SXZhs8EMnFjrpJvYhxXFpUjnSA4dFYXnPAVYmZhSKhIImw8s5I0IwWYP2QKbeQcuLW1-CApQ0GZlqtp3JJPtSTNeiIfwDQri7fKjYRmWTcKMNFi3efRYU9iq3_oaQ477LJdhVkRpTLv4c2XA5ERqfSHJ_TsboCBJFZasdcFlC_qgXwRt70d0yYt_GXu1UnLz4EjwHg27Ivvm6Dc2jhyrFGmFnLKV1dAKobq1cklAUFq7J5bxJRCSiOTR8eJOrF9Y"
                      />
                    </div>
                    <p class="font-semibold text-sm">Craig Botosh</p>
                  </div>
                </div>
                <a
                  class="block text-center text-primary font-semibold text-sm mt-4"
                  href="#"
                  >View All</a
                >
              </div>
            
            </div>
          </aside>
        </div>
      </main>
    </div>
  </div>
</template>

<template>
  <div class="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm">
    <div class="flex gap-4">

      
      <div class="flex flex-col items-center justify-center text-center">
        <div class="relative w-16 h-16">
          <img
            alt="Your story"
            class="w-16 h-16 rounded-full border-2 border-dashed border-gray-400 p-1"
            :src="yourStory"
          />
          <button
            class="absolute bottom-0 right-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center border-2 border-card-light dark:border-card-dark"
          >
            <span class="material-symbols-outlined text-base">add</span>
          </button>
        </div>
        <p class="text-xs mt-1">Your Story</p>
      </div>

     
      <div
        v-for="(item, index) in stories"
        :key="index"
        class="flex-shrink-0 text-center"
      >
        <img
          class="w-16 h-16 rounded-full border-2 border-pink-500 p-0.5 mx-auto"
          :alt="item.name + ' story'"
          :src="item.avatar"
        />
        <p class="text-xs mt-1 truncate">{{ item.name }}</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const yourStory =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBSvECoDW-HjnIZ7qWy3eHv1AaSGW7o4TkzZg7Z3Y1mzYByakhZELeCRtITnnjDn3SOfR33Bpeq0-fynGmGPjgUpVaAy5LFtR3RiUZS0DRQarJKU5-sKljXsQp42pJogP5dnFwaTI9_bZTJQMkomRRr5sjClMEEA3mGEwl4jt9_efKhfqaTvwCcE7s_S19DKiQygsOvyFkSmZVOelUGv55Cg0TDTUDvxqi1VOm6vIW4BsQ_S20oWR3lFJIa8gkt8BT3ZklnDTMx-Z4";

const stories = ref([
  {
    name: "Justin Rosser",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxAeMgwBlkuOT-xjHHIpO1NOhB1ZlBc8TVEFHBd27GSDWg3-CHOYFe2R6xV-5NmelFQnOQdoW1mpImyacSCv02uP5xhmpiYVrtpGAuEIDe0A64VxQPl3BVPu4p5gWVmLkJj07pWEKRCkffJZY_d3IqZ5CENEdLN0JWMDL92Wh4VmDMtJ_Jo9PB1kjaJaYd1yrFHnVSCR3fN_Ax6-m1Kxt9PGZroDsZMBU_xeuk99ho4YYIFq5jWVxTlsD__rrQMTyNbhTfA6D-0_0",
  },
  {
    name: "Davis Dorwart",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtJNlgGek2fLrp-vcoHKM-NOZmFKe3C-97cXcWrbVjSXE8ElHULqwH2Zt71pXxu_P-jR_ffbTN56NfiQShlgGzArIpoEuIh2V5PJp78i4cySLmnxZAtqyhbykJxBxL1vzBODHOAzq9RrerGR0HTYAMtNt-Pscuw0rNrHLwd7hgrwQCIUPAo06v5Y6PytcoLnKYqZNUtO44I7q-ETFLEFm9a4l1dS1LpFTzAfrYxuedzpuiPP8pSmaY7fX9M72d8A2sMTMcyYr_8xs",
  },
  {
    name: "Randy Saris",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdIQCifJSVXrYG_xkMfun37muL5BxykoUkft7IvWh_OQ372I1eEETex0dMdackxtEbGuWUJnos2-yVE5QLhPKpHKAy4TBqRx2kOB1c9fcqTZ3rG5P12kB5uFsT8hMlziK_5YkgNUct5bypxfhdMCqMja8c5eJyGs1vGUgrMt-Xq6kp8-LPQNuFWQW7DI4J8UMqoShqbKSJzu_bOAx6vgNBPTlLUROHF7GigqIiX2wpnlvL4WLIC0Oa2jVdJCReoWbAVegNFg4uMU0",
  },
  {
    name: "Charlie Press",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBurr99hpg_gUWxgBGT2Uc8Hh7XFVYRT6VnZAsX90V34RfgWKJhRgAhCvQNzXEqZVOE8-Zyj21bE85-ZVEA89MN0cu4jLVH3eHjvwMTOw09cxuQtf4qJZNq4xB30ljCoqhoCznK94Hg0JYQQg76Ne6oOy7gQ1ZgoMWu4aUWR5Y4bUMiTb3TWIfte2IXCWwczwPVqjL9Wq2nqw-tyf5ImGo_YHVTQRpZ_gg369bIKiin-AFltI7AZ0a0zfsCP4imADNfG6A3G8R6AzA",
  },
  {
    name: "Zaire Herwitz",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3vn7XUI8XpvYzIeiBYCnKqRGotYynJdsGbwtQA55g3hKKnYRwXVLTDE32qiDQHwDjqc88w_OdiSpwAXFFNryoEBYbQ7kh0ezts4WQpsV6XdXAoTYtkok717o2f-kVPhB4L4ElAKdRs5zLFOPUDfFRIy_rQdUGnRm7Q3aEgvpbXMQ11tjZNwrx6S0x4MwGXBMioClSKdXH2lJf0fCzDWits1dKvOB-J55VuP52PyA8QE9FATdecYYiFabarbOsQDIVWOjsXLl_Uxs",
  },
  {
    name: "Talan Philips",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByl_EWaNQtTmC-SjOSDr9q7X4HQ2HcjNpLmseF30zP4wYd3bV8pKXajHZCQcdo40sKS5VTrkkqVPGrN3V3EjoGG4t64teiifA7_Q18HxiHgtHE1kfH4r6_TW5CdsdOHeKr12ut9dI8SrpFaZX0z6qx0WJgTjnKprRyc4xK7CFtO-sxCvLQ07tNI_L4q8RWh4zrqscHJcjaKlkCmlBI9XxGv6yB_B4BNMtLStk43WMQTzte64pWGWLj6GgS_2ufMVjoI_MnmcjwmUw",
  },
  {
    name: "Corey Gouse",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXD6J8ohr8S8oQBRCnPnbwGgLmrO7mdV0uR3s8N6t2Vl3OWT8hHqm9UExdhJl7xDL2OGdQPx-DIDEoYGEkpL6ofUZ0ixQF51Gxs5Icg2dX084pXWzx5euWP7xYnhHqPinV1nEA7iQpUgR4J0MhSVai32t1QOWsZHF7ZSC4aIQmszf4SYVbYt3UISAh-2ujqsvqsND6G9ieSgdjJB3D4wlIADZlfw3piPMPwq7Bxnwm1fQWDWDr1Zs6ItYdbhJ-dVhogyZyPTdCGRs",
  },
]);
</script>

<style scoped></style>

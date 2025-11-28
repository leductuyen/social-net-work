<script setup lang="ts">
import ChatWindow from "~/components/user/chat/ChatWindow.vue";
import Feed from "~/components/user/feed/Feed.vue";
import Messages from "~/components/user/messages/Messages.vue";
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
              <Messages />
            </div>
          </aside>
          <ChatWindow />
        </div>
      </main>
    </div>
  </div>
</template>

<template>
  <div class="flex justify-between">
    <div class="text-gray-600 dark:text-gray-300">
      <div class="mb-8 text-gray-700 dark:text-gray-200">
        Important! Make sure you have followed the steps oulined in
        <router-link to="/help/basic">block + relay install</router-link> guide,
        and the node is 100% synced with the blockchain before proceeding.
      </div>

      <div class="font-medium mb-1">Notes</div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Have at least 8gb memory for relay node
      </div>

      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Followed the steps oulined in
        <router-link to="/help/basic">block + relay install</router-link> guide
      </div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Node is running and 100% synced with the blockchain
      </div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Block producer node is running, synced, and ready for a relay to
        connect to it.
      </div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - You are going to use a dns hostname for your relay. @TODO - make it do
        this is not the case!
      </div>
      <hr class="my-4 border-gray-100 opacity-10 outline-none" />

      <div class="font-semibold mb-4 text-2xl">Configure Relay Node</div>
      <div class="mb-4">
        If you are setting up a new pool, then continue reading. If you have
        already registered and deployed a pool, and want to know how to easily
        re-deploy, click here.
      </div>

      <div class="font-semibold mb-4 text-lg">Step 1.1</div>
      <div class="mb-4">- Run the following command to begin the setup.</div>
      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>cni-init
      </code>

      <div class="mb-4">
        - You will be asked for the block nodes IP address, and the DNS hostname
        of the relay node. Input the values, press enter.
      </div>

      <div class="mb-4">
        - The node will make necessary firewall updates, write the topology
        file, call the node updater script, and set a cron for 4 hours to do the
        topology pull. Assuming this worked, there is nothing further to do.
      </div>
      <hr class="my-4 border-gray-100 opacity-10 outline-none" />
      <!-- <div class="font-semibold mb-4 text-lg">Step 1.1</div> -->
      <div class="mb-4">
        Your relay should now be running and connected to your block node.
      </div>
    </div>
  </div>
</template>

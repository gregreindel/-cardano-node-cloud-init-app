<template>
  <div class="flex justify-between">
    <div class="text-gray-600 dark:text-gray-300">
      <div class="font-medium mb-1">Notes</div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Use Ubuntu 20.04x64.
      </div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Have at least 8bg memory for relay node
      </div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Have at least 16gb memory for block node
      </div>

      <div class="font-semibold mb-4 mt-12 text-lg">Step 1</div>
      <div class="mb-4">
        - Take the file contents of the file named "User Data" and input that
        when creating your server.
      </div>

      <div class="mb-2">
        <span class="mr-2">Platform-specific info on user data: </span>
        <a
          class="text-sm"
          href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html"
          >AWS</a
        >
        |
        <a
          class="text-sm"
          href="https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/"
          >Digital Ocean</a
        >
      </div>

      <hr class="my-4 border-gray-100 opacity-10 outline-none" />

      <div class="font-semibold mb-4 text-lg">Step 2</div>
      <div class="mb-2">
        - Allow the instance to boot. Once it does, it will begin running the
        Cloud-init configuration.
      </div>
      <div class="mb-2">
        - You can log into your server by running the following command:
      </div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>ssh
        cardano@the-server-ip-address -p the-port-you-chose
      </code>
      <div class="mb-2">
        - Once you connect, run this command to watch the Cloud-init logs:
      </div>
      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>sudo tail -f
        /var/log/cloud-init-output.log
      </code>
      <div class="mb-2">
        - Wait until it says "Cloud-init v. xxxx-ubuntu1~20.04.2 finished..." at
        the bottom, and/or the server reboots.
      </div>

      <hr class="my-4 border-gray-100 opacity-10 outline-none" />

      <div class="font-semibold mb-4 text-lg">Step 3</div>
      <div class="mb-2">
        - Once the Cloud-init log says "finished" at the bottom, the
        installation is complete. It should take no longer than 5 minutes.
      </div>
      <div class="mb-2">
        - Verify the installation by running the following command:
      </div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>logs
      </code>

      <div class="mb-2">
        - This will display the logs for cardano-node. You should see logs
        similar to " Chain extended, new tip: xxxx at slot xxx" That means you
        are syncing with the blockchain.
      </div>
    </div>
  </div>
  <hr class="my-4 border-gray-100 opacity-10 outline-none" />

  <div class="flex justify-between">
    <div class="text-gray-600 dark:text-gray-300">
      <div class="font-semibold mb-4 text-lg">
        Your server will have the following commands available
      </div>
      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>start
      </code>
      <div class="mb-4">starts the cardano-node service</div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>stop
      </code>
      <div class="mb-4">stops the cardano-node service</div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>restart
      </code>
      <div class="mb-4">restarts the cardano-node service</div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>status
      </code>
      <div class="mb-4">show the cardano-node service status</div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>logs
      </code>
      <div class="mb-4">show cardano-node logs</div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>view
      </code>
      <div class="mb-4">show cardano-node live view</div>
    </div>
  </div>
</template>

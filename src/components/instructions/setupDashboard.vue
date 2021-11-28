<template>
  <div class="flex justify-between">
    <div class="text-gray-600 dark:text-gray-300">
      <!-- <div class="bg-yellow-300 bg-opacity-25 px-3 py-2 mb-4 rounded-sm">
        Note: It's recommended to use Ubuntu 20.04 x64.
      </div> -->

      <div class="mb-8">
        The Monitoring dashboard user data will allow you to quickly setup a
        montoring server for your pool running Grafana and Prometheus. The
        Prometheus datasource is configured for you, and your instance will be
        pre-loaded with some popular dashdoards.
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="font-semibold mb-4 text-2xl">Install Server</div>
      <div class="font-semibold mb-4 text-lg">Step 1.1</div>
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

      <div class="font-semibold mb-4 text-lg">Step 1.2</div>
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

      <div class="font-semibold mb-4 text-lg">Step 1.3</div>
      <div class="mb-2">
        - Once the Cloud-init log says "finished" at the bottom, the
        installation is complete. It should take no longer than 3 minutes.
      </div>
      <div class="mb-2">
        Verify the installation by running the following command: `status`.
      </div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>status
      </code>

      <div class="mb-2">
        - You should see Grafana and Prometheus services running
      </div>
    </div>
  </div>
  <hr class="my-4 border-gray-100 opacity-10 outline-none" />

  <div class="flex justify-between">
    <div class="text-gray-600 dark:text-gray-300">
      <div class="mb-4">
        At this point, the server has Grafana and Prometheus installed and
        running. All the required dependencies have been installed. Its time to
        make configurations that are specific to your enviroment.
      </div>

      <div class="font-semibold mb-4 text-lg">
        Your dashboard server will have the following commands available
      </div>
      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>start
      </code>
      <div class="mb-4">starts the Grafana and Prometheus service</div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>stop
      </code>
      <div class="mb-4">stops the Grafana and Prometheus service</div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>restart
      </code>
      <div class="mb-4">restarts the Grafana and Prometheus service</div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>status
      </code>
      <div class="mb-4">show the Grafana and Prometheus service status</div>

      <hr class="my-4 border-gray-100 opacity-10 outline-none" />

      <div class="font-semibold mb-4 text-2xl">
        Configure Monitoring Dashboard
      </div>

      <div class="font-semibold mb-4 text-lg">Step 2.1</div>
      <div class="mb-4">- Run the following command to begin the setup.</div>
      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>cni-init
      </code>

      <div class="mb-4">
        - You will be asked to enter your block node IP address. Provide it and
        press enter.
      </div>
      <div class="mb-4">
        - You will be asked to enter your relay node 1 IP address. Provide it
        and press enter.
      </div>
      <div class="mb-4">
        - You will be asked to enter your relay node 2 IP address. Provide it
        and press enter if you have a second relay node, or else you can press
        enter to continue.
      </div>
      <div class="mb-4">
        - Finally, you will be asked to enter an IP address to whitelist access
        to port 3000. Port 3000 is how you will view the dmonitoring dashboard
        in your browser. By whitelisting a specific IP, you will be able to
        secure your dashboard. It is recomended to do so. You can skip this by
        pressing enter, but you will have to manually run a command to open port
        3000 to the world. Instructions will be printed if you need to do so.
      </div>

      <hr class="my-4 border-gray-100 opacity-10 outline-none" />
      <div class="font-semibold mb-4 text-lg">Step 2.2</div>
      <div class="mb-4">
        - After successfully following the setup steps, instructions will print
        with commands you need to run on your block node and relay node(s).
        These commands will open up the firewall on the necessary ports so your
        monitoring server can access the data it needs from your block and
        relay.
      </div>
      <div class="mb-4">
        Note: you need to replace &lt;this-server-ip&gt; in the commands with
        your monitoring server's IP.
      </div>
      <hr class="my-4 border-gray-100 opacity-10 outline-none" />
      <div class="font-semibold mb-4 text-lg">Step 2.3</div>
      <div class="mb-4">
        - After successfully following the setup steps, instructions will print
        with some commands you need to run on your block node and relay node(s).
        These commands will open up the firewall on the necessary ports so your
        monitoring server can access the data it needs.
      </div>
      <div class="mb-2">
        Verify the everything is up and running by running the following
        command:
      </div>

      <code class="mb-2 bg-gray-700 pl-2 pr-4 inline-block">
        <span class="select-none mr-2 text-sm">$</span>status
      </code>

      <div class="mb-2">
        - You should see Grafana and Prometheus services running
      </div>
      <hr class="my-4 border-gray-100 opacity-10 outline-none" />

      <div class="font-semibold mb-4 text-lg">Step 2.4</div>
      <div class="mb-4">
        - Now its time to complete the setup in the UI. Go to
        http://&lt;this-server-ip&gt;:3000 in your browser.
      </div>
      <div class="mb-4">
        - You should be presented with a login screen. Use the username and
        password "admin" to login. Don't worry, next step is setting a new
        password for your admin user.
      </div>
      <div class="mb-4">
        - After changing the password you should be logged into Grafana. On the
        left side menu, select dashboard -> Manage. Select the pool folder from
        the list, and select a dashboard.
      </div>
      <hr class="my-4 border-gray-100 opacity-10 outline-none" />
    </div>
  </div>
</template>

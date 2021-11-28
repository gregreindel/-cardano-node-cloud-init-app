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
        - Have at least 16gb memory for block node
      </div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Have at least 505 ADA that you can send. tADA is fine for testnet.
      </div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Have an airgapped machine ready
      </div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Followed the steps oulined in
        <router-link to="/help/basic">block + relay install</router-link> guide
      </div>
      <div class="mb-2 text-gray-700 dark:text-gray-200">
        - Node is running and 100% synced with the blockchain
      </div>
      <hr class="my-4 border-gray-100 opacity-10 outline-none" />

      <div class="font-semibold mb-4 text-2xl">
        Register Pool &amp; Configure Block Node
      </div>
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
        - You will be asked walked through a series of prompts with instructions
        printed to the terminal. Follow along. The steps are outlined below.
      </div>
      <!-- step 1 -->
      <div class="mb-4 p-4">
        <div class="font-semibold">Register Keys</div>
        <div class="mb-4">
          The first step will generate some keys on your server. You'll need to
          transfer these to your cold environment.
        </div>
        <div class="mb-4 p-4 bg-black text-sm">
          <div class="mb-4">
            Keys have been generated, download them to your cold environment as
            a backup and so you can use them there.
          </div>
          <div class="mb-4">
            1.) Download the files from /home/cardano/step-1.zip to your cold
            environment.
          </div>

          <div>Inside will be the following files:</div>
          <div>- kes.skey</div>
          <div>- kes.vkey</div>
          <div>- vrf.skey</div>
          <div>- vrf.vkey</div>
          <div>- step-1.sh</div>
          <div>- step-1.txt</div>

          <div class="mt-2 mb-2">
            2.) Move all files into the directory you plan on keeping/generating
            your keys with.
          </div>
          <div class="mb-2">
            3.) Execute 'step-1.sh'. At this point many files will be generated.
          </div>
          <div class="mb-2">
            4.) Upload 'node.cert', 'deleg.cert', 'payment.addr', and
            'stake.cert' from cold environment into /home/cardano/
          </div>
        </div>
      </div>
      <!-- end step 1 -->
      <hr class="my-4 border-gray-100 opacity-10 outline-none w-72 mx-auto" />

      <!-- step 2 -->
      <div class="mb-4 p-4">
        <div class="font-semibold">Register Stake Address</div>
        <div class="mb-4">
          Next step is registering your stake address. This step will cost you
          2.5 ADA, so I suggest you be ready to send your new payment address at
          least 3.5 ADA. To register the address, you'll need to create and sign
          a transaction.
        </div>
        <div class="mb-4 p-4 bg-black text-sm">
          <div class="mb-4">
            The transaction to register your stake address needs to be signed.
            You'll need to do this on your cold machine.
          </div>
          <div class="mb-4">
            1.)Download the files from /home/cardano/step-2.zip to your cold
            environment.
          </div>

          <div>Inside will be the following files:</div>
          <div>- tx-stake-address.raw</div>
          <div>- step-2.sh</div>
          <div>- step-2.txt</div>

          <div class="mt-2 mb-2">
            2.) Move all the files into the directory you are generating your
            keys with.
          </div>
          <div class="mb-2">
            3.) Execute 'step-2.sh', this will sign the transaction and generate
            one file.
          </div>
          <div class="mb-2">
            4.) Upload the generated file 'tx-stake-address.signed' and
            stake.addr into /home/cardano/
          </div>
        </div>
      </div>
      <!-- end step 2 -->
      <hr class="my-4 border-gray-100 opacity-10 outline-none w-72 mx-auto" />
      <!-- step 3 -->
      <div class="mb-4 p-4">
        <div class="font-semibold">Generate Pool Meta</div>
        <div class="mb-4">
          Follow the prompts to generate your pool meta. You will be asked for:
          the pool name, description, ticker, and homepage.
        </div>
        <div class="mb-4 p-4 bg-black text-sm">
          <div class="mb-4">Next, upload the pool meta to a public url.</div>
          <div class="mb-4">1.) Download /home/cardano/poolMetaData.json</div>

          <div class="mt-2 mb-2">2.) Upload it to a public server</div>
          <div class="mb-2">3.) Enter the url to the uploaded file below</div>
          <div class="mb-2">
            Note: You must upload to a public server. The server must return a
            200, with no authentication required.
          </div>
        </div>
      </div>
      <!-- end step 3 -->
      <hr class="my-4 border-gray-100 opacity-10 outline-none w-72 mx-auto" />
      <!-- step 4 -->
      <div class="mb-4 p-4">
        <div class="font-semibold">Generate Pool Certificate</div>
        <div class="mb-4"></div>
        <div class="mb-4 p-4 bg-black text-sm">
          <div class="mb-4">
            Now create a pool certificate; you'll need to do this on your cold
            machine.
          </div>
          <div class="mb-4">
            1.)Download the files from /home/cardano/step-3.zip to your cold
            environment.
          </div>
          <div>Inside will be the following files:</div>
          <div>- step-3.sh</div>

          <div class="mt-2 mb-2">
            2.) Move all the files into the directory you are generating your
            keys with.
          </div>
          <div class="mb-2">
            3.) Execute 'step-3.sh', this will create the pool certificate
            files.
          </div>
          <div class="mb-2">
            4.) Upload 'pool.cert' into /home/${NODE_USER}/
          </div>
        </div>
      </div>
      <!-- end step 4 -->
      <hr class="my-4 border-gray-100 opacity-10 outline-none w-72 mx-auto" />
      <!-- step 5 -->
      <div class="mb-4 p-4">
        <div class="font-semibold">Register Pool Certificate</div>
        <div class="mb-4">
          To register your pool, you're going to need to make another
          transaction. This step will cost you 500 ADA, so I suggest you be
          ready to send your new payment address at least 505 ADA. The 500 ADA
          is the pool deposit, and is refundable upon retiring your pool.
        </div>
        <div class="mb-4 p-4 bg-black text-sm">
          <div class="mb-4">
            The transaction to register your pool certificate needs to be
            signed. You'll need to do this on your cold machine.
          </div>
          <div class="mb-4">
            1.) Download the files from /home/${NODE_USER}/step-4.zip to your
            cold environment.
          </div>
          <div>Inside will be the following files:</div>
          <div>- tx-pool-cert.raw</div>
          <div>- step-4.sh</div>
          <div>- step-4.txt</div>

          <div class="mt-2 mb-2">
            2.) Move all the files into the directory you are generating your
            keys with.
          </div>
          <div class="mb-2">
            3.) Execute 'step-4.sh', this will sign the transaction and generate
            one file.
          </div>
          <div class="mb-2">
            4.)Upload the generated file 'tx-pool-cert.signed' into
            /home/cardano/
          </div>
        </div>
      </div>
      <!-- end step 5 -->
      <hr class="my-4 border-gray-100 opacity-10 outline-none" />
      <!-- <div class="font-semibold mb-4 text-lg">Step 1.1</div> -->
      <div class="mb-4">Your pool should now be registered.</div>
    </div>
  </div>
</template>

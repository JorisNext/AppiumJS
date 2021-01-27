const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
    capabilities: {
	platformName: "Android",
	app: "/home/joris/Documents/altice/AppiumJS/app-bfmtv-dev-debug.apk"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  await client.deleteSession();
}

main();

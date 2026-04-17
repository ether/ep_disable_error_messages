![Publish Status](https://github.com/ether/ep_disable_error_messages/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_disable_error_messages/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_disable_error_messages/actions/workflows/test-and-release.yml)

# Disable Error Messages in Etherpad

Disables the gritter popup errors messages so your users will never know how broken your install is <3 :)

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_disable_error_messages` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_disable_error_messages
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.

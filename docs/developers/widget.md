---
sidebar_position: 2
---

# Widget

The AirLyft Widget allows you to create onboarding flows, run quests, and campaigns easily on your own domain.

:::tip Pre Release

The AirLyft Widget is currently in Pre-Release. To use this feature, you need to be in direct contact with an AirLyft Team member. Create a support ticket on our [Discord](https://discord.gg/bx6ZCTwbYw) to receive your Widget ID.

:::

## Installation

Installing the AirLyft Widget on your website is quick and easy. Simply insert the JavaScript code into your website’s code.

1. First get your `widgetId` by creating a support ticket on our [Discord](https://discord.gg/bx6ZCTwbYw)
1. Choose your widget style and add the respective script to the `<body>` of your website.

### Popup Widget

Copy the code below for a popup widget (replace your YOUR-WIDGET-ID with the id your receive from the team):

```
<script src="https://assets.airlyft.one/widget/widget.js"></script>
<script>
  (async () => {
      try {
          const widget = await window.AirlyftWidget("YOUR-WIDGET-ID");
          widget.createModal({});
      } catch (err) {
          consolr.error(err)
      }
    })();              
</script>
```

### Sidebar Widget

Copy the code below for a sidebar widget (replace your YOUR-WIDGET-ID with the id your receive from the team):

```
<script src="https://assets.airlyft.one/widget/widget.js"></script>
<script>
  (async () => {
      try {
          const widget = await window.AirlyftWidget("YOUR-WIDGET-ID");
          widget.createSidebar({});
      } catch (err) {
          consolr.error(err)
      }
    })();              
</script>
```

### Inline Widget

Coming Soon

## Caveats

The AirLyft Widget is currently in Pre-Release mode. Please note the following caveats when using the platform:
1. Currently, PolkadotJS does not work for login or quests. Ask users to use Subwallet or Talisman for Substrate-based actions.
1. Validating Telegram Quests is coming soon; currently, it does not work.


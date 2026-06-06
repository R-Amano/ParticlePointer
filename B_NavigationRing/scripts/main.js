import { world, system } from "@minecraft/server";
//Input coordinates into the property.
// /scriptevent ra:pos x z
system.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id === "ra:pos" && event.sourceEntity) {
    const player = event.sourceEntity;
    const args = event.message.split(/\s+/);
    if (args.length >= 2) {
      const x = parseFloat(args[0]);
      const z = parseFloat(args[1]);
      if (!isNaN(x) && !isNaN(z)) {
        player.setProperty("ra:pos_x", x);
        player.setProperty("ra:pos_z", z);
      }
    }
  }
});
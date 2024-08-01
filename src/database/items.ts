import { modifierTypes } from "#app/modifier/modifier-type.js";

const generatedItems = [
  "EVOLUTION_ITEM",
  "RARE_EVOLUTION_ITEM",
  "FORM_CHANGE_ITEM",
  "SPECIES_STAT_BOOSTER",
  "TEMP_STAT_BOOSTER",
  "BASE_STAT_BOOSTER",
  "ATTACK_TYPE_BOOSTER",
  "MINT",
  "TERA_SHARD",
  "BERRY",
  "TM_COMMON",
  "TM_GREAT",
  "TM_ULTRA"
];

export function getItems() {
  const items = {};
  for (const key in modifierTypes) {
    if (generatedItems.includes(key)) {
      items[key] = [];
    } else {
      items[key] = modifierTypes[key]();
    }
  }
  return items;
}

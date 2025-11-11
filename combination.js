import { promises as fs } from "fs";
import path from "path";

async function saveToJson(data) {
  try {
    const outputDir = "./output";
    const filePath = path.join(outputDir, "data.json");

    await fs.mkdir(outputDir, { recursive: true });

    const jsonData = JSON.stringify(data, null, 2);

    await fs.writeFile(filePath, jsonData, "utf8");

    console.log(`Data saved successfully to ${filePath}`);
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

const miniObj = {
  allowedFoodOrderServiceTypeSettings: ["PICKUP", "DELIVERY", "DINEIN"],
  menuTypes: ["NORMAL_MENU"],
  categoryTypes: ["NORMAL_CATEGORY"],
  itemTypes: ["NORMAL_ITEM_+_ITEM_WITH_VARIANT_+_MULTISELECT_ITEM"],
  allowedSchedulingOptions: ["ASAP", "SCHEDULED"],
  allowedPaymentOptions: ["CARD", "GOOGLE_PAY", "APPLE_PAY", "CASH"],
  dealTypes: ["AUTOMATIC_PROMOTION", "MANUAL_PROMOTION"],
  loginOptionsAvailable: [
    "NORMAL_LOGIN",
    "FEDERATED_LOGIN",
    "GUEST_FLOW",
    "NORMAL_SIGNUP",
  ],
};

const temp = [];

for (const allowedFoodOrderServiceTypeSetting of miniObj.allowedFoodOrderServiceTypeSettings) {
  for (const allowedSchedulingOption of miniObj.allowedSchedulingOptions) {
    for (const allowedPaymentOption of miniObj.allowedPaymentOptions) {
      for (const dealType of miniObj.dealTypes) {
        for (const loginOptionsAvailabe of miniObj.loginOptionsAvailable) {
          temp.push(
            `${allowedFoodOrderServiceTypeSetting} ${miniObj.menuTypes[0]} ${miniObj.categoryTypes[0]} ${miniObj.itemTypes[0]} ${allowedSchedulingOption} ${allowedPaymentOption} ${dealType} ${loginOptionsAvailabe}`
          );
        }
      }
    }
  }
}

console.log(temp.length);

console.log(temp);

saveToJson(temp);

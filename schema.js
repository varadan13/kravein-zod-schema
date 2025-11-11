import * as z from "zod";

const kraveinStateSchema = z.object({
  allowedFoodOrderServiceTypeSettings: z
    .enum(["PICKUP", "DELIVERY", "DINEIN"])
    .describe(
      "List of supported service types where users can create a food order from kravein"
    ),
  menuTypes: z.enum(["NORMAL_MENU", "CATERING_MENU"]).describe(`
        For each service type available to the user, there are multiple menus.
        
        Each menu contains multiple categories.
        
        Each category contains multiple items.

        A menu can be of two types: NORMAL_MENU or CATERING_MENU.    
    `),
  categoryTypes: z
    .enum(["NORMAL_CATEGORY", "TIME_BASED_CATEGORY"])
    .describe(``),
  itemTypes: z
    .enum(["NORMAL_ITEM", "ITEM_WITH_VARIANT", "MULTISELECT_ITEM"])
    .describe(
      `List of supported food/item types that is available to the users for creating a cart`
    ),
  allowedSchedulingOptions: z
    .enum(["ASAP", "SCHEDULED"])
    .describe(
      "List of supported scheduling options available to users when creating a food order from kravein"
    ),
  allowedPaymentOptions: z
    .enum(["CARD", "GOOGLE_PAY", "APPLE_PAY", "CASH"])
    .describe(
      "List of supported payment options available to users when creating a food order from kravein"
    ),
  dealTypes: z
    .enum([
      "AUTOMATIC_PROMOTION",
      "MANUAL_PROMOTION",
      "SPECIFIC_ITEM_PROMOTION",
      "DELIVERY_FEE_PROMOTION",
    ])
    .describe(
      "List of supported deal types available to users when creating a food order from kravein"
    ),
  dealSubTypes: z.enum(["PERCENTAGE_DISCOUNT", "FLAT_AMOUNT_DISCOUNT"])
    .describe(`
        Each deal type has two subtypes.
        
        AUTOMATIC_PROMOTION comes in two variations: PERCENTAGE_DISCOUNT and FLAT_AMOUNT_DISCOUNT.

        The same applies to the other deal types.
        `),
  loginOptionsAvailable: z.enum([
    "NORMAL_LOGIN",
    "FEDERATED_LOGIN",
    "GUEST_FLOW",
    "NORMAL_SIGNUP",
  ]),
  required_details: z.enum([
    "CONTACT_DETAILS",
    "DELIVERY_ADDRESS",
    "PAYMENT_DETAILS",
  ]),
});

const miniKraveinStateSchema = z.object({
  allowedFoodOrderServiceTypeSettings: z
    .enum(["PICKUP", "DELIVERY", "DINEIN"])
    .describe(
      "List of supported service types where users can create a food order from kravein"
    ),
  menuTypes: z.enum(["NORMAL_MENU"]).describe(`
        For each service type available to the user, there are multiple menus.
        
        Each menu contains multiple categories.
        
        Each category contains multiple items.
    `),
  categoryTypes: z.enum(["NORMAL_CATEGORY"]).describe(``),
  itemTypes: z
    .enum(["NORMAL_ITEM", "ITEM_WITH_VARIANT", "MULTISELECT_ITEM"])
    .describe(
      `List of supported food/item types that is available to the users for creating a cart`
    ),
  allowedSchedulingOptions: z
    .enum(["ASAP", "SCHEDULED"])
    .describe(
      "List of supported scheduling options available to users when creating a food order from kravein"
    ),
  allowedPaymentOptions: z
    .enum(["CARD", "GOOGLE_PAY", "APPLE_PAY", "CASH"])
    .describe(
      "List of supported payment options available to users when creating a food order from kravein"
    ),
  dealTypes: z
    .enum(["AUTOMATIC_PROMOTION", "MANUAL_PROMOTION"])
    .describe(
      "List of supported deal types available to users when creating a food order from kravein"
    ),
  loginOptionsAvailable: z.enum([
    "NORMAL_LOGIN",
    "FEDERATED_LOGIN",
    "GUEST_FLOW",
    "NORMAL_SIGNUP",
  ]),
});

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

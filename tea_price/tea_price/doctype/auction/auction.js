// Copyright (c) 2025, Lucifer and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Auction", {
// 	refresh(frm) {

// 	},
// });

frappe.query_reports["Auction"] = {
    "filters": [
        {
            "fieldname": "auction_price",
            "label": "Auction Price",
            "fieldtype": "Select",
            "optons": [
                "",
                "0-100",
                "101-200",
                "201-300",
                "301-400"
            ],
            "default": ""
        }
    ]
};

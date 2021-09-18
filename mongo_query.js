/**
 * *****QUERY************
 * have two collection application and service_business(for all references)
 * Get all the applciation having status_id 604b14e73079a133133e8386
 * and last ref havinf type esign-pending
 * get app_id, user_id and ref_id
 */
db.getCollection('application').aggregate([
    {
        "$match": { "status_id": "604b14e73079a133133e8386", "is_deleted": false }
    },
    {
        "$addFields": { "app_id": { "$toString": "$_id" } }
    },
    {
        "$lookup": {
            "from": "service_business",
            "let": { "temp": "$app_id" },
            "pipeline": [
                {
                    "$match": {
                        "$expr": {
                            "$eq": ["$app_id", "$$temp"]
                        },
                        "type": "esign-pending",
                        "is_deleted": false
                    }
                }
            ],
            "as": "business_references"
        }
    },
    {
        "$addFields": { "size": { "$size": "$business_references" } }
    },
    {
        "$match": { size: { $ne: 0 } }
    },
    {
        "$project": { "esign_pending_last_ref": { $arrayElemAt: ["$business_references", { $subtract: ["$size", 1] }] } }
    }
], { allowDiskUse: true }).toArray().map(t => { return { app_id: t.esign_pending_last_ref.app_id, user_id: t.esign_pending_last_ref.user_id, ref_id: t.esign_pending_last_ref.ref_id } })



/**
 * Get all the application with having business and return certain keys
 * it can also run by except 
 */

 db.getCollection("application")
 .aggregate(
   [
     {
       $match: {
         is_deleted: false,
         status_id: {
           $in: ["5f3b891f1cd30bf98aba2f8d", "5f3b89131cd30bf98aba2f8c"],
         },
       },
     },
     {
       $skip: 0,
     },
     {
       $limit: 40000,
     },
     {
       $addFields: { app_id: { $toString: "$_id" } },
     },
     {
       $lookup: {
         from: "business_info",
         let: { temp: "$app_id" },
         pipeline: [
           {
             $match: {
               $expr: {
                 $eq: ["$app_id", "$$temp"],
               },
               is_deleted: false,

               $or: [
                 {
                   not_submit_to_sba: { $exists: false },
                 },
                 { not_submit_to_sba: { $ne: 1 } },
               ],
             },
           },
         ],
         as: "business",
       },
     },
     {
       $addFields: { size: { $size: "$business" } },
     },
     {
       $match: { size: { $gt: 0 } },
     },
   ],
   { allowDiskUse: true }
 )
 .toArray()
 .map((t) => {
   return {
     app_id: t.business[0].app_id,
     user_id: t.business[0].user_id,
     sba_ppp_loan_number: t.business[0].sba_ppp_loan_number,
     status_id: t.status_id,
     email_address: t.business[0].email_address,
     borrower_name: t.business[0].business_name,
   };
 });


 /**
  * get all applciation with business with not_submit_to_sba key 
  */
  db.getCollection("application")
  .aggregate(
    [
      {
        $match: {
          is_deleted: false,
          status_id: {
            $in: ["5f3b891f1cd30bf98aba2f8d", "5f3b89131cd30bf98aba2f8c"],
          },
        },
      },
      {
        $skip:60000,
      },
      {
        $limit: 120000,
      },
      {
        $addFields: { app_id: { $toString: "$_id" } },
      },
      {
        $lookup: {
          from: "business_info",
          let: { temp: "$app_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$app_id", "$$temp"],
                },
                is_deleted: false
              },
            },
          ],
          as: "business",
        },
      },
      {
        $addFields: { size: { $size: "$business" } },
      },
      {
        $match: { size: { $gt: 0 } },
      },
    ],
    { allowDiskUse: true }
  )
  .toArray()
  .map((t) => {
    return  {
      app_id: t.business[0].app_id,
      user_id: t.business[0].user_id,
      "SBA PPP Loan Number": t.business[0].sba_ppp_loan_number,
      status_id: t.status_id,
      "Email Address": t.business[0].email_address,
      "Borrower Name": t.business[0].business_name,
      not_submit_to_sba: t.business[0].not_submit_to_sba ? t.business[0].not_submit_to_sba : ''
    }
  })